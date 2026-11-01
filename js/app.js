/* ==========================================================================
   Master Application Logic - Munthasir Rahman (munthasir.com)
   Monochrome Architectural Editorial Design System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollSpy();
  initMobileMenu();
  initHeroCodeCompiler();
  initProjectFilters();
  initUseCaseTerminal();
  initContactForm();
  initEmailCopy();
  initLiveBangladeshClock();
  initScrollToTop();
  initLinkOpenerSandbox();
  initXenonBreakpointSimulator();
  initReadmeViewer();
  initContactConfigurator();
  initSkillsSandbox();
  initRepoSearchAndFilter();
  init3DTagCloudCanvas();
  initGsxBotTerminal();
  initParticleSphereCanvas();
});

// 1. NAVBAR SCROLL SPY & SCROLL EFFECT
function initNavbarScrollSpy() {
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('shadow-lg', 'border-b', 'border-shoewax');
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
      } else {
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.75)';
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-kingly', 'border-b-2', 'border-kingly');
          link.classList.add('text-spanish');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-kingly', 'border-b-2', 'border-kingly');
            link.classList.remove('text-spanish');
          }
        });
      }
    });
  });
}

// 2. MOBILE MENU TOGGLE
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(mobileMenu, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      }
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// 3. HERO CODE COMPILER TOGGLE (Reference 4)
function initHeroCodeCompiler() {
  const compileBtn = document.getElementById('ide-compile-btn');
  const codeContent = document.getElementById('ide-code-content');
  if (!compileBtn || !codeContent) return;

  let isCompiled = false;

  const rawSourceCode = `01 const MunthasirRahman = {
02   handle: 'munthasirdevs',
03   location: 'Chuadanga, Khulna, BD',
04   roles: [
05     'Full-Stack & Bot Engineer',
06     'Web Developer & UI/UX Designer'
07   ],
08   principles: ['Clean Code', 'Creative Design', 'Responsive'],
09   currentFocus: 'Production-ready SaaS with Laravel',
10   stack: [
11     'Laravel', 'PHP', 'MySQL', 'JavaScript',
12     'TypeScript', 'Tailwind CSS', 'Docker', 'K8s'
13   ],
14   nextMilestone: 'Open-Source SaaS Boilerplate',
15   openSource: true
16 };
17 
18 // Turning ideas into production software through clean architecture.`;

  const compiledOutput = `01 {
02   "status": "200 OK",
03   "telemetry": "SYSTEM_OPTIMAL",
04   "runtime": "Node.js v20.12.2 / PHP 8.3",
05   "architecture": "Clean Modular Monolith + Discord Microservices",
06   "verifiedStats": {
07     "experience": "03+ Years",
08     "deliveredProjects": 23,
09     "satisfactionRate": "96%",
10     "publicRepositories": 26
11   },
12   "activeEngagements": [
13     "SaaS Architecture Partnerships",
14     "High-Uptime Discord Automation",
15     "Agency White-Label Web Systems"
16   ],
17   "latency": "14ms // Chuadanga Server Gateway"
18 }`;

  compileBtn.addEventListener('click', () => {
    isCompiled = !isCompiled;

    if (typeof gsap !== 'undefined') {
      gsap.to(codeContent, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          codeContent.textContent = isCompiled ? compiledOutput : rawSourceCode;
          compileBtn.innerHTML = isCompiled 
            ? '<span>◀ Source</span>' 
            : '<span>▶ Compile</span>';
          compileBtn.classList.toggle('bg-kingly');
          compileBtn.classList.toggle('text-chaos');
          compileBtn.classList.toggle('text-kingly');
          gsap.to(codeContent, { opacity: 1, duration: 0.25 });
        }
      });
    } else {
      codeContent.textContent = isCompiled ? compiledOutput : rawSourceCode;
      compileBtn.innerHTML = isCompiled ? '<span>◀ Source</span>' : '<span>▶ Compile</span>';
    }
  });
}

// 4. PROJECT CATEGORY FILTERS (Reference 3 & 7)
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-grid-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        b.classList.add('bg-shoewax/40', 'text-spanish', 'border-shoewax');
      });
      btn.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      btn.classList.remove('bg-shoewax/40', 'text-spanish', 'border-shoewax');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const matches = (filter === 'all' || category === filter);

        if (matches) {
          card.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. INTERACTIVE USE-CASE TERMINAL SWITCHER (Reference 4)
const useCaseData = {
  saas: {
    number: '01',
    problem: 'Building scalable SaaS architecture from scratch is time-consuming.',
    context: 'Founders and teams lose weeks wiring multi-tenant authentication, MySQL schema migrations, and responsive UI shells before writing core product logic.',
    filename: 'App/Services/TenantProvisioner.php',
    code: `<?php

namespace App\\Services;

use App\\Models\\Tenant;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Artisan;

class TenantProvisioner
{
    /**
     * Provision an isolated database and queue workers for a new tenant.
     */
    public function provision(Tenant $tenant): bool
    {
        $dbName = "tenant_{$tenant->uuid}";
        DB::statement("CREATE DATABASE IF NOT EXISTS \`{$dbName}\`");

        config(['database.connections.tenant.database' => $dbName]);
        DB::purge('tenant');

        Artisan::call('migrate --database=tenant --force');
        Artisan::call('queue:restart');

        return true;
    }
}`
  },
  discord: {
    number: '02',
    problem: 'Manual community moderation and fragmented bots degrade server uptime.',
    context: 'High-growth Discord communities require unified, event-driven automation paired with an intuitive web dashboard for real-time role and security control.',
    filename: 'src/clusters/GatewayManager.ts',
    code: `import { Client, GatewayIntentBits, Partials } from 'discord.js';

