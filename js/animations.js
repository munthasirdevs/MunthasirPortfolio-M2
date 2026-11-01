/* ==========================================================================
   Master GSAP Motion Architecture & Non-3D Planar Micro-Interactions
   Munthasir Rahman (munthasir.com) - Monochrome Architectural Editorial
   ========================================================================== */

if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  if (typeof TextPlugin !== 'undefined') gsap.registerPlugin(TextPlugin);
}

// 1. WEB AUDIO API SYNTHESIZER (Mechanical Ticks & Completion Harmonic Chime)
class CyberAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.noiseBuffer = null;
    this.enabled = true;
    this.lastTickTime = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this._buildNoiseBuffer();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.isReady();
  }

  _buildNoiseBuffer() {
    if (!this.ctx || this.noiseBuffer) return;
    try {
      const sampleRate = this.ctx.sampleRate;
      const bufferSize = Math.floor(sampleRate * 0.05);
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.65;
      }
      this.noiseBuffer = buffer;
    } catch (e) {}
  }

  isReady() {
    return !!(this.ctx && this.ctx.state === 'running');
  }

  playScrambleTick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const now = this.ctx.currentTime;
      if (now - this.lastTickTime < 0.026) return; // throttle ticks
      this.lastTickTime = now;

      // Master tick gain
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.18, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);
      masterGain.connect(this.ctx.destination);

      // Layer A: Crisp mechanical noise click (relay snap)
      if (this.noiseBuffer) {
        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = this.noiseBuffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2800 + Math.random() * 1400, now);
        filter.Q.setValueAtTime(3.8, now);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.7, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

        noiseSource.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(masterGain);

        noiseSource.start(now);
        noiseSource.stop(now + 0.025);
      }

      // Layer B: Snappy frequency down-chirp (data transient)
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      const startFreq = 1600 + Math.random() * 900;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.02);

      oscGain.gain.setValueAtTime(0.35, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch (e) {}
  }

  playBurst(count = 4) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => this.playScrambleTick(), i * 30);
    }
  }

  playCompletionChime() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const now = this.ctx.currentTime;
      // Architectural crystal harmonic chime: D5, F#5, A5, D6
      const chords = [587.33, 739.99, 880.00, 1174.66];
      chords.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        const noteTime = now + idx * 0.075;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.12, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.75);
      });
    } catch (e) {}
  }
}

// TEXT SCRAMBLE ENGINE (Random Glyph Cycling with Resolution Easing)
class TextScrambler {
  constructor(el, audioSynth) {
    this.el = el;
    this.audioSynth = audioSynth;
    this.chars = '!<>-_\\/[]{}—=+*^?#________0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.queue = [];
    this.frame = 0;
    this.frameRequest = null;
    this.resolve = null;
  }

  setText(newText, duration = 1.0) {
    const oldText = this.el.innerText || '';
    const length = Math.max(oldText.length, newText.length);
    const totalFrames = Math.max(30, Math.floor(duration * 60));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * (totalFrames * 0.4));
      const end = start + Math.floor(Math.random() * (totalFrames * 0.6));
      this.queue.push({ from, to, start, end, char: '' });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;

