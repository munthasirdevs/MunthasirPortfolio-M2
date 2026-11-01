/* ==========================================================================
   Master GSAP Motion Architecture & Non-3D Planar Micro-Interactions
   Munthasir Rahman (munthasir.com) - Monochrome Architectural Editorial
   ========================================================================== */

if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  if (typeof TextPlugin !== 'undefined') gsap.registerPlugin(TextPlugin);
}

// 1. CREATIVE GSAP PRELOADER ("Munthasir" Reference 1 Calligraphic Sequence)
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    document.body.classList.remove('overflow-hidden');
    initScrollAnimations();
    initPlanarInteractions();
    return;
  }

  // Disable scroll while preloader runs
  document.body.classList.add('overflow-hidden');

  const counterObj = { val: 0 };
  const counterEl = document.getElementById('preloader-counter');
  const statusEl = document.getElementById('preloader-status-text');

  const statusMessages = [
    'SYS.INIT // MUNTHASIR.DEVS [v2026.4]',
    'LOADING LARAVEL SAAS MODULES...',
    'MOUNTING DISCORD BOT GATEWAYS...',
    'COMPILING UI/UX DESIGN TOKENS...',
    'SYSTEM READY // ARCHITECTURE LOADED'
  ];

  let currentMsgIdx = 0;
  const statusInterval = setInterval(() => {
    if (statusEl && currentMsgIdx < statusMessages.length) {
      statusEl.textContent = statusMessages[currentMsgIdx];
      currentMsgIdx++;
    }
  }, 500);

  const tl = gsap.timeline({
    onComplete: () => {
      clearInterval(statusInterval);
      document.body.classList.remove('overflow-hidden');
      initScrollAnimations();
      initPlanarInteractions();
    }
  });

  // Stage 1: Orbital calibration and counter tick (0.0s - 0.8s)
  tl.fromTo('.preloader-orbital-arc',
    { strokeDasharray: 1200, strokeDashoffset: 1200 },
    { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut', stagger: 0.12 }, 0
  )
  .fromTo('.preloader-bounding-box',
    { scale: 0.92, opacity: 0 },
    { scale: 1.0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' }, 0.1
  )
  .to(counterObj, {
    val: 100,
    duration: 2.3,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (counterEl) {
        counterEl.textContent = String(Math.floor(counterObj.val)).padStart(3, '0');
      }
    }
  }, 0)

  // Stage 2: Serif letters & liquid calligraphic script "h" (0.4s - 1.8s)
  .from('.preloader-serif-letter', {
    y: 35,
    opacity: 0,
    duration: 0.7,
    stagger: 0.04,
    ease: 'expo.out'
  }, 0.35)
  .fromTo('.preloader-script-h',
    { strokeDasharray: 2400, strokeDashoffset: 2400 },
    { strokeDashoffset: 0, duration: 1.15, ease: 'power3.inOut' }, 0.7
  )

  // Stage 3: Specular metallic light sweep (1.8s - 2.4s)
  .fromTo('.preloader-metallic-sheen',
    { xPercent: -120 },
    { xPercent: 120, duration: 0.65, ease: 'power2.inOut' }, 1.75
  )
  .to('.preloader-anchor-node', {
    backgroundColor: '#DEDEDE',
    boxShadow: '0 0 10px rgba(222,222,222,0.8)',
    duration: 0.3,
    stagger: 0.05
  }, 2.0)

  // Stage 4: Five-Column Shutter Lift (2.4s - 3.1s)
  .to('#preloader-center-content', {
    scale: 0.92,
    y: -25,
    opacity: 0,
    duration: 0.45,
    ease: 'power3.in'
  }, 2.4)
  .to('.preloader-shutter', {
    yPercent: -100,
    duration: 0.75,
    stagger: 0.06,
    ease: 'expo.inOut'
  }, 2.55)
  .set('#preloader', { display: 'none' });
}

// 2. PLANAR (NON-3D) SPOTLIGHT BORDER TRACKING & 2D MAGNETIC BUTTON PULL
function initPlanarInteractions() {
  // Planar radial spotlight tracking for mousemove
  const spotlightElements = document.querySelectorAll('.spotlight-card, .bento-card, .project-card, .timeline-card');
  spotlightElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 2D flat magnetic button pull (Strictly within X-Y plane, NO 3D perspective)
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.32, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.32, ease: 'power3.out' });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * 0.22);
      yTo(relY * 0.22);
    });

    btn.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });

  // Service Accordion Row Hover Effect (Reference 7)
  const serviceRows = document.querySelectorAll('.service-accordion-row');
  serviceRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      serviceRows.forEach(r => r.classList.remove('active-service-row'));
      row.classList.add('active-service-row');
    });
  });
}