export class GatewayManager {
  private client: Client;

  constructor(private token: string) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
      ],
      partials: [Partials.Message, Partials.Channel]
    });
  }

  public async bootCluster(): Promise<void> {
    this.client.on('ready', () => {
      console.log(\`[GSX-BOT] Gateway authenticated as \${this.client.user?.tag}\`);
    });
    await this.client.login(this.token);
  }
}`
  },
  browser: {
    number: '03',
    problem: 'Repetitive browser workflows bottleneck QA and research teams.',
    context: 'Opening, validating, and sequencing dozens of URLs manually introduces human error and freezes browser memory threads.',
    filename: 'src/core/linkOpenerEngine.js',
    code: `export class LinkOpenerEngine {
  constructor(delayMs = 250) {
    this.delayMs = delayMs;
    this.urlRegex = /^(https?:\\/\\/)?([\\w.-]+)+[\\w-_~:/?#[\\]@!$&'()*+,;=.]+$/;
  }

  validateQueue(rawLines) {
    return rawLines
      .split('\\n')
      .map(line => line.trim())
      .filter(line => this.urlRegex.test(line));
  }

  launchSequentially(urls, onProgress) {
    urls.forEach((url, idx) => {
      setTimeout(() => {
        const fullUrl = url.startsWith('http') ? url : 'https://' + url;
        window.open(fullUrl, '_blank');
        onProgress(idx + 1, urls.length);
      }, idx * this.delayMs);
    });
  }
}`
  },
  whitelabel: {
    number: '04',
    problem: 'Agencies struggle to find engineering partners who respect design fidelity.',
    context: 'Handing off complex Figma UI/UX systems often results in broken responsive breakpoints and unmaintainable spaghetti code.',
    filename: 'ui/animations/gsapScrollSystem.js',
    code: `import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupPlanarChoreography(elements) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: elements.container,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
  .from(elements.cards, {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'expo.out'
  });
}`
  }
};

function initUseCaseTerminal() {
  const tabs = document.querySelectorAll('.use-case-tab-btn');
  const numberEl = document.getElementById('terminal-case-number');
  const problemEl = document.getElementById('terminal-case-problem');
  const contextEl = document.getElementById('terminal-case-context');
  const fileEl = document.getElementById('terminal-case-filename');
  const codeEl = document.getElementById('terminal-case-code');

  if (!tabs.length || !codeEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-case');
      const data = useCaseData[key];
      if (!data) return;

      tabs.forEach(t => {
        t.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        t.classList.add('text-spanish');
      });
      tab.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      tab.classList.remove('text-spanish');

      if (typeof gsap !== 'undefined') {
        gsap.to([problemEl, contextEl, codeEl], {
          opacity: 0,
          duration: 0.15,
          onComplete: () => {
            if (numberEl) numberEl.textContent = `PROBLEM STATEMENT // ${data.number}`;
            if (problemEl) problemEl.textContent = data.problem;
            if (contextEl) contextEl.textContent = data.context;
            if (fileEl) fileEl.textContent = data.filename;
            if (codeEl) codeEl.textContent = data.code;

            gsap.to([problemEl, contextEl, codeEl], { opacity: 1, duration: 0.25 });
          }
        });
      } else {
        if (numberEl) numberEl.textContent = `PROBLEM STATEMENT // ${data.number}`;
        if (problemEl) problemEl.textContent = data.problem;
        if (contextEl) contextEl.textContent = data.context;
        if (fileEl) fileEl.textContent = data.filename;
        if (codeEl) codeEl.textContent = data.code;
      }
    });
  });
}