    return new Promise(resolve => {
      this.resolve = resolve;
      this.update();
    });
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
          if (this.audioSynth) {
            this.audioSynth.playScrambleTick();
          }
        }
        output += `<span class="text-spanish">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      if (this.resolve) this.resolve();
    } else {
      this.frame++;
      this.frameRequest = requestAnimationFrame(() => this.update());
    }
  }
}

// 2. CREATIVE GSAP PRELOADER (Black Background + Top-Left % + Bottom-Right Bar + Center Scramble + Audio)
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    document.body.classList.remove('overflow-hidden');
    initScrollAnimations();
    initPlanarInteractions();
    return;
  }

  // Lock scroll while preloader runs
  document.body.classList.add('overflow-hidden');

  const audioSynth = new CyberAudioSynthesizer();
  audioSynth.init();

  const audioStatus = document.getElementById('preloader-audio-status');
  const updateAudioUI = () => {
    if (!audioStatus) return;
    if (audioSynth.isReady()) {
      audioStatus.innerHTML = '<span class="text-kingly font-bold">● AUDIO ENGINE ACTIVE</span>';
    } else {
      audioStatus.innerHTML = '<span class="text-spanish animate-pulse">♫ CLICK ANYWHERE FOR SOUND</span>';
    }
  };

  updateAudioUI();

  // Unlock audio context immediately on any user gesture or interaction
  const unlockAudio = () => {
    if (audioSynth.ctx && audioSynth.ctx.state === 'suspended') {
      audioSynth.ctx.resume().then(() => {
        updateAudioUI();
        audioSynth.playBurst(4);
      }).catch(() => {});
    } else {
      updateAudioUI();
    }
  };

  ['pointerdown', 'mousedown', 'keydown', 'touchstart', 'click'].forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true });
    preloader.addEventListener(evt, unlockAudio, { passive: true });
  });
  window.addEventListener('pointermove', unlockAudio, { once: true, passive: true });

  const counterEl = document.getElementById('preloader-counter');
  const progressBar = document.getElementById('preloader-progress-bar');
  const barVal = document.getElementById('preloader-bar-val');
  const statusEl = document.getElementById('preloader-status-text');
  const scrambleTitle = document.getElementById('preloader-scramble-text');
  const scrambleSubtitle = document.getElementById('preloader-sub-scramble');
  const phaseTag = document.getElementById('preloader-phase-tag');
  const binaryEl = document.getElementById('preloader-scramble-binary');

  const titleScrambler = scrambleTitle ? new TextScrambler(scrambleTitle, audioSynth) : null;
  const subScrambler = scrambleSubtitle ? new TextScrambler(scrambleSubtitle, null) : null;

  // Status telemetry steps
  const statusSteps = [
    { threshold: 0, text: 'SYS.INIT // CORE_KERNEL', phase: 'INITIALIZING PROTOCOL' },
    { threshold: 25, text: 'MOUNTING DISCORD BOT GATEWAYS...', phase: 'ROUTING WEBSOCKETS' },
    { threshold: 50, text: 'LOADING LARAVEL SAAS ARCHITECTURE...', phase: 'MIGRATING SCHEMAS' },
    { threshold: 75, text: 'COMPILING UI/UX TOKENS & 3D CANVAS...', phase: 'CALIBRATING FIBONACCI' },
    { threshold: 96, text: 'SYSTEM READY // ACCESS GRANTED', phase: 'SYSTEM VERIFIED' }
  ];

  // Binary stream visual flicker
  const binaryInterval = setInterval(() => {
    if (binaryEl) {
      const b1 = Math.floor(Math.random() * 256).toString(2).padStart(8, '0');
      const b2 = Math.floor(Math.random() * 256).toString(2).padStart(8, '0');
      binaryEl.textContent = `${b1} ${b2}`;
    }
  }, 85);

  // Trigger initial text scramble sequence (tuned for 2-second preloader)
  if (titleScrambler) {
    titleScrambler.setText('ARCHITECTING SOFTWARE', 0.5).then(() => {
      setTimeout(() => {
        if (titleScrambler) titleScrambler.setText('MUNTHASIR RAHMAN', 0.6);
      }, 200);
    });
  }

  if (subScrambler) {
    setTimeout(() => {
      subScrambler.setText('FULL-STACK & BOT ENGINEER // UI/UX DESIGNER', 0.7);
    }, 250);
  }

  const counterObj = { val: 0 };
  let chimePlayed = false;

  const tl = gsap.timeline({
    onComplete: () => {
      clearInterval(binaryInterval);
      document.body.classList.remove('overflow-hidden');
      initScrollAnimations();
      initPlanarInteractions();
    }
  });

  // Emergency fail-safe: guarantee preloader dismissal after 2.1s
  setTimeout(() => {
    if (preloader && preloader.style.display !== 'none') {
      clearInterval(binaryInterval);
      preloader.style.transition = 'opacity 0.25s ease';
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        preloader.style.pointerEvents = 'none';
        document.body.classList.remove('overflow-hidden');
        initScrollAnimations();
        initPlanarInteractions();
      }, 250);
    }
  }, 2100);

  // Increment counter and progress bar from 000 to 100 in 1.35s
  tl.to(counterObj, {
    val: 100,
    duration: 1.35,
    ease: 'power2.inOut',
    onUpdate: () => {
      const current = Math.floor(counterObj.val);
      if (counterEl) {
        counterEl.textContent = String(current).padStart(3, '0');
      }
      if (progressBar) {
        progressBar.style.width = `${current}%`;
      }
      if (barVal) {
        barVal.textContent = `${current}%`;
      }

      // Update status copy
      const step = [...statusSteps].reverse().find(s => current >= s.threshold);
      if (step) {
        if (statusEl) statusEl.textContent = step.text;
        if (phaseTag) phaseTag.textContent = step.phase;
      }

      // Play scramble ticks during counter progression
      if (current % 3 === 0) {
        audioSynth.playScrambleTick();
      }

      // Play chime when reaching 100%
      if (current >= 100 && !chimePlayed) {
        chimePlayed = true;
        audioSynth.playCompletionChime();
      }
    }
  }, 0);

  // Stage 4: Fade out all preloader UI rows & lift 5-Column Shutters to reveal site at 2s
  tl.to(['#preloader-top-row', '#preloader-center-content', '#preloader-bottom-row'], {
    opacity: 0,
    y: -10,
    duration: 0.2,
    ease: 'power2.in'
  }, 1.38)
  .to('.preloader-shutter', {
    yPercent: -100,
    duration: 0.45,
    stagger: 0.02,
    ease: 'expo.inOut'
  }, 1.5)
  .set('#preloader', { display: 'none', pointerEvents: 'none' });
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

// 5. HIGH-PRECISION ARCHITECTURAL CUSTOM CURSOR (Pointer Dot + Fluid Follower Ring)
function initCustomCursor() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

  let dot = document.getElementById('custom-cursor-dot');
  let ring = document.getElementById('custom-cursor-ring');

  // Auto-inject cursor elements if page does not have them in markup
  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'custom-cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
  }
  if (!ring) {
    ring = document.createElement('div');
    ring.id = 'custom-cursor-ring';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring);
  }

  if (typeof gsap === 'undefined') return;

  // Center coordinate alignment
  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

  // Ultra-responsive zero-lag dot + momentum-damped trailing ring
  const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.04, ease: 'power3.out' });
  const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.04, ease: 'power3.out' });
  const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.18, ease: 'power2.out' });
  const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.18, ease: 'power2.out' });

  let isVisible = false;

  const showCursor = () => {
    if (!isVisible) {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    }
  };

  const hideCursor = () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    isVisible = false;
  };

  window.addEventListener('mousemove', (e) => {
    showCursor();
    dotXTo(e.clientX);
    dotYTo(e.clientY);
    ringXTo(e.clientX);
    ringYTo(e.clientY);
  }, { passive: true });

  document.addEventListener('mouseleave', hideCursor);
  document.addEventListener('mouseenter', showCursor);

  // Click bounce reaction
  window.addEventListener('mousedown', () => {
    ring.classList.add('cursor-click');
  });

  window.addEventListener('mouseup', () => {
    ring.classList.remove('cursor-click');
  });

  // Delegated interactive element magnetic hover detection
  const interactiveSelector = 'a, button, input, select, textarea, [role="button"], .interactive-hover, .magnetic-btn, .spotlight-card, .counter-val, #ide-compile-btn, .copy-email-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      ring.classList.add('cursor-hover');
      dot.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      ring.classList.remove('cursor-hover');
      dot.classList.remove('cursor-hover');
    }
  });
}

// Initialize Custom Cursor immediately on script load & DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    if (!document.getElementById('preloader')) {
      initScrollAnimations();
      initPlanarInteractions();
    }
  });
} else {
  initCustomCursor();
  if (!document.getElementById('preloader')) {
    initScrollAnimations();
    initPlanarInteractions();
  }
}

