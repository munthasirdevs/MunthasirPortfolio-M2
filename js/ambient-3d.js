/* ==========================================================================
   Ambient 3D Canvas Wireframe Fibonacci Sphere & Keplerian Orbital Rings
   Pure Vanilla Canvas 2D Engine with Depth Shading & GSAP ScrollTrigger Integration
   Reference 1 (Orbital Curves) + Reference 5 (3D Globe Behind Code Window)
   ========================================================================== */

function initAmbient3DBackground() {
  const canvas = document.getElementById('ambient-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    state.sphereXOffset = window.innerWidth > 1024 ? width * 0.22 : 0;
  });

  const state = {
    rotY: 0,
    rotX: 0.22,
    sphereXOffset: window.innerWidth > 1024 ? width * 0.22 : 0,
    radius: window.innerWidth > 768 ? 240 : 160
  };

  // Generate 260 points on Fibonacci 3D Sphere
  const numPoints = 260;
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < numPoints; i++) {
    const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push({
      x: Math.cos(theta) * r,
      y: y,
      z: Math.sin(theta) * r
    });
  }

  // Generate 2 Keplerian Orbital Rings
  const ring1Points = [];
  const ring2Points = [];
  const ringSegments = 90;
  for (let i = 0; i <= ringSegments; i++) {
    const angle = (i / ringSegments) * Math.PI * 2;
    // Ring 1: tilted 30 deg
    ring1Points.push({
      x: Math.cos(angle) * 1.45,
      y: Math.sin(angle) * 0.45,
      z: Math.sin(angle) * 1.35
    });
    // Ring 2: tilted -45 deg
    ring2Points.push({
      x: Math.cos(angle) * 0.5,
      y: Math.sin(angle) * 1.5,
      z: Math.cos(angle) * 1.4
    });
  }

  // Connect to GSAP ScrollTrigger if available
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.to(state, {
      rotY: Math.PI * 4,
      rotX: -0.38,
      sphereXOffset: 0,
      radius: window.innerWidth > 768 ? 320 : 200,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2
      }
    });
  }

  function projectPoint(p, cx, cy, rad) {
    // 3D rotation matrix Y
    const cosY = Math.cos(state.rotY);
    const sinY = Math.sin(state.rotY);
    const x1 = p.x * cosY - p.z * sinY;
    const z1 = p.z * cosY + p.x * sinY;

    // 3D rotation matrix X
    const cosX = Math.cos(state.rotX);
    const sinX = Math.sin(state.rotX);
    const y2 = p.y * cosX - z1 * sinX;
    const z2 = z1 * cosX + p.y * sinX;

    const fov = 700;
    const scale = fov / (fov - z2 * rad);
    const px = cx + x1 * rad * scale;
    const py = cy + y2 * rad * scale;

    return { px, py, z2, scale };
  }

  function renderRing(ringPoints, cx, cy, rad, strokeStyle) {
    ctx.beginPath();
    let started = false;
    for (let i = 0; i < ringPoints.length; i++) {
      const proj = projectPoint(ringPoints[i], cx, cy, rad);
      if (!started) {
        ctx.moveTo(proj.px, proj.py);
        started = true;
      } else {
        ctx.lineTo(proj.px, proj.py);
      }
    }
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    state.rotY += 0.0016;

    const cx = width / 2 + state.sphereXOffset;
    const cy = height / 2;

    // Render Keplerian Ring 1 in rear/mid layer
    renderRing(ring1Points, cx, cy, state.radius, 'rgba(77, 77, 77, 0.28)');
    renderRing(ring2Points, cx, cy, state.radius, 'rgba(151, 151, 151, 0.22)');

    // Project and depth sort sphere nodes
    const projected = [];
    for (let i = 0; i < points.length; i++) {
      const proj = projectPoint(points[i], cx, cy, state.radius);
      projected.push(proj);
    }

    // Draw connecting lines between nearby points
    ctx.lineWidth = 0.6;
    for (let i = 0; i < projected.length; i++) {
      const p1 = projected[i];
      if (p1.z2 < -0.2) continue; // cull far back connections for clarity
      for (let j = i + 1; j < projected.length; j++) {
        const p2 = projected[j];
        const dx = p1.px - p2.px;
        const dy = p1.py - p2.py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 42) {
          const alpha = (1 - dist / 42) * Math.max(0.04, (p1.z2 + p2.z2 + 2) / 4 * 0.25);
          ctx.strokeStyle = `rgba(188, 188, 188, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
      }
    }

    // Render individual nodes with monochrome luminance depth shading
    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      // Monochrome depth mapping: #2B2B2B rear -> #717171 mid -> #BCBCBC / #DEDEDE front
      let color;
      let size;
      if (p.z2 > 0.4) {
        color = 'rgba(222, 222, 222, 0.85)'; // Kingly Cloud
        size = 1.8;
      } else if (p.z2 > 0) {
        color = 'rgba(188, 188, 188, 0.55)'; // Dust to Dust
        size = 1.4;
      } else if (p.z2 > -0.4) {
        color = 'rgba(113, 113, 113, 0.35)'; // Dull
        size = 1.0;
      } else {
        color = 'rgba(43, 43, 43, 0.25)';   // Shoe Wax
        size = 0.7;
      }

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAmbient3DBackground);
} else {
  initAmbient3DBackground();
}