// 6. CONTACT FORM SUBMISSION WITH LIVE TRANSMISSION STATUS
function initContactForm() {
  const form = document.getElementById('contact-project-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const statusOutput = document.getElementById('contact-status-output');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value || 'Architect';
    const email = form.querySelector('[name="email"]')?.value || 'Client';

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;

    if (statusOutput) {
      statusOutput.classList.remove('hidden');
      statusOutput.innerHTML = `<span class="text-dust font-mono text-xs">// [ENCRYPTING TELEMETRY PACKET FOR MUNTHASIR RAHMAN...]</span>`;
    }

    setTimeout(() => {
      if (statusOutput) {
        statusOutput.innerHTML = `<span class="text-kingly font-mono text-xs">// [200 OK // TRANSMISSION RECEIVED] Thank you, ${name}. Direct bridge opened. I will respond to ${email} within 24 hours.</span>`;
      }
      submitBtn.innerHTML = `<span>✓ TRANSMITTED</span>`;
      submitBtn.classList.add('bg-kingly', 'text-chaos');

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        form.reset();
      }, 4000);
    }, 1400);
  });
}

// 7. CLICK TO COPY EMAIL
function initEmailCopy() {
  const emailButtons = document.querySelectorAll('.copy-email-btn');
  emailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'munthasirrahman@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.getAttribute('data-original-text') || btn.innerHTML;
        btn.setAttribute('data-original-text', originalText);
        btn.innerHTML = `<span class="text-kingly font-mono text-xs">✓ COPIED (munthasirrahman@gmail.com)</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2500);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}

// 8. LIVE CHUADANGA, BANGLADESH CLOCK (GMT+6)
function initLiveBangladeshClock() {
  const clockElements = document.querySelectorAll('.live-clock-bd');
  if (!clockElements.length) return;

  function updateClock() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bdTime = new Date(utc + (3600000 * 6));

    const hours = String(bdTime.getHours()).padStart(2, '0');
    const minutes = String(bdTime.getMinutes()).padStart(2, '0');
    const seconds = String(bdTime.getSeconds()).padStart(2, '0');

    clockElements.forEach(el => {
      el.textContent = `${hours}:${minutes}:${seconds} [GMT+6]`;
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 9. SCROLL TO TOP TRIGGER
function initScrollToTop() {
  const topBtn = document.getElementById('scroll-to-top-btn');
  if (!topBtn) return;

  topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof gsap !== 'undefined') {
      gsap.to(window, { scrollTo: 0, duration: 1.0, ease: 'power3.inOut' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// 10. LINKOPENER LIVE EMBEDDED SANDBOX (projects.html)
function initLinkOpenerSandbox() {
  const textarea = document.getElementById('sandbox-url-input');
  const delayInput = document.getElementById('sandbox-delay-input');
  const delayDisplay = document.getElementById('sandbox-delay-display');
  const launchBtn = document.getElementById('sandbox-launch-btn');
  const logEl = document.getElementById('sandbox-log-output');

  if (!textarea || !launchBtn) return;

  if (delayInput && delayDisplay) {
    delayInput.addEventListener('input', () => {
      delayDisplay.textContent = `${delayInput.value}ms`;
    });
  }

  launchBtn.addEventListener('click', () => {
    const rawLines = textarea.value.trim().split('\n');
    const urlRegex = /^(https?:\/\/)?([\w.-]+)+[\w-_~:/?#[\]@!$&'()*+,;=.]+$/;
    const validUrls = rawLines
      .map(l => l.trim())
      .filter(l => l.length > 0 && urlRegex.test(l));

    if (!validUrls.length) {
      if (logEl) logEl.innerHTML = `<span class="text-dust font-mono">// [ERROR]: No valid URL strings detected. Try entering google.com or github.com.</span>`;
      return;
    }

    const delay = parseInt(delayInput ? delayInput.value : '250', 10);
    if (logEl) {
      logEl.innerHTML = `<span class="text-kingly font-mono">// [QUEUE VERIFIED]: ${validUrls.length} valid links detected. Simulating sequential launch with ${delay}ms delay...</span><br>`;
    }

    validUrls.forEach((url, i) => {
      setTimeout(() => {
        if (logEl) {
          const item = document.createElement('div');
          item.className = 'text-spanish font-mono text-xs';
          item.innerHTML = `> [${String(i + 1).padStart(2, '0')}/${validUrls.length}] Launched: <span class="text-dust font-bold">${url}</span>`;
          logEl.appendChild(item);
        }
      }, (i + 1) * delay);
    });
  });
}