// 3. MASTER SCROLL-TRIGGERED ANIMATIONS
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Hero Section Entrance
  const heroTL = gsap.timeline({ delay: 0.1 });
  heroTL
    .from('.hero-eyebrow', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' })
    .from('.hero-bounding-box', { opacity: 0, scale: 0.96, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.3')
    .from('#hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-script-overlay', { opacity: 0, x: 20, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.5')
    .from('.hero-bio', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-status', { opacity: 0, duration: 0.5 }, '-=0.3')
    .from('#hero-ide-window', { opacity: 0, x: 30, duration: 0.8, ease: 'power3.out' }, '-=0.7');

  // Telemetry Metric Counters (GSAP count-up)
  ScrollTrigger.batch('.counter-val', {
    start: 'top 88%',
    once: true,
    onEnter: (elements) => {
      elements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isFloat = el.getAttribute('data-float') === 'true';
        const obj = { count: 0 };

        gsap.to(obj, {
          count: target,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => {
            if (isFloat) {
              el.textContent = `${prefix}${obj.count.toFixed(1)}${suffix}`;
            } else {
              el.textContent = `${prefix}${Math.floor(obj.count)}${suffix}`;
            }
          }
        });
      });
    }
  });

  // Skills Progress Bar Animation & Percentage Counters
  ScrollTrigger.batch('.skill-progress-bar', {
    start: 'top 90%',
    once: true,
    onEnter: (bars) => {
      bars.forEach(bar => {
        const pct = bar.getAttribute('data-percent') || '0';
        gsap.to(bar, {
          width: `${pct}%`,
          duration: 1.4,
          ease: 'power3.out'
        });
      });
    }
  });

  ScrollTrigger.batch('.skill-counter-val', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) => {
      elements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const obj = { count: 0 };
        gsap.to(obj, {
          count: target,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = `${Math.floor(obj.count)}%`;
          }
        });
      });
    }
  });

  // Generic Stagger Fade-Up for Bento Cards & Sections
  const animatedSections = document.querySelectorAll('.animate-on-scroll');
  animatedSections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true
      }
    });
  });

  // Section Eyebrows Scramble Effect
  const eyebrows = document.querySelectorAll('.section-eyebrow');
  eyebrows.forEach(eb => {
    const originalText = eb.textContent.trim();
    ScrollTrigger.create({
      trigger: eb,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        if (gsap.plugins.textPlugin) {
          gsap.to(eb, {
            duration: 0.5,
            text: {
              value: originalText,
              delimiter: ''
            },
            ease: 'none'
          });
        }
      }
    });
  });

  // Pulsing Grid Matrix lit cells (Reference 4)
  initMatrixPulsingCells();
}

// 4. MATRIX BACKGROUND PULSING CELLS (Reference 4)
function initMatrixPulsingCells() {
  const container = document.getElementById('matrix-grid-bg');
  if (!container) return;

  const numLitBoxes = 8;
  const boxes = [];

  for (let i = 0; i < numLitBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'absolute bg-shoewax/35 border border-thunder/40 pointer-events-none transition-opacity duration-1000';
    box.style.width = '64px';
    box.style.height = '64px';
    box.style.opacity = '0';
    container.appendChild(box);
    boxes.push(box);
  }

  function randomizeBoxes() {
    const maxX = Math.floor(window.innerWidth / 64);
    const maxY = Math.floor(container.offsetHeight / 64);

    boxes.forEach(box => {
      const col = Math.floor(Math.random() * maxX);
      const row = Math.floor(Math.random() * Math.min(maxY, 20));
      box.style.left = `${col * 64}px`;
      box.style.top = `${row * 64}px`;
      box.style.opacity = Math.random() > 0.4 ? '0.6' : '0';
    });
  }

  randomizeBoxes();
  setInterval(randomizeBoxes, 3800);
}

// 5. CUSTOM VECTOR SELECTION CURSOR (Reference 6)
function initCustomCursor() {
  const pointer = document.getElementById('custom-cursor-pointer');
  const box = document.getElementById('custom-cursor-box');
  if (!pointer || !box || window.matchMedia('(pointer: coarse)').matches) return;

  document.body.classList.add('has-custom-cursor');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  const boxXTo = gsap.quickTo(box, 'x', { duration: 0.18, ease: 'power2.out' });
  const boxYTo = gsap.quickTo(box, 'y', { duration: 0.18, ease: 'power2.out' });

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    pointer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    boxXTo(mouseX - 18);
    boxYTo(mouseY - 18);
  });

  // Scale cursor over interactive elements
  const interactives = document.querySelectorAll('a, button, input, select, textarea, .interactive-hover');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(box, { width: 50, height: 50, x: mouseX - 25, y: mouseY - 25, borderColor: '#DEDEDE', duration: 0.2 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(box, { width: 36, height: 36, x: mouseX - 18, y: mouseY - 18, borderColor: '#979797', duration: 0.2 });
    });
  });
}

// Auto-run cursor immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCustomCursor);
} else {
  initCustomCursor();
}