// 11. XENONSTUDIOS BREAKPOINT SIMULATOR (projects.html)
function initXenonBreakpointSimulator() {
  const btns = document.querySelectorAll('.breakpoint-toggle-btn');
  const previewFrame = document.getElementById('xenon-preview-frame');
  const widthLabel = document.getElementById('xenon-width-label');

  if (!btns.length || !previewFrame) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => {
        b.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        b.classList.add('bg-shoewax/40', 'text-spanish');
      });
      btn.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      btn.classList.remove('bg-shoewax/40', 'text-spanish');

      const width = btn.getAttribute('data-width');
      previewFrame.style.maxWidth = width;
      if (widthLabel) widthLabel.textContent = `Viewport: ${width}`;
    });
  });
}

// 12. README VIEWER TABS (about.html)
function initReadmeViewer() {
  const tabBtns = document.querySelectorAll('.readme-tab-btn');
  const yamlView = document.getElementById('readme-yaml-view');
  const mdView = document.getElementById('readme-md-view');

  if (!tabBtns.length || !yamlView || !mdView) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        b.classList.add('text-spanish');
      });
      btn.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      btn.classList.remove('text-spanish');

      const mode = btn.getAttribute('data-tab');
      if (mode === 'yaml') {
        yamlView.classList.remove('hidden');
        mdView.classList.add('hidden');
      } else {
        yamlView.classList.add('hidden');
        mdView.classList.remove('hidden');
      }
    });
  });
}

// 13. 3-STEP PROJECT CONFIGURATOR (contact.html)
function initContactConfigurator() {
  const trackPills = document.querySelectorAll('.config-track-pill');
  const stackPills = document.querySelectorAll('.config-stack-pill');
  const jsonPreview = document.getElementById('config-json-preview');

  if (!trackPills.length || !jsonPreview) return;

  let selectedTrack = 'SaaS Partnership';
  let selectedStack = ['Laravel', 'MySQL', 'Tailwind CSS'];

  function updateJson() {
    const payload = {
      clientRequest: {
        track: selectedTrack,
        selectedStack: selectedStack,
        timestamp: new Date().toISOString(),
        locationGateway: 'Chuadanga, BD (GMT+6)',
        status: 'READY_TO_TRANSMIT'
      }
    };
    jsonPreview.textContent = JSON.stringify(payload, null, 2);
  }

  trackPills.forEach(pill => {
    pill.addEventListener('click', () => {
      trackPills.forEach(p => {
        p.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        p.classList.add('bg-shoewax/40', 'text-spanish');
      });
      pill.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      pill.classList.remove('bg-shoewax/40', 'text-spanish');
      selectedTrack = pill.getAttribute('data-value') || pill.textContent.trim();
      updateJson();
    });
  });

  stackPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const val = pill.getAttribute('data-value') || pill.textContent.trim();
      if (selectedStack.includes(val)) {
        selectedStack = selectedStack.filter(item => item !== val);
        pill.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        pill.classList.add('bg-shoewax/40', 'text-spanish');
      } else {
        selectedStack.push(val);
        pill.classList.add('bg-kingly', 'text-chaos', 'font-bold');
        pill.classList.remove('bg-shoewax/40', 'text-spanish');
      }
      updateJson();
    });
  });

  updateJson();
}

// 14. SKILLS CODE PREVIEWER (skills.html)
const skillCodeSnippets = {
  html: `<!-- Semantic HTML5 & Accessible Structure -->
<article class="architecture-node" role="article" aria-labelledby="node-title">
  <header>
    <h2 id="node-title" class="font-bold">Enterprise SaaS Core</h2>
    <time datetime="2026-11-01">2026.4 Production</time>
  </header>
  <p>Engineered with 100% semantic landmarks and ARIA standards.</p>
</article>`,
  css: `/* High-Performance Modern CSS Grid & Variables */
.monochrome-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  background-color: var(--color-chaos);
  border: 1px solid var(--color-shoewax);
}`,
  laravel: `<?php
// Laravel 11 Clean Service Architecture
namespace App\\Domain\\SaaS\\Services;

class TenantService
{
    public function __construct(
        protected DatabaseManager $db,
        protected EventDispatcher $events
    ) {}

    public function provision(string $tenantId): void
    {
        $this->db->statement("CREATE DATABASE tenant_{$tenantId}");
        $this->events->dispatch(new TenantProvisioned($tenantId));
    }
}`,
  discord: `// GSX-BOT TypeScript Cluster Gateway
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'telemetry') {
    await interaction.reply({ content: 'Cluster health: 99.98% uptime', ephemeral: true });
  }
});`,
  docker: `# Docker Multi-Stage Production Build
FROM php:8.3-fpm-alpine AS builder
WORKDIR /app
COPY . .
RUN composer install --no-dev --optimize-autoloader

FROM nginx:alpine AS runner
COPY --from=builder /app/public /var/www/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]`
};

function initSkillsSandbox() {
  const skillCards = document.querySelectorAll('.skill-interactive-card');
  const codeDisplay = document.getElementById('skill-code-display');
  const titleDisplay = document.getElementById('skill-title-display');

  if (!skillCards.length || !codeDisplay) return;

  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      skillCards.forEach(c => c.classList.remove('border-kingly'));
      card.classList.add('border-kingly');

      const key = card.getAttribute('data-skill-key');
      const title = card.getAttribute('data-skill-name') || key;
      if (skillCodeSnippets[key]) {
        if (titleDisplay) titleDisplay.textContent = `// Coding Conventions: ${title}`;
        codeDisplay.textContent = skillCodeSnippets[key];
      }
    });
  });
}

// 15. INTERACTIVE 3D TAG CLOUD CANVAS (Munthasir's 3D-tag-cloud repo)
function init3DTagCloudCanvas() {
  const canvas = document.getElementById('tag-cloud-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.clientWidth || 400);
  let height = (canvas.height = 240);

  const tags = [
    'Laravel', 'PHP', 'TypeScript', 'JavaScript', 'Tailwind',
    'Discord.js', 'Docker', 'MySQL', 'GSAP', 'HTML5',
    'CSS3', 'REST APIs', 'Node.js', 'Redis', 'WebSockets', 'Blade'
  ];

  const count = tags.length;
  const tagObjects = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    tagObjects.push({
      text: tags[i],
      x: Math.cos(theta) * radius,
      y: y,
      z: Math.sin(theta) * radius
    });
  }

  let angleX = 0.002;
  let angleY = 0.003;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    angleY = x * 0.00008;
    angleX = -y * 0.00008;
  });

  function renderCloud() {
    ctx.clearRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(width, height) * 0.42;

    tagObjects.forEach(t => {
      // Rotate Y
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = t.x * cosY - t.z * sinY;
      const z1 = t.z * cosY + t.x * sinY;

      // Rotate X
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = t.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + t.y * sinX;

      t.x = x1;
      t.y = y2;
      t.z = z2;

      const scale = 300 / (300 - z2 * r);
      const px = cx + x1 * r * scale;
      const py = cy + y2 * r * scale;

      const alpha = Math.max(0.15, (z2 + 1) / 2);
      ctx.font = `${Math.max(10, Math.floor(13 * scale))}px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = z2 > 0.2 ? `rgba(222, 222, 222, ${alpha})` : `rgba(151, 151, 151, ${alpha * 0.7})`;
      ctx.fillText(t.text, px, py);
    });

    requestAnimationFrame(renderCloud);
  }

  renderCloud();
}

// 16. GSX-BOT DISCORD COMMAND TERMINAL
function initGsxBotTerminal() {
  const buttons = document.querySelectorAll('.gsx-cmd-btn');
  const terminalOut = document.getElementById('gsx-terminal-output');
  if (!buttons.length || !terminalOut) return;

  const responses = {
    '/help': `> [GSX-BOT]: System Commands Registered:
  - /telemetry : Output cluster heartbeat & guild health
  - /moderate  : Automated regex & anti-raid ruleset
  - /dashboard : Generate secure OAuth2 management session
  - /uptime    : Real-time VPS container runtime status`,
    '/telemetry': `> [TELEMETRY 200 OK]:
  Cluster ID : Alpha-01 // Asia-South Gateway
  Latency    : 18ms
  Memory RSS : 64.2 MB / 512 MB
  WebSocket  : READYState = OPEN`,
    '/uptime': `> [UPTIME RECORD]:
  Status   : ACTIVE // HEALTHY
  Duration : 48 days, 14 hours, 22 mins
  Downtime : 0.00% (High-Availability Tier)`,
    '/moderate': `> [SECURITY CLUSTER]:
  Anti-Raid Mode : ENABLED (Strict Token Verification)
  Banned Phrases : 240 active filters loaded
  Auto-Role Sync : Connected to Web Panel`
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      buttons.forEach(b => b.classList.remove('bg-kingly', 'text-chaos'));
      btn.classList.add('bg-kingly', 'text-chaos');
      terminalOut.textContent = responses[cmd] || `> Executing ${cmd}...`;
    });
  });
}

// 17. PARTICLE SPHERE INTERACTIVE CANVAS
function initParticleSphereCanvas() {
  const canvas = document.getElementById('particle-sphere-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.clientWidth || 360);
  let height = (canvas.height = 220);

  const particles = [];
  const numParticles = 90;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 160,
      z: (Math.random() - 0.5) * 160,
      radius: Math.random() * 1.5 + 0.8
    });
  }

  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    angle += 0.015;

    const cx = width / 2;
    const cy = height / 2;

    particles.forEach(p => {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const x1 = p.x * cosA - p.z * sinA;
      const z1 = p.z * cosA + p.x * sinA;

      const fov = 200;
      const scale = fov / (fov - z1);
      const px = cx + x1 * scale;
      const py = cy + p.y * scale;

      const alpha = Math.max(0.15, (z1 + 80) / 160);
      ctx.fillStyle = `rgba(222, 222, 222, ${alpha})`;
      ctx.beginPath();
      ctx.arc(px, py, p.radius * scale, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// 20. REPOSITORY SEARCH & FILTER FOR ONE-BY-ONE CARDS (projects.html)
function initRepoSearchAndFilter() {
  const searchInput = document.getElementById('repo-search-input');
  const repoCards = document.querySelectorAll('.repo-showcase-item');
  const countBadge = document.getElementById('repo-count-badge');
  const filterBtns = document.querySelectorAll('.archive-filter-pill');

  if (!repoCards.length) return;

  let currentCategory = 'all';
  let currentSearch = '';

  function applyFilters() {
    let visibleCount = 0;

    repoCards.forEach(card => {
      const name = (card.getAttribute('data-repo-name') || '').toLowerCase();
      const desc = (card.getAttribute('data-repo-desc') || '').toLowerCase();
      const lang = (card.getAttribute('data-repo-lang') || '').toLowerCase();
      const cat = (card.getAttribute('data-repo-cat') || '').toLowerCase();

      const matchesCategory = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = !currentSearch || 
        name.includes(currentSearch) || 
        desc.includes(currentSearch) || 
        lang.includes(currentSearch);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `${visibleCount} Repositories`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-kingly', 'text-chaos', 'font-bold');
        b.classList.add('bg-shoewax/40', 'text-spanish');
      });
      btn.classList.add('bg-kingly', 'text-chaos', 'font-bold');
      btn.classList.remove('bg-shoewax/40', 'text-spanish');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });
}
