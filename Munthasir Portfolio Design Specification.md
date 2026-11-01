Master Frontend Architecture and Design Specification for Munthasir Rahman (munthasir.com)
Visual Synthesis and Hybrid Aesthetic Brainstorming
The architectural redesign of munthasir.com addresses a foundational evolution in the professional profile of Munthasir Rahman1. Legacy iterations of the domain positioned the creator primarily as a Bangladesh-based Web Developer and UI/UX Designer focused on clean code, creative interfaces, and mobile-first responsiveness1. Concurrently, the engineering output documented across the twenty-five public repositories on GitHub (munthasirdevs) demonstrates a sophisticated progression into Full-Stack and Bot Engineering, custom workflow automation, Discord bot ecosystems with integrated web dashboards, and production-ready SaaS applications built with Laravel, Docker, Kubernetes, and AI/ML integration patterns2. A single-dimensional portfolio template fails to reconcile these dual competencies. By synthesizing the seven visual reference paradigms provided for the redesign, this specification establishes a cohesive frontend aesthetic termed Monochrome Architectural Editorial. Rather than borrowing the saturated lime-green accents of Reference 5 or the deep royal-violet gradients of Reference 7, the hybrid system strips away chromatic distraction and maps every structural, typographic, and interactive surface onto the strict seven-tone grayscale palette defined in Reference 2 (#0F0F0F Chaos Black through #DEDEDE Kingly Cloud).
The conceptual keystone of this synthesis is Reference 1, which features the bespoke typographic mark for "Munthasir" suspended over a textured #0F0F0F (Chaos Black) canvas intersected by delicate, sweeping orbital hairlines. In this emblem, the initial syllable "Munt" is constructed in a sharp, high-contrast, slightly italicized editorial serif with a tactile brushed-silver noise grain, while the horizontal crossbar of the "t" extends in a continuous, sweeping calligraphic flourish to form the tall ascender and deep looping descender of a luxury script "h", before resolving back into the structured silver serif characters "asir". This visual duality directly mirrors the engineering and design synthesis of the portfolio: deterministic, structured backend systems architecture ("Munt") transitioning seamlessly into fluid, human-centered user experience design ("hasir")1.
To translate this typographic philosophy into a complete multi-page web application using only HTML5, CSS3, Tailwind CSS, vanilla JavaScript, and GSAP, the architecture extracts distinct spatial mechanics from each of the remaining UI references and unifies them under uniform 1px structural borders (#2B2B2B Shoe Wax and #4D4D4D Thunder) and specular metallic text treatments (#DEDEDE Kingly Cloud and #BCBCBC Dust To Dust). Reference 3 (SentoBot) informs the vertical fluted curtain ribbing in the upper viewport, the four-pillar telemetry counter bar, the horizontal pill-tab filtering mechanics, and the use of minimalist vector schematics embedded inside the lower half of process cards. Reference 4 (Toolify) contributes the subtle background square-grid matrix with randomly illuminated cells, the macOS-inspired dual-pane request/response code window, the six-card bento feature grid terminating in monospace CLI command bars, and the interactive four-tab use-case terminal at the base of the page. Reference 5 (Adrian Cole) supplies the macro single-page navigation flow, the fixed left-hand vertical social rail, the developer bio object window (const MunthasirRahman = {...}), the ambient 3D wireframe sphere in the hero background, the vertical experience timeline axis, and the split contact portal. Reference 6 (Tyapkovv) injects high-fashion editorial graphic design cues via dashed vector selection bounding boxes accented with 8px × 8px solid #DEDEDE corner anchor nodes, a radial letter spotlight, and bold numbered service pills (1 through 4). Finally, Reference 7 (Gerold) provides the full-width numbered horizontal service accordion rows (01 through 04), the side-by-side parallel tracks for Experience and R&D/Education, and the percentage-based technical skill readout cards.
Reference Source
	Core Visual & Structural Elements Extracted
	Hybrid Adaptation within the Monochrome Palette (#0F0F0F – #DEDEDE)
	Reference 1: Munthasir Brand Mark
	Brushed silver serif "Munt" + sweeping calligraphic script "h" + serif "asir" over dark textured canvas with orbital hairlines.
	Deployed as the live SVG centerpiece for the creative GSAP preloader sequence and docked as a layered typographic focal motif in the Hero and Footer sections.
	Reference 2: PalettePoint Grayscale
	7-tone monochrome system: Chaos Black (#0F0F0F), Shoe Wax (#2B2B2B), Thunder (#4D4D4D), Dull (#717171), Spanish Grey (#979797), Dust To Dust (#BCBCBC), Kingly Cloud (#DEDEDE).
	Enforced globally as the exclusive color architecture across all backgrounds, elevated cards, borders, typography, syntax highlighting, and interactive states.
	Reference 3: SentoBot Dark UI
	Vertical fluted header ribs, 4-column metric counter strip, pill category tabs, 3-column workflow cards with bottom vector schematics.
	Re-engineered in Chaos Black and Shoe Wax for the Career Telemetry Bar, the "How Architecture Works" 3-step cards, and the Project Archive category filter.
	Reference 4: Toolify SaaS UI
	Background grid matrix with lit cells, macOS split Request/Response code window, 3×2 bento cards with bottom CLI command pills, tabbed use-case terminal.
	Adapted for the Hero interactive code compiler window, the 6-card Capabilities Bento Grid, and the interactive "Built For Real Engineering Use Cases" switcher.
	Reference 5: Adrian Cole Portfolio
	Left social rail, sticky navbar, < Hello, I'm /> intro, JS object bio code window over a 3D wireframe sphere, portrait with corner brackets, timeline, contact split.
	Stripped of lime green; re-styled in Kingly Cloud (#DEDEDE) and Dust To Dust (#BCBCBC). The 3D wireframe globe is expanded into a full-bleed ambient HTML5 Canvas background.
	Reference 6: Tyapkovv 2025 UI
	Dashed vector bounding box with square corner/midpoint handles, custom vector cursor, radial letter spotlight, numbered service tags, framed portrait with floating badges.
	Used to frame the Hero display typography and the About Me monochrome portrait using #4D4D4D dashed lines, #DEDEDE anchor nodes, and floating stack badges.
	Reference 7: Gerold Developer UI
	Interactive numbered service accordion rows (01–04), filterable work showcase, parallel Experience & Education columns, skill percentage cards (92%, 99%).
	Integrated with the bento grid to create a dual-layer Services section, a filterable GitHub Repository Showcase, and the Skills Matrix with GSAP number counters.
	Global Design System and Token Architecture
Monochromatic Color Palette Specification
The visual authority of the portfolio relies on strict adherence to the seven named grayscale tones provided in Reference 2. By eliminating chromatic hues, the interface establishes depth and scannability through deliberate luminance contrast, glassmorphic surface elevation, border sharpness, and subtle metallic noise gradients. Pure black (#000000) and pure white (#FFFFFF) are excluded from standard structural surfaces so that the warm, tactile film-grain qualities of Chaos Black (#0F0F0F) and Kingly Cloud (#DEDEDE) govern the dynamic range of the display.
Color Name
	HEX Code
	RGB Value
	CMYK Value
	Tailwind Token Name
	Designated Frontend Architectural Role
	Chaos Black
	#0F0F0F
	15, 15, 15
	0%, 0%, 0%, 94%
	chaos
	Primary <body> canvas, main section backgrounds, terminal interior wells, and inverted text color inside solid primary CTA buttons.
	Shoe Wax
	#2B2B2B
	43, 43, 43
	0%, 0%, 0%, 83%
	shoewax
	Elevated card surfaces (bg-shoewax/40), sticky navbar glass base (bg-shoewax/60), code window headers, pill backgrounds, and resting 1px structural borders.
	Thunder
	#4D4D4D
	77, 77, 77
	0%, 0%, 0%, 70%
	thunder
	Active or hovered card borders, dashed vector bounding lines, timeline axis tracks, input field focus rings, and secondary button borders.
	Dull
	#717171
	113, 113, 113
	0%, 0%, 0%, 56%
	dull
	Muted metadata, code line numbers, inactive filter tab labels, form placeholders, copyright footnotes, and decorative background grid hairlines (opacity-15).
	Spanish Grey
	#979797
	151, 151, 151
	0%, 0%, 0%, 41%
	spanish
	Standard body paragraphs (<p>), card descriptions, timeline narrative text, secondary navigation links, and code comment syntax (// ...).
	Dust To Dust
	#BCBCBC
	188, 188, 188
	0%, 0%, 0%, 26%
	dust
	Subheadings (H3, H4), active navigation links, tech stack badge text, code property keys, and secondary button labels.
	Kingly Cloud
	#DEDEDE
	222, 222, 222
	0%, 0%, 0%, 13%
	kingly
	Primary display headings (H1, H2), the "Munthasir" signature mark, solid primary CTA button fills (bg-kingly text-chaos), active vector nodes, and metric numbers.
	To replicate the brushed silver texture of Reference 1 and the subtle surface illumination of References 3, 4, and 7 without introducing external colors, the global CSS file defines three foundational gradient utilities constructed strictly from the seven palette tokens. The Metallic Text Gradient (.text-metallic) applies linear-gradient(135deg, #DEDEDE 0%, #BCBCBC 45%, #717171 50%, #DEDEDE 100%) clipped to the text foreground (-webkit-background-clip: text; color: transparent) paired with an inline SVG <feTurbulence> noise filter at 4% opacity. The Card Surface Gradient (.bg-card-surface) layers linear-gradient(180deg, rgba(43, 43, 43, 0.45) 0%, rgba(15, 15, 15, 0.85) 100%) over a backdrop-filter: blur(12px) glass pane. Finally, the Active Service Row Sweep (.bg-row-sweep) replaces the purple highlight bar of Reference 7 with a liquid graphite sheen defined by linear-gradient(90deg, #2B2B2B 0%, #4D4D4D 50%, #2B2B2B 100%).
Typographic Hierarchy and Font Pairing
The typographic architecture pairs four distinct font classifications loaded via Google Fonts in the document <head> to capture the calligraphic heritage of Reference 1 alongside the technical precision of References 4, 5, and 6. Playfair Display (600, 700, 700 italic) and Pinyon Script (400) serve as the editorial serif and calligraphic script pairing (font-serif-editorial and font-script) used to render the "Munthasir" signature mark and selective italicized emphasis words inside section headers. Plus Jakarta Sans (700, 800) combined with Syne (700, 800) provides the wide, architectural display geometry (font-display) for H1 and H2 headlines, while Inter (400, 500, 600) handles high-legibility UI body copy (font-sans). JetBrains Mono (400, 500, 700) governs all developer syntax (font-mono), including the < Hello, I'm /> intro tag, IDE code windows, CLI command pills, numbered indices (01 through 06), and availability telemetry1.
HTML Element / Token
	Font Family
	Desktop Size (lg:)
	Mobile Size (base)
	Line Height
	Letter Spacing
	Color Token
	Tailwind Utility Classes
	Brand Signature (SVG / .brand-sig)
	Playfair Display + Pinyon Script
	96px (6rem)
	52px (3.25rem)
	1.0
	-0.03em
	#DEDEDE (kingly)
	font-serif-editorial text-kingly select-none
	H1 (Hero Primary Title)
	Plus Jakarta Sans / Syne (800)
	68px (4.25rem)
	40px (2.5rem)
	1.05
	-0.04em
	#DEDEDE (kingly)
	text-4xl lg:text-[68px] font-extrabold tracking-tighter text-kingly
	H2 (Section Display Header)
	Plus Jakarta Sans (700)
	44px (2.75rem)
	28px (1.75rem)
	1.15
	-0.025em
	#DEDEDE (kingly)
	text-2xl lg:text-[44px] font-bold tracking-tight text-kingly
	H3 (Card & Module Title)
	Inter (600)
	22px (1.375rem)
	18px (1.125rem)
	1.3
	-0.015em
	#DEDEDE (kingly)
	text-lg lg:text-[22px] font-semibold text-kingly
	H4 (Timeline / Sub-module)
	Inter (600)
	18px (1.125rem)
	16px (1rem)
	1.4
	-0.01em
	#BCBCBC (dust)
	text-base lg:text-lg font-medium text-dust
	H5 (Section Eyebrow Tag)
	JetBrains Mono (500)
	13px (0.8125rem)
	12px (0.75rem)
	1.5
	0.12em
	#BCBCBC (dust)
	font-mono text-xs lg:text-[13px] uppercase tracking-widest text-dust
	H6 (Micro Metadata / Pill)
	JetBrains Mono (400)
	12px (0.75rem)
	11px (0.6875rem)
	1.4
	0.06em
	#979797 (spanish)
	font-mono text-[11px] lg:text-xs text-spanish
	P (Lead Body Copy)
	Inter (400)
	18px (1.125rem)
	16px (1rem)
	1.7
	0em
	#979797 (spanish)
	font-sans text-base lg:text-lg leading-relaxed text-spanish
	P (Standard Card Copy)
	Inter (400)
	15px (0.9375rem)
	14px (0.875rem)
	1.65
	0em
	#979797 (spanish)
	font-sans text-sm lg:text-[15px] leading-relaxed text-spanish
	CODE (Terminal / IDE Text)
	JetBrains Mono (400)
	13.5px
	12px
	1.75
	0em
	#BCBCBC (dust)
	font-mono text-xs lg:text-[13.5px] leading-7 text-dust
	Spatial Grid, Background Textures, and Ambient 3D Canvas
Because the color palette is strictly monochromatic and 3D card hover tilting is prohibited, spatial luxury is achieved by compositing three background depth layers beneath the foreground DOM content. At the lowest level (z-0), the <body> element maintains a solid #0F0F0F (Chaos Black) canvas overlaid with a fixed, non-interactive SVG film-grain texture (opacity: 0.035; z-index: 50) that unifies all grayscale tones with a subtle analog finish. Immediately above the base canvas (z-[1]), the Architectural Grid and Fluted Ribbing Layer merges the background treatments of References 3 and 4. Across the top 850px of the document, a CSS repeating-linear-gradient(90deg, rgba(43,43,43,0.18) 0px, rgba(15,15,15,0) 40px, rgba(15,15,15,0) 80px) creates the vertical fluted curtain ribs seen in Reference 3. Spanning the remainder of the document is a 64px × 64px hairline coordinate grid (border-color: rgba(77, 77, 77, 0.14)) derived from Reference 4, within which a lightweight JavaScript interval selects six to eight grid cells every four seconds and crossfades their background between transparent and rgba(43, 43, 43, 0.35) via GSAP.
The third environmental layer (z-[2]) introduces an Ambient 3D Wireframe Orbital Sphere and Node Mesh rendered on a fixed HTML5 <canvas id="ambient-3d-canvas" class="fixed inset-0 pointer-events-none z-[2] opacity-65"></canvas>. Expanding upon the wireframe globe positioned behind the code window in Reference 5 and the sweeping elliptical hairlines of Reference 1, this pure JavaScript 3D projection engine calculates 260 points distributed across a mathematical Fibonacci sphere surrounded by two tilted Keplerian orbital rings. Front-hemisphere vertices and connecting wireframe arcs render in #DEDEDE (Kingly Cloud) and #BCBCBC (Dust To Dust), while rear-hemisphere geometry recedes into #4D4D4D (Thunder) and #2B2B2B (Shoe Wax) via depth-sorted alpha occlusion. Coupled directly to GSAP ScrollTrigger, the 3D sphere dynamically transforms as the visitor scrolls through the document: in the Hero section, it orbits slowly behind the right-hand IDE code window; across the About and Services sections, the virtual camera dollies inward so the orbital rings expand across the full viewport width; throughout the Projects and Experience sections, the vertices compress into a vertical double-helix aligned with the central timeline axis; and in the Contact section, the geometry re-converges into a glowing monochrome globe beside the project scoping form.
Spatial Layer
	Z-Index
	DOM Selector / Element
	Visual Mechanics & Reference Origin
	Monochrome Color Tokens Applied
	Layer 0: Base Void
	z-0
	body.bg-chaos
	Solid ultra-dark foundational canvas with global 3.5% opacity SVG <feTurbulence> film grain (Reference 1).
	#0F0F0F (chaos) base with #BCBCBC (dust) micro-grain.
	Layer 1A: Fluted Ribs
	z-[1]
	div#fluted-header-bg
	Vertical 80px-period fluted curtain columns across the upper 850px viewport (Reference 3).
	#2B2B2B (shoewax at 18% alpha) fading into #0F0F0F.
	Layer 1B: Matrix Grid
	z-[1]
	div#matrix-grid-bg
	64px × 64px square coordinate grid with GSAP-animated pulsing cells every 4.0s (Reference 4).
	#4D4D4D (thunder at 14% alpha) lines; #2B2B2B lit cells.
	Layer 2: 3D Canvas
	z-[2]
	canvas#ambient-3d-canvas
	ScrollTrigger-scrubbed 3D Fibonacci wireframe sphere (260 nodes) + 2 Keplerian orbital rings (References 1 & 5).
	#DEDEDE (kingly) front nodes; #979797 mid; #2B2B2B rear.
	Layer 3: Content DOM
	z-10
	main#smooth-content
	Primary interactive foreground sections, glassmorphic cards, code terminals, and typography.
	Full 7-tone spectrum (#0F0F0F through #DEDEDE).
	Layer 4: Chrome & UI
	z-40
	header#main-navbar, aside#social-rail
	Fixed top glass navigation bar, left vertical social icon rail, and custom vector selection cursor (References 5 & 6).
	#0F0F0F/75 glass, #2B2B2B borders, #DEDEDE active states.
	Creative GSAP Preloader and Non-3D Motion Architecture
The Signature Munthasir Calligraphic Preloader Sequence
Before unlocking the primary document scroll, the application executes a bespoke 3.1-second GSAP loading sequence titled "The Architect's Signature & System Boot", engineered around the Reference 1 "Munthasir" graphic mark. The preloader container (div#preloader.fixed.inset-0.z-[100].flex.flex-col.justify-between.p-6.lg:p-12.bg-chaos.overflow-hidden) is backed by five vertical column shutter panels (.preloader-shutter, each styled as w-1/5 h-full bg-chaos border-r border-shoewax/50), mirroring the vertical column geometry of Reference 3. The top bar displays live system initialization metadata in JetBrains Mono (SYS.INIT // MUNTHASIR.DEVS [v2026.4]) on the left and geographic coordinates (CHUADANGA, KHULNA, BD // 23.6439° N, 88.8556° E) on the right1. The bottom bar pairs a cycling engineering status readout (LOADING LARAVEL SAAS MODULES..., MOUNTING DISCORD BOT GATEWAYS..., COMPILING UI/UX DESIGN TOKENS..., SYSTEM READY)1 with a monumental three-digit percentage counter (#preloader-counter) rendered in Plus Jakarta Sans 800 (text-5xl lg:text-8xl font-mono text-kingly) that increments from 000 to 100.
Suspended in the exact center of #preloader is an inline <svg viewBox="0 0 900 450" class="w-[85vw] max-w-[680px] h-auto relative z-10"> that faithfully reconstructs Reference 1 in three vector layers: .orbital-arcs (the thin #4D4D4D diagonal elliptical paths), .serif-glyphs (the brushed silver #DEDEDE editorial serif letterforms for "Munt" and "asir"), and .script-h-path (the sweeping calligraphic stroke that bridges the crossbar of "t" into the tall looped ascender and deep descender of "h"). Surrounding the SVG is a Reference 6 dashed vector selection bounding box (border: 1px dashed #4D4D4D) equipped with four 8px × 8px solid #DEDEDE corner anchor squares.
Timeline Phase
	Timeframe
	Target DOM / SVG Selectors
	GSAP Properties & Easing Execution
	Visual & Narrative Effect
	Stage 1: Orbital Calibration
	0.0s – 0.8s
	.orbital-arcs path, .preloader-bounding-box, #preloader-counter
	strokeDashoffset: 1400 -> 0 (power2.inOut); bounding box scale: 0.92 -> 1.0, autoAlpha: 1; counter ticks 000 -> 038.
	Thin geometric orbital hairlines slice across the #0F0F0F void as the dashed vector selection frame locks onto the center canvas.
	Stage 2: Serif & Script Flourish
	0.4s – 1.8s
	.serif-glyphs path, .script-h-path
	Serif glyphs animate yPercent: 115 -> 0, stagger: 0.05 (expo.out); script "h" draws via strokeDashoffset: 2200 -> 0, duration: 1.15 (power3.inOut).
	The structured silver serif letters "Munt" and "asir" rise from invisible masks while the liquid silver calligraphic "h" draws live across the screen to link them.
	Stage 3: Specular Metallic Sweep
	1.8s – 2.4s
	.metallic-sheen, .corner-anchor-square
	Diagonal gradient mask sweeps xPercent: -120 -> 120 (power2.inOut); corner anchors pulse backgroundColor: '#DEDEDE'; counter hits 100.
	A high-contrast specular light beam glides across the brushed silver grain of "Munthasir", confirming 100% asset compilation.
	Stage 4: Five-Column Shutter Lift
	2.4s – 3.1s
	#preloader-svg-wrap, .preloader-shutter
	SVG scales down scale: 0.88, y: -30, autoAlpha: 0 (power3.in); 5 vertical shutters slide yPercent: -100, stagger: 0.06 (expo.inOut).
	The signature mark docks into the background watermark while the five #0F0F0F shutters lift in a staggered wave to reveal the Hero section.
	Strictly Planar Micro-Interactions and GSAP ScrollTrigger Choreography
In strict compliance with the frontend motion mandate, 3D hover effects (rotateX, rotateY, and perspective card tilting) are completely excluded from the codebase. Avoiding 3D perspective warping ensures that monospace code blocks, architectural grid lines, and dense technical typography remain razor-sharp at all times, honoring the flat, precision-engineered feel of References 3, 4, and 7. Instead of 3D tilt, interactive feedback relies on four strictly planar (2D) micro-interaction engines.
First, Planar Radial Border Illumination attaches a lightweight mousemove listener to every bento card, project card, and timeline container, writing the cursor’s relative coordinates to CSS custom properties --mouse-x and --mouse-y. Each card uses a ::before layer (radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(222, 222, 222, 0.10), transparent 40%)) to cast a soft #DEDEDE spotlight across the #2B2B2B card face, while a ::after border mask illuminates the 1px border in crisp #DEDEDE (Kingly Cloud) exclusively within a 160px radius of the cursor. Second, 2D Magnetic Button Pull utilizes gsap.quickTo(el, "x", {duration: 0.35, ease: "power3.out"}) and gsap.quickTo(el, "y", ...) to translate buttons and social rail icons horizontally and vertically along the flat screen plane (±10px maximum displacement) toward the cursor before snapping back on mouseleave. Third, Directional Curtain Wipes and Vector Arrow Rotation govern CTA buttons and the full-width service rows from Reference 7: hovering slides a flat #DEDEDE or #2B2B2B background layer across the element while rotating trailing diagonal arrows (↗) by 45deg into horizontal execution arrows (→). Fourth, Terminal Text Scramble leverages GSAP TextPlugin on navigation links, category tabs, and eyebrow tags to cycle characters briefly through hexadecimal glyphs (01X#/_) over 0.3s before locking into the target string.
Step-by-Step Main Page (index.html) Section Blueprint
Section 0: Fixed Global Chrome (Left Social Rail, Top Glass Navbar, and Vector Cursor)
The persistent viewport frame merges the fixed left developer rail and sticky top header of Reference 5 with the vector selection cursor of Reference 6. On desktop devices, the native cursor is hidden and replaced by #custom-cursor, consisting of a precision 14px × 14px #DEDEDE vector arrowhead trailed smoothly (gsap.quickTo, 0.18s lag) by a 36px × 36px dashed bounding box (border: 1px dashed #979797) with four 3px × 3px #DEDEDE corner squares. Along the left viewport margin (fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-5), aside#social-rail suspends four 40px × 40px monochrome icon buttons (bg-chaos/80 border border-shoewax text-spanish hover:text-kingly hover:border-kingly rounded-lg) between two vertical 64px gradient hairlines (w-[1px] bg-gradient-to-b from-transparent via-thunder to-shoewax), providing instant access to GitHub (https://github.com/munthasirdevs), WhatsApp, direct email (mailto:munthasirrahman@gmail.com), and Instagram/Facebook (munthasir.devs)1. Across the top edge (fixed top-0 inset-x-0 z-40 h-20 bg-chaos/75 backdrop-blur-md border-b border-shoewax), header#main-navbar aligns the terminal brand mark, seven section scroll-spy links, and the primary collaboration button.


DOM Element / Component
	HTML Tag & Selector
	Exact Text String / Content
	Background & Border HEX Tokens
	Typography & Tailwind Classes
	Interactive / GSAP Behavior
	Navbar Brand Mark
	a.navbar-brand (href="#hero")
	MR_ + inline mini SVG "Munthasir"
	Bg: transparent | Divider: #4D4D4D (thunder)
	font-mono text-xl font-bold text-kingly tracking-tighter
	Underscore _ blinks via CSS keyframe (#DEDEDE ↔ #4D4D4D); mini script SVG brightens to #DEDEDE on hover.
	Primary Nav Links (7 Items)
	nav > a.nav-link
	HOME, ABOUT, SERVICES, PROJECTS, EXPERIENCE, SKILLS, CONTACT1
	Bg: transparent | Active bottom bar: 2px #DEDEDE (kingly)
	font-mono text-xs uppercase tracking-widest text-spanish hover:text-kingly
	Hover triggers 0.3s TextPlugin character scramble; ScrollTrigger updates active #DEDEDE underline bar.
	Navbar Action CTA
	a.nav-cta.magnetic-btn (href="#contact")
	LET'S COLLABORATE ↗2
	Bg: #2B2B2B/80 (shoewax) -> Hover Bg: #DEDEDE (kingly) | Border: 1px #4D4D4D
	font-mono text-xs uppercase tracking-wider text-kingly hover:text-chaos px-5 py-2.5 rounded-lg
	2D magnetic pull (±8px); arrow ↗ rotates 45deg to → while text inverts to #0F0F0F (chaos).
	Left Social Rail (4 Icons)
	aside#social-rail > a.magnetic-btn
	SVG icons for GitHub, WhatsApp, Email, Social/Code (</>)1
	Bg: #0F0F0F/80 (chaos) | Border: 1px #2B2B2B (shoewax), Hover: #DEDEDE
	w-10 h-10 flex items-center justify-center text-spanish hover:text-kingly
	Staggered slide-in from x: -30 after preloader; 2D magnetic cursor pull on each icon box.
	Section 1: Hero Section (Dual-Column Engineering & Editorial Showcase)
The Hero section (section#hero.relative.min-h-screen.pt-32.pb-20.px-6.flex.items-center.bg-transparent.z-10.overflow-hidden) synthesizes four references into a single commanding viewport: Reference 5’s asymmetric two-column developer intro and IDE code window, Reference 4’s interactive ▶ Compile code execution toggle, Reference 6’s dashed vector selection bounding box framing the primary display title, and Reference 1’s "Munthasir" serif-script emblem docked as an atmospheric watermark (absolute right-[-5%] top-[12%] w-[620px] opacity-[0.04] pointer-events-none) behind the layout. The inner container (max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center) allocates seven columns to the typographic narrative on the left and five columns to the interactive code window on the right, which floats directly in front of the Layer 2 ambient 3D wireframe sphere.


Sub-Element / Hierarchy
	HTML Tag & Selector
	Exact Text Copy / Content
	Background & Border HEX Tokens
	Typography & Tailwind Classes
	GSAP Animation & Micro-Interaction
	Intro Eyebrow Tag
	span.hero-eyebrow
	< Hello, I'm />
	Bg: transparent
	font-mono text-sm text-dust mb-4 tracking-wide block
	Reveals via TextPlugin typing effect (duration: 0.5s) immediately as preloader shutters lift.
	Vector Selection Frame (Reference 6)
	div.hero-bounding-box
	Wraps H1; includes corner badge 2026 // BD
	Bg: rgba(43,43,43,0.15) | Border: 1px dashed #4D4D4D + four 8px #DEDEDE corner squares
	relative p-4 -ml-4 mb-4 border border-dashed border-thunder/80
	Dashed border draws around H1 while the four #DEDEDE corner anchor nodes scale from 0 to 1 (back.out(2)).
	Hero Primary Title (H1)
	h1#hero-title
	MUNTHASIR RAHMAN1
	Foreground: .text-metallic (#DEDEDE to #BCBCBC brushed silver gradient)
	font-display text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tighter leading-none uppercase
	Character-by-character vertical mask reveal (yPercent: 105 -> 0, stagger: 0.03, expo.out) with radial spotlight glow on "O/A".
	Calligraphic Overlay Signature
	svg.hero-script-overlay
	Vector "Munthasir" (Reference 1 serif + script "h")
	Stroke/Fill: #BCBCBC (dust) at 85% opacity
	w-44 sm:w-56 h-auto absolute -bottom-6 right-4 pointer-events-none
	Draws across the bottom-right corner of the H1 bounding box (strokeDashoffset: 0, duration: 1.0s).
	Primary Role Subtitle (H2)
	h2.hero-subtitle
	FULL-STACK & BOT ENGINEER // UI/UX DESIGNER1
	Bg: transparent
	font-mono text-sm sm:text-base lg:text-lg text-dust tracking-[0.15em] uppercase mt-4 mb-6
	Slides up (y: 20 -> 0, autoAlpha: 0 -> 1, duration: 0.6s, power3.out, delay: 0.2s).
	Lead Bio Paragraph (P)
	p.hero-bio
	Architecting custom automation, high-concurrency Discord bots, and production-ready Laravel SaaS applications. Passionate about creating functional, user-centered digital experiences that turn complex ideas into scalable software through clean code and intentional design.1
	Bg: transparent
	font-sans text-base lg:text-lg text-spanish max-w-xl leading-relaxed mb-8
	Fades up (y: 24 -> 0, autoAlpha: 0 -> 1, duration: 0.7s, power3.out, delay: 0.3s).
	Primary CTA Button
	a.btn-primary.magnetic-btn (href="#projects")
	VIEW MY WORK →
	Bg: #DEDEDE (kingly), Hover Bg: #BCBCBC (dust) | Text: #0F0F0F (chaos)
	px-7 py-4 rounded-lg bg-kingly text-chaos font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(222,222,222,0.15)]
	2D magnetic pull; arrow shifts x: 4px on hover; subtle specular border pulse.
	Secondary CTA Button
	a.btn-secondary.magnetic-btn (href="https://github.com/munthasirdevs")
	EXPLORE GITHUB (25 REPOS) ↗2
	Bg: #2B2B2B/50 (shoewax), Hover: #2B2B2B | Border: 1px #4D4D4D, Hover: #DEDEDE
	px-7 py-4 rounded-lg border border-thunder text-kingly font-mono text-xs uppercase tracking-widest
	2D magnetic pull; planar radial border illumination tracks cursor around button perimeter.
	Availability Status Line
	div.hero-status
	// AVAILABLE FOR SAAS PARTNERSHIPS, FREELANCE & AGENCY WHITE-LABEL2
	Dot: #DEDEDE (kingly) with pulsing #BCBCBC halo
	font-mono text-xs text-dull tracking-wider flex items-center gap-2.5 mt-2
	Continuous soft opacity pulse on the leading 8px × 8px #DEDEDE status indicator circle.
	Right Column IDE Window Header
	div.ide-header
	Dots (#717171, #979797, #DEDEDE) + munthasir.rahman@devs + Button ▶ Compile2
	Bg: #2B2B2B/60 (shoewax) | Border-bottom: 1px #2B2B2B
	px-4 py-3 flex items-center justify-between font-mono text-xs text-spanish
	Clicking ▶ Compile crossfades the JS source code into live JSON telemetry output (Reference 4 split mechanic).
	Right Column IDE Code Body
	pre#ide-code-content
	18-line const MunthasirRahman = { ... } object (see exact code block in Section 1 narrative)1
	Bg: #0F0F0F/90 (chaos) with backdrop-blur-xl | Outer Border: 1px #2B2B2B + #4D4D4D corner brackets
	p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-dust overflow-x-auto
	Planar radial border spotlight (--mouse-x, --mouse-y); lines stagger in on initial load (stagger: 0.03s).
	Within the right-hand IDE code container (pre#ide-code-content), line numbers 01 through 18 are styled in #717171 (text-dull select-none pr-4), object keys in #BCBCBC (text-dust), string literals in #DEDEDE (text-kingly), syntax punctuation in #979797 (text-spanish), and the trailing architectural philosophy comment in #717171 (text-dull)1:






JavaScript
01 const MunthasirRahman = {
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
18 // Turning ideas into production software through clean architecture.

Section 2: Telemetry and Career Metrics Strip
Positioned immediately below the Hero fold, section#telemetry (relative z-10 bg-shoewax/25 border-y border-shoewax py-10 px-6 backdrop-blur-sm) merges the four-column statistical strip of References 3 and 7 with the bordered developer metric badges of Reference 5. The inner grid (max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-shoewax) presents the verified quantitative milestones from munthasir.com and github.com/munthasirdevs1. As the strip enters the viewport (ScrollTrigger threshold top 85%), GSAP interpolates each .counter-val integer from 0 to its target figure over 1.6s (ease: "power3.out").


Metric Slot
	Terminal Icon (span)
	Number Readout (H3.counter-val)
	Label (H6)
	Context Subtext (span)
	Background & Text HEX Tokens
	Source Data Alignment
	Metric 01
	>_ (font-mono text-dust)
	03+
	YEARS OF EXPERIENCE
	Full-Stack & UI/UX Engineering
	Number: #DEDEDE (kingly) | Label: #BCBCBC (dust) | Subtext: #717171 (dull)
	Verified from munthasir.com1
	Metric 02
	</> (font-mono text-dust)
	23+
	PROJECTS DELIVERED
	Production Web Apps & SaaS
	Number: #DEDEDE (kingly) | Label: #BCBCBC (dust) | Subtext: #717171 (dull)
	Verified from munthasir.com1
	Metric 03
	[★] (font-mono text-dust)
	96%
	CLIENT SATISFACTION
	Global Freelance & Agency Partners
	Number: #DEDEDE (kingly) | Label: #BCBCBC (dust) | Subtext: #717171 (dull)
	Verified from munthasir.com1
	Metric 04
	{} (font-mono text-dust)
	25
	PUBLIC REPOSITORIES
	Open-Source & Building in Public
	Number: #DEDEDE (kingly) | Label: #BCBCBC (dust) | Subtext: #717171 (dull)
	Verified from github.com/munthasirdevs2
	Section 3: About Me and Architectural Philosophy
The About section (section#about.relative.z-10.py-28.px-6.bg-chaos.border-b.border-shoewax) is architected in two sequential parts within a max-w-7xl mx-auto container. Part A (grid grid-cols-1 lg:grid-cols-12 gap-14 items-center mb-24) synthesizes the monochrome portrait-and-biography split of Reference 5 with the graphic selection bounding box and floating tool badges of Reference 6. The five-column left pane houses a high-contrast monochrome portrait (aspect-[4/5] bg-shoewax border border-thunder grayscale contrast-125) surrounded at a 12px offset by a dashed vector selection frame (border border-dashed border-thunder) with eight 8px × 8px #DEDEDE anchor squares at the corners and midpoints. Floating along the right edge of the selection frame is a vertical column of four 40px × 40px monochrome stack badges (LV, JS, TW, UX in bg-chaos border border-thunder text-kingly font-mono text-xs font-bold), pointed to by a hand-drawn SVG curved arrow in #BCBCBC labeled CORE STACK (directly adapting the SOFTWARES annotation from Reference 6)1. The seven-column right pane presents the narrative biography, open-source philosophy, and location metadata1.
Part B of the About section adapts the three-column "How SentoBot Works" card architecture from Reference 3 (grid grid-cols-1 md:grid-cols-3 gap-6) to showcase Munthasir Rahman’s three foundational principles: Clean Code, Creative Design, and Responsive Engineering1. Each card (rounded-2xl bg-card-surface border border-shoewax hover:border-thunder p-7 flex flex-col justify-between) features a top circular icon badge (w-12 h-12 rounded-full bg-shoewax border border-thunder text-kingly), an H3 title, a P explanation, and a recessed bottom schematic viewport (h-36 rounded-xl bg-chaos/80 border border-shoewax mt-6 flex items-center justify-center relative overflow-hidden) containing minimalist monochrome SVG diagrams.


Sub-Element / Module
	HTML Tag & Selector
	Exact Text Copy / Content
	Background & Border HEX Tokens
	Typography & Tailwind Classes
	GSAP Animation & Micro-Interaction
	Part A Eyebrow (H5)
	h5.section-eyebrow
	// 01. ABOUT ME
	Bg: transparent
	font-mono text-xs text-dust uppercase tracking-widest mb-4
	ScrollTrigger fade-in + TextPlugin hex scramble reveal (start: "top 85%").
	Part A Main Heading (H2)
	h2.about-heading
	I'm Munthasir Rahman, an engineer who values clean architecture and pixel precision.1
	Text: #DEDEDE (kingly), italicized phrase in #BCBCBC (dust)
	font-display text-3xl lg:text-[42px] font-bold text-kingly leading-tight mb-6
	Words reveal upward by line mask (yPercent: 100 -> 0, stagger: 0.08, power3.out).
	Bio Paragraph 1 (P)
	p.about-lead
	Based in Chuadanga, Khulna, Bangladesh, I specialize in building responsive, user-friendly websites, custom Discord automation bots, and scalable full-stack applications that pair seamless backend logic with refined visual interfaces.1
	Text: #979797 (spanish)
	font-sans text-base lg:text-lg text-spanish leading-relaxed mb-5
	Smooth vertical fade-in (y: 20 -> 0, autoAlpha: 0 -> 1, duration: 0.7s).
	Bio Paragraph 2 (P)
	p.about-secondary
	I believe in building in public. My 25+ repositories on GitHub are free to explore, fork, and learn from as I actively contribute to the Laravel and open-source ecosystem. Currently, my engineering focus centers on architecting production-ready SaaS applications with Laravel, integrating AI/ML patterns, and orchestrating cloud-native deployments with Docker and Kubernetes toward launching my first open-source SaaS boilerplate.2
	Text: #979797 (spanish)
	font-sans text-base text-spanish leading-relaxed mb-8
	Smooth vertical fade-in (y: 20 -> 0, autoAlpha: 0 -> 1, duration: 0.7s, delay: 0.1s).
	Bio Metadata Strip (3 Columns)
	div.about-meta-grid
	LOCATION: Chuadanga, Khulna, BD | DIRECT EMAIL: munthasirrahman@gmail.com | NEXT MILESTONE: Open-Source SaaS Boilerplate1
	Border-top: 1px #2B2B2B (shoewax) | Labels: #717171, Values: #DEDEDE
	grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-shoewax font-mono
	Staggered horizontal reveal (x: -15 -> 0, autoAlpha: 0 -> 1, stagger: 0.1s).
	Part B Subheader (H3 & P)
	div.principles-header
	H3: How My Engineering Process Works | P: Three foundational pillars governing every SaaS platform, bot architecture, and interface system.1
	Text H3: #DEDEDE (kingly) | Text P: #979797 (spanish)
	text-center max-w-2xl mx-auto mb-12
	Fades up on scroll prior to the 3-card stagger.
	Pillar Card 01: Clean Code
	article.bento-card
	H3: Clean Code Architecture | P: Writing maintainable, modular, and scalable codebases engineered for long-term stability, strict type safety, and effortless team handoff.1
	Surface: .bg-card-surface | Border: 1px #2B2B2B | Bottom Well: #0F0F0F
	p-7 rounded-2xl border border-shoewax
	Planar radial border spotlight; bottom schematic animates concentric #4D4D4D rings around a #DEDEDE { } node.
	Pillar Card 02: Creative Design
	article.bento-card
	H3: Creative UI/UX Design | P: Crafting intuitive, human-centered, and aesthetically refined interfaces that eliminate friction and elevate brand authority.1
	Surface: .bg-card-surface | Border: 1px #2B2B2B | Bottom Well: #0F0F0F
	p-7 rounded-2xl border border-shoewax
	Planar radial border spotlight; bottom schematic rotates orbital alignment guides around a central #DEDEDE four-point star (✦).
	Pillar Card 03: Responsive
	article.bento-card
	H3: Responsive & Cloud-Ready | P: Implementing a strict mobile-first approach across all viewports while containerizing backends for high-availability cloud deployment.1
	Surface: .bg-card-surface | Border: 1px #2B2B2B | Bottom Well: #0F0F0F
	p-7 rounded-2xl border border-shoewax
	Planar radial border spotlight; bottom schematic pulses data lines between desktop/mobile wireframes and #BCBCBC Docker cylinders.
	Section 4: Quality Services and Capabilities (Hybrid Accordion & Bento Grid)
To deliver both executive clarity and deep technical specificity, section#services (relative z-10 py-28 px-6 bg-chaos border-b border-shoewax) unites the two strongest service presentation patterns from the reference set. Layer 1 adapts Reference 7’s My Quality Services horizontal numbered rows (max-w-7xl mx-auto mb-20 divide-y divide-shoewax border-y border-shoewax), where four full-width architectural strips (01 through 04) illuminate with the .bg-row-sweep graphite gradient (#2B2B2B to #4D4D4D) and a 4px #DEDEDE left border bar upon hover or selection, while rotating their right-hand arrow from ↗ to →. Layer 2 directly below (max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6) implements Reference 4’s Discover Our Features six-card technical bento grid, where each card pairs a 44px × 44px solid #DEDEDE icon box with an H3 title, a P description, and a recessed bottom terminal pill (bg-chaos border border-shoewax font-mono text-xs text-dust) containing a domain-specific code command1.


Layer & Component
	Index / Icon
	H3 Title (#DEDEDE Kingly Cloud)
	P Description Copy (#979797 Spanish Grey)
	Terminal Pill / Right Action (#BCBCBC / #DEDEDE)
	Surface & Border HEX Specification
	Layer 1: Service Row 01
	01 (font-mono text-dust)
	Full-Stack Laravel & SaaS Development
	Architecting multi-tenant web applications, RESTful APIs, and MySQL database schemas built for production scale.1
	Action Arrow: ↗ (rotates to → on hover)
	Default active row: .bg-row-sweep (#2B2B2B–#4D4D4D) with 4px #DEDEDE left accent bar.
	Layer 1: Service Row 02
	02 (font-mono text-dust)
	Custom Discord Bots & Automation Systems
	Engineering high-uptime Discord bots, automated server workflows, and custom web control dashboards.2
	Action Arrow: ↗ (rotates to → on hover)
	Resting: #0F0F0F (chaos) | Hover: .bg-row-sweep + 4px #DEDEDE left bar.
	Layer 1: Service Row 03
	03 (font-mono text-dust)
	UI/UX Architecture & Interactive Frontends
	Designing user-centered wireframes and translating them into responsive HTML, Tailwind CSS, and GSAP experiences.1
	Action Arrow: ↗ (rotates to → on hover)
	Resting: #0F0F0F (chaos) | Hover: .bg-row-sweep + 4px #DEDEDE left bar.
	Layer 1: Service Row 04
	04 (font-mono text-dust)
	White-Label Agency & Open-Source Tooling
	Partnering with agencies for confidential white-label delivery and building lightweight browser utilities.2
	Action Arrow: ↗ (rotates to → on hover)
	Resting: #0F0F0F (chaos) | Hover: .bg-row-sweep + 4px #DEDEDE left bar.
	Layer 2: Bento Card 01
	</> (bg-kingly text-chaos)
	Frontend Engineering
	Crafting modern, responsive interfaces with semantic HTML5, Tailwind CSS, JavaScript, TypeScript, and fluid GSAP motion.1
	gsap.to('.ui', { autoAlpha: 1, ease: 'expo.out' })
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Layer 2: Bento Card 02
	{} (bg-kingly text-chaos)
	Backend & API Architecture
	Building secure, maintainable server-side applications and relational databases using PHP, Laravel, and MySQL.1
	php artisan make:saas --architecture=clean
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Layer 2: Bento Card 03
	⚡ (bg-kingly text-chaos)
	Bot & Workflow Automation
	Developing custom Discord bots, bulk URL utilities, and automated event-driven pipelines with web dashboards.2
	bot.login(process.env.AUTOMATION_TOKEN)
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Layer 2: Bento Card 04
	❖ (bg-kingly text-chaos)
	UI/UX System Design
	Designing cohesive component libraries, interactive prototypes, and high-contrast visual hierarchies focused on usability.1
	tokens: { bg: '#0F0F0F', text: '#DEDEDE' }
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Layer 2: Bento Card 05
	☁ (bg-kingly text-chaos)
	Cloud-Native & DevOps R&D
	Structuring containerized environments with Docker, Kubernetes orchestration, and scalable deployment workflows.2
	docker compose -f docker-compose.prod.yml up -d
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Layer 2: Bento Card 06
	⚙ (bg-kingly text-chaos)
	AI/ML Integration Patterns
	Embedding intelligent LLM APIs, automated data parsing, and smart workflows into full-stack web applications.2
	await ai.integrate({ model: 'enterprise-v4' })
	Card: #2B2B2B/30, Border: #2B2B2B (planar spotlight #DEDEDE) | Pill Bg: #0F0F0F.
	Section 5: Featured Portfolio and Open-Source GitHub Showcase
The Featured Projects section (section#projects.relative.z-10.py-28.px-6.bg-chaos.border-b.border-shoewax) showcases the repositories and engineering milestones from https://github.com/munthasirdevs2 by combining the category pill filter of References 3 and 7 with the three-column bordered card layout of Reference 5 (max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12). The section header pairs H5 (// 02. SELECTED WORKS & GITHUB REPOSITORIES) and H2 (Featured Engineering Portfolio) on the left with five interactive filter pills on the right: All (06) (active default in bg-kingly text-chaos font-bold), Web Tools & JS, Laravel & SaaS, Discord Bots, and UI/UX & Studios (inactive pills in bg-shoewax/40 text-spanish border border-shoewax hover:border-thunder).
Because the specification prohibits raster stock images and relies strictly on code-driven UI precision, the upper preview chamber (div.h-52.bg-shoewax/50.border-b.border-shoewax.p-5.relative.overflow-hidden) of each project card renders a live HTML/CSS/SVG Interactive Schematic Wireframe of that specific software tool in #0F0F0F, #2B2B2B, #979797, and #DEDEDE, accompanied by a top-right status badge (px-2.5 py-0.5 rounded bg-chaos/90 border border-thunder font-mono text-[10px] text-kingly uppercase). Clicking any category pill triggers a planar GSAP layout transition (autoAlpha and scale: 0.96 -> 1.0, duration: 0.4s, ease: "power3.out"), while the section footer provides a direct bar linking to the full 25-repository archive page (VIEW FULL REPOSITORY ARCHIVE (25) →)2.


Card Slot & Filter Category
	Top-Right Badge
	H3 Project Title (#DEDEDE)
	P Project Description Copy (#979797 Spanish Grey)
	Upper h-52 Live DOM/SVG Schematic Preview
	Bottom Tech Stack Pills (#2B2B2B bg, #BCBCBC text)
	External Repository Link (↗)
	Card 01 (Web Tools & JS)
	PINNED REPO
	linkOpener (Multi-Link Opener)2
	A lightweight web utility that validates and opens multiple URLs in bulk. Users paste links one per line, auto-detect valid URLs, and launch them sequentially with an adjustable delay.2
	Mini browser terminal showing 3 regex-validated URL lines, a delay slider (250ms), and a #DEDEDE [Launch Queue] pill.
	JavaScript, HTML5, CSS3, Regex Validation2
	https://github.com/munthasirdevs/linkOpener2
	Card 02 (UI/UX & Studios)
	PINNED REPO
	XenonStudios Creative Portal2
	Flagship agency and digital studio frontend engineered with semantic HTML architecture, responsive grid systems, and high-contrast typographic storytelling.2
	Architectural bento wireframe displaying XENON STUDIOS in #DEDEDE typography with viewport breakpoint rulers.
	HTML5, CSS3, Tailwind CSS, Responsive UI1
	https://github.com/munthasirdevs/XenonStudios2
	Card 03 (Laravel & SaaS)
	ACTIVE R&D
	Laravel Open-Source SaaS Boilerplate2
	Production-ready multi-tenant SaaS starter kit built on clean architecture, featuring modular authentication, subscription pipelines, and Dockerized deployment.2
	Split CLI & telemetry dashboard schematic showing Laravel v11, tenant isolation nodes, and 99.98% uptime readout.
	Laravel, PHP, MySQL, Docker, Tailwind1
	https://github.com/munthasirdevs2
	Card 04 (Discord Bots)
	AUTOMATION
	Xenon / Custom Discord Bot & Web Dashboard2
	Multipurpose Discord server automation engine with an integrated web control panel for moderation, automated role workflows, and real-time event logging.2
	Command matrix schematic displaying /automate, /mod-log, WebSocket heartbeat waveform in #BCBCBC, and guild toggles.
	JavaScript, Discord API, WebSockets, Web UI2
	https://github.com/munthasirdevs2
	Card 05 (Laravel & SaaS)
	CLOUD & AI
	AI-Integrated Workflow Gateway2
	Full-stack application demonstrating AI/ML integration patterns within a Laravel & TypeScript architecture, featuring streaming responses and rate limiting.2
	Request/Response JSON pipeline schematic mapping prompt tokens through an API gateway into a reactive UI.
	TypeScript, Laravel, AI/ML APIs, Kubernetes2
	https://github.com/munthasirdevs2
	Card 06 (UI/UX & Studios)
	DESIGN SYSTEM
	Monochrome Portfolio Architecture v20261
	Bespoke personal engineering and UI/UX showcase built from the ground up using a 7-tone monochrome design system, HTML5 Canvas 3D geometry, and GSAP.1
	Reference 6 dashed vector bounding box framing the "Munthasir" calligraphic mark alongside GSAP timeline tracks.
	HTML5, Tailwind CSS, Vanilla JS, GSAP
	https://www.munthasir.com/1
	Section 6: Interactive Use-Case Terminal (SaaS, Bots, Frontend, Open Source)
Directly adapting the Build For Real Use Cases interactive module from the lower third of Reference 4, section#use-cases (relative z-10 py-24 px-6 bg-shoewax/15 border-b border-shoewax) demonstrates how Munthasir Rahman’s engineering resolves concrete production bottlenecks across four operational domains2. Beneath the centered header (H5 pill ✦ ARCHITECTURAL SOLUTIONS, H2 Built For Real Engineering Use Cases, and P Clean APIs, automated bot pipelines, and modular SaaS foundations engineered so teams can ship faster with confidence), a four-button tab bar (max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-xl bg-chaos border border-shoewax mb-6) switches the content of a split two-pane terminal (max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-chaos border border-thunder overflow-hidden) via GSAP TextPlugin and autoAlpha transitions.


Interactive Tab Button
	Left Pane H6 Eyebrow (#717171)
	Left Pane H3 Problem Title (#DEDEDE)
	Left Pane P Architectural Context (#979797)
	Right Pane Terminal Filename & Live Code Solution (#0F0F0F bg, #BCBCBC / #DEDEDE code)
	Tab 01: SaaS Applications (Active Default: bg-kingly text-chaos)2
	PROBLEM STATEMENT // 01
	Building scalable SaaS architecture from scratch is time-consuming.
	Founders and teams lose weeks wiring multi-tenant authentication, MySQL schema migrations, and responsive UI shells before writing core product logic.1
	App/Services/TenantProvisioner.php — Displays clean Laravel service class provisioning isolated tenant databases, Docker queues, and billing webhooks2.
	Tab 02: Discord Automation (text-spanish hover:text-kingly)2
	PROBLEM STATEMENT // 02
	Manual community moderation and fragmented bots degrade server uptime.
	High-growth Discord communities require unified, event-driven automation paired with an intuitive web dashboard for real-time role and security control.2
	bot/clusters/AutomationGateway.js — Displays event-driven Discord bot gateway handling slash commands, anti-raid locks, and live dashboard WebSocket sync2.
	Tab 03: Browser Utilities (text-spanish hover:text-kingly)2
	PROBLEM STATEMENT // 03
	Repetitive browser workflows bottleneck QA and research teams.
	Opening, validating, and sequencing dozens of URLs manually introduces human error and freezes browser memory threads.2
	src/core/linkOpenerEngine.js — Displays the regex URL validation filter and sequential setTimeout queue dispatcher from linkOpener2.
	Tab 04: White-Label Delivery (text-spanish hover:text-kingly)1
	PROBLEM STATEMENT // 04
	Agencies struggle to find engineering partners who respect design fidelity.
	Handing off complex Figma UI/UX systems often results in broken responsive breakpoints and unmaintainable spaghetti code.1
	ui/animations/gsapScrollSystem.js — Displays modular Tailwind token mapping and non-3D planar GSAP ScrollTrigger choreography1.
	Section 7: Dual-Column Experience and R&D Trajectory Timeline
Synthesizing the central timeline node geometry of Reference 5 with the side-by-side two-column layout (My Experience paired with My Education / Trajectory) of Reference 7, section#experience (relative z-10 py-28 px-6 bg-chaos border-b border-shoewax) presents a comprehensive chronological view inside max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12. Both columns feature a continuous vertical 1px #4D4D4D (border-l border-thunder pl-8 space-y-8) track along which 12px × 12px square nodes (bg-chaos border-2 border-kingly) illuminate in #DEDEDE as GSAP ScrollTrigger scrubs downward. The left column documents Munthasir Rahman’s 03+ years of professional delivery1, while the right column documents the active architectural R&D and cloud-native learning roadmap published on GitHub2.


Track & Card Slot
	Date / Status Badge (H6 in #2B2B2B pill)
	H3 Title / Role (#DEDEDE Kingly Cloud)
	H4 Organization / Domain (#BCBCBC Dust To Dust)
	P Detailed Architectural Description (#979797 Spanish Grey)
	Experience Track — Card 01
	2024 — PRESENT (text-kingly)
	Full-Stack & Bot Engineer2
	munthasirdevs // Independent SaaS & Automation Architect2
	Architecting custom automation systems, Discord bots, and production-ready SaaS applications with Laravel. Spearheading open-source developer tools including linkOpener and the upcoming Laravel SaaS Boilerplate.2
	Experience Track — Card 02
	2023 — PRESENT (text-dust)
	Web Developer & UI/UX Designer1
	Munthasir.com // Global Freelance & White-Label Partner1
	Delivered 23+ responsive web applications and brand interfaces with a 96% client satisfaction rate. Executed full-lifecycle frontend engineering (HTML, Tailwind CSS, JS) and PHP/MySQL backend development for international clients and agencies.1
	Experience Track — Card 03
	2022 — 2023 (text-dull)
	Frontend & UI/UX Specialist1
	XenonStudios & Early Digital Ventures2
	Established core mobile-first responsive workflows, interactive UI systems with Bootstrap, jQuery, and modern CSS, and foundational user-experience wireframing.1
	R&D Trajectory — Card 01
	CURRENT FOCUS // 2026 (text-kingly)
	Cloud-Native Deployment & Advanced System Architecture2
	Docker, Kubernetes & High-Availability Laravel2
	Engineering containerized microservice patterns, CI/CD pipelines, and scalable multi-tenant database architectures for enterprise SaaS workloads.2
	R&D Trajectory — Card 02
	ACTIVE RESEARCH // 2025–2026 (text-dust)
	AI/ML Integration Patterns & TypeScript Ecosystems2
	Intelligent Web Apps & Type-Safe Frontends2
	Integrating LLM orchestration, automated content pipelines, and strict TypeScript frontend state management into modern web applications.2
	R&D Trajectory — Card 03
	CORE FOUNDATION (text-dull)
	Full-Stack Web Engineering & Human-Centered UX1
	Clean Code, Creative Design & Responsive Principles1
	Mastery of relational database modeling (MySQL), server-side PHP/Laravel architecture, and accessible, cross-device interface engineering.1
	Section 8: Technical Skills Matrix and Proficiency Readout
Adapting the My Skills percentage icon grid from Reference 7 into the seven-tone grayscale palette, section#skills (relative z-10 py-28 px-6 bg-chaos border-b border-shoewax) presents a twelve-card matrix (max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5) covering the complete technology inventory from munthasir.com and github.com/munthasirdevs1. Following the centered header (H5 // 03. TECHNICAL ARSENAL, H2 Skills & Technology Stack, and P A balanced full-stack toolkit combining pixel-level frontend control with battle-tested backend and automation infrastructure), each card (p-6 rounded-2xl bg-shoewax/30 border border-shoewax hover:border-kingly transition-all flex flex-col items-center text-center group) houses a 48px × 48px monochrome badge (bg-chaos border border-thunder font-mono text-sm font-bold text-kingly group-hover:bg-kingly group-hover:text-chaos), an animated GSAP percentage readout (font-mono text-2xl font-bold text-kingly), a 4px-high horizontal progress bar (bg-chaos track with a ScrollTrigger-animated bg-kingly fill bar), and the technology label (H4 in font-sans text-xs font-medium text-dust).


Card Slot
	Monochrome Emblem
	Animated Readout
	Domain Classification
	H4 Technology Title (#BCBCBC)
	Sub- Technologies Included (#717171)
	Source Verification
	Skill 01
	HTML5
	98%
	Frontend Core
	HTML5 & Semantic DOM
	Accessibility, SEO, SVG
	munthasir.com & GitHub1
	Skill 02
	CSS3
	96%
	Frontend Styling
	CSS3 & Responsive UI
	Grid, Flexbox, Custom Props
	munthasir.com1
	Skill 03
	TW
	96%
	UI Frameworks
	Tailwind CSS & Bootstrap
	Design Tokens, Utility Systems
	munthasir.com1
	Skill 04
	JS
	94%
	Scripting & Motion
	JavaScript (ES6+) & GSAP
	Vanilla JS, jQuery, Canvas 3D
	munthasir.com & linkOpener1
	Skill 05
	PHP
	92%
	Server-Side
	PHP 8.x Architecture
	OOP, Composer, REST APIs
	munthasir.com1
	Skill 06
	LVL
	95%
	SaaS Framework
	Laravel Ecosystem
	Multi-Tenancy, Queues, Auth
	munthasir.com & GitHub1
	Skill 07
	SQL
	90%
	Relational Data
	MySQL Database Design
	Indexing, Migrations, Eloquent
	munthasir.com1
	Skill 08
	BOT
	95%
	Custom Automation
	Discord Bots & Webhooks
	Slash Commands, Web Panels
	GitHub Bio & Repos2
	Skill 09
	UX
	94%
	Product Design
	UI/UX & Wireframing
	Design Systems, Prototyping
	munthasir.com1
	Skill 10
	TS
	85%
	Type-Safe UI
	TypeScript & Modern UI
	Strict Typing, State Patterns
	GitHub README2
	Skill 11
	DCK
	84%
	Cloud-Native
	Docker & Kubernetes
	Containers, Orchestration
	GitHub README2
	Skill 12
	AI
	86%
	Intelligent Systems
	AI/ML API Integration
	LLM Pipelines, Prompt Routing
	GitHub README2
	Section 9: Collaboration Models and Client Endorsements
section#testimonials (relative z-10 py-28 px-6 bg-chaos border-b border-shoewax) bridges the four collaboration protocols published on Munthasir Rahman’s GitHub profile (Let's Collaborate)2 with the social proof backing the 96% Client Satisfaction rating from munthasir.com1. Part A (max-w-7xl mx-auto mb-20 p-8 lg:p-10 rounded-2xl bg-shoewax/25 border border-thunder) adapts the bold numbered pill container from the bottom left of Reference 6 (1, 2, 3, 4 in font-mono text-4xl font-extrabold text-kingly paired with high-contrast #DEDEDE pills px-3 py-1 rounded-full bg-kingly text-chaos font-mono text-xs font-bold). Part B (max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6) implements Reference 5’s three-column testimonial cards, where each card (p-8 rounded-2xl bg-shoewax/30 border border-shoewax flex flex-col justify-between) displays an oversized #DEDEDE serif opening quote (“), italicized review copy in #979797, and a bottom client attribution row with a monochrome geometric monogram avatar.


Section Part & Slot
	Number / Monogram
	Pill Tag / Client H4 Name (#DEDEDE)
	Subtitle / Client H6 Role (#717171 / #979797)
	Detailed Copy / Endorsement Quote (#979797 Spanish Grey)
	Part A: Protocol 01 (Reference 6 Style)
	1 (text-4xl text-kingly)
	[SaaS Partnerships] (bg-kingly text-chaos)
	Co-Founding & Product Engineering
	Building production-ready SaaS products together from architectural blueprint to cloud launch.2
	Part A: Protocol 02 (Reference 6 Style)
	2 (text-4xl text-kingly)
	[Freelance Projects] (bg-kingly text-chaos)
	Bespoke Web & Bot Solutions
	Custom web applications, interactive frontends, and automated Discord bot ecosystems.2
	Part A: Protocol 03 (Reference 6 Style)
	3 (text-4xl text-kingly)
	[Agency Referrals] (bg-kingly text-chaos)
	Confidential Partner Execution
	Reliable white-label full-stack and UI/UX development engineered to strict agency standards.1
	Part A: Protocol 04 (Reference 6 Style)
	4 (text-4xl text-kingly)
	[Open Source] (bg-kingly text-chaos)
	Ecosystem Contributions
	Collaborating on meaningful developer tools and Laravel open-source boilerplates.2
	Part B: Endorsement 01 (Reference 5 Style)
	[SF] (bg-thunder text-kingly)
	SaaS Founder & Product Lead
	Enterprise Web Application Partner
	"Munthasir brings a rare combination of clean backend Laravel architecture and sharp UI/UX sensibility. Our SaaS portal launched ahead of schedule with zero bottlenecks."1
	Part B: Endorsement 02 (Reference 5 Style)
	[CO] (bg-thunder text-kingly)
	Community Operations Director
	Custom Discord Automation Client
	"The custom Discord bot and web dashboard engineered by Munthasir automated our entire community moderation and role workflow. Rock-solid code and instant communication."2
	Part B: Endorsement 03 (Reference 5 Style)
	[CP] (bg-thunder text-kingly)
	Creative Agency Principal
	White-Label Development Partner
	"As a digital agency, finding a reliable white-label full-stack developer is critical. Munthasir consistently delivers responsive, pixel-accurate frontends that exceed client expectations."1
	Section 10: Direct Contact Portal and Global Footer
The concluding section (section#contact.relative.z-10.pt-28.pb-16.px-6.bg-chaos) combines the two-column contact split of Reference 5 (max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24 border-b border-shoewax) with a full-width architectural footer crowned by the Reference 1 "Munthasir" signature watermark. The five-column left pane presents the heading hierarchy and three bordered contact channel cards (Email, Location, Availability)1, while the seven-column right pane houses the interactive project scoping form (p-8 lg:p-10 rounded-2xl bg-shoewax/25 border border-shoewax). Below the divider line, footer.max-w-7xl.mx-auto.pt-12 renders the centered brushed-silver "Munthasir" vector emblem (opacity-20 hover:opacity-55 transition-opacity duration-500) above the copyright bar, quick navigation links, social buttons, and Reference 5’s scroll-to-top (↑) trigger.


Component / Form Field
	HTML Tag & Selector
	Exact Text / Placeholder / Value
	Background & Border HEX Tokens
	Typography & Tailwind Classes
	Interactive / GSAP Behavior
	Contact Eyebrow (H5)
	h5.contact-eyebrow
	// 04. INITIATE CONNECTION
	Bg: transparent
	font-mono text-xs text-dust uppercase tracking-widest mb-3
	ScrollTrigger fade-in + TextPlugin hex scramble.
	Contact Heading (H2)
	h2.contact-heading
	Let's build something production-ready together.2
	Text: #DEDEDE (kingly)
	font-display text-3xl lg:text-4xl font-bold text-kingly mb-4
	Staggered line reveal (yPercent: 100 -> 0).
	Contact Subtext (P)
	p.contact-lead
	Have a SaaS concept, custom Discord bot specification, white-label agency brief, or open-source collaboration in mind? Reach out directly.2
	Text: #979797 (spanish)
	font-sans text-base text-spanish mb-8 leading-relaxed
	Fades up (y: 20 -> 0, autoAlpha: 0 -> 1).
	Channel Pill 01: Email
	a.contact-pill (href="mailto:munthasirrahman@gmail.com")
	[✉] munthasirrahman@gmail.com1
	Bg: #2B2B2B/30 | Border: 1px #2B2B2B, Hover: #DEDEDE
	p-4 rounded-xl flex items-center gap-4 font-mono text-sm text-dust
	Planar radial border illumination; copies email or launches client.
	Channel Pill 02: Location
	div.contact-pill
	[⌖] Chuadanga, Khulna, Bangladesh1
	Bg: #2B2B2B/30 | Border: 1px #2B2B2B
	p-4 rounded-xl flex items-center gap-4 font-mono text-sm text-dust
	Planar radial border illumination on hover.
	Channel Pill 03: Status
	div.contact-pill
	[●] Available for Freelance, SaaS & White-Label2
	Bg: #2B2B2B/30 | Border: 1px #2B2B2B | Dot: #DEDEDE
	p-4 rounded-xl flex items-center gap-4 font-mono text-sm text-dust
	Continuous soft pulse on #DEDEDE status dot.
	Form Inputs: Name & Email
	input[type="text"], input[type="email"]
	Placeholders: "Your Name", "Your Email"
	Bg: #0F0F0F (chaos) | Border: 1px #2B2B2B, Focus: #DEDEDE
	w-full px-4 py-3.5 rounded-lg text-kingly placeholder-dull text-sm
	Focus transitions border smoothly from #2B2B2B to #DEDEDE.
	Form Select: Collaboration Model
	select#collab-type
	Options: 1. SaaS Partnership, 2. Freelance Web App / UI-UX, 3. Custom Discord Bot & Dashboard, 4. Agency White-Label, 5. Open-Source1
	Bg: #0F0F0F (chaos) | Border: 1px #2B2B2B, Focus: #DEDEDE
	w-full px-4 py-3.5 rounded-lg text-dust font-sans text-sm
	Custom monochrome chevron indicator in #BCBCBC.
	Form Textarea: Brief
	textarea#project-brief
	Placeholder: "Tell me about your architecture, timeline, and goals..."
	Bg: #0F0F0F (chaos) | Border: 1px #2B2B2B, Focus: #DEDEDE
	w-full px-4 py-3.5 rounded-lg text-kingly placeholder-dull text-sm
	Auto-expands vertically as user types detailed requirements.
	Form Submit Button
	button[type="submit"].magnetic-btn
	SEND TRANSMISSION →
	Bg: #DEDEDE (kingly), Hover: #BCBCBC (dust) | Text: #0F0F0F
	w-full py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest
	2D magnetic pull; clicking runs GSAP terminal progress animation (TRANSMITTING... -> 200 OK // RECEIVED).
	Global Footer Bar
	footer.global-footer
	MR_ © 2026 Munthasir Rahman (munthasirdevs). All rights reserved. + Nav Links + Socials + ↑ Top Button1
	Bg: #0F0F0F (chaos) | Top Button: #2B2B2B bg, #4D4D4D border
	font-mono text-xs text-dull flex items-center justify-between
	Clicking ↑ smoothly scrolls window to top: 0 via GSAP (duration: 1.2s, power4.inOut).
	Secondary Pages Complete Frontend Specification
While index.html provides a complete narrative journey, the multi-page information architecture inherited from munthasir.com (Home, About, Skills, Contact1) and expanded by the twenty-five public repositories on github.com/munthasirdevs2 is supported by five dedicated secondary HTML documents (projects.html, about.html, skills.html, services.html, and contact.html). All secondary routes share the fixed Global Chrome (Section 0), the Layer 2 ambient 3D wireframe canvas, and the Global Footer (Section 10). Navigating between HTML pages intercepts link clicks in vanilla JavaScript to trigger a 0.55-second Five-Column GSAP Shutter Curtain Transition, sliding the five #0F0F0F vertical panels down to cover the viewport with the silver "Munthasir" script signature flashing at center screen before loading the destination view.


Secondary Page File
	Route Purpose & Architectural Role
	Primary H1 Display Text (#DEDEDE)
	H2 Subtitle / Lead (#BCBCBC)
	Core Architectural Modules Included on Page
	projects.html
	Full 25-Repository & Case Study Explorer2
	OPEN-SOURCE & PROJECT ARCHIVE
	25 Public Repositories, Production Web Apps & Custom Automation Engines1
	Reference 3 Live Command Search Bar, Category Filter Pills, Featured Case Study Split Cards (linkOpener, XenonStudios), and an Interactive 25-Row GitHub Repository Table.
	about.html
	Expanded Biography & System Philosophy1
	ARCHITECTING CLEAN SOFTWARE
	Munthasir Rahman — Web Developer, UI/UX Designer & Full-Stack Bot Engineer1
	Framed Reference 6 Portrait, Deep-Dive Biography, The 3 Core Principles (Clean Code, Creative Design, Responsive), Live GitHub README.md Terminal Viewer, and Location Card.
	skills.html
	Technical Stack & R&D Lab1
	TECHNICAL STACK & R&D LAB
	Frontend Precision, Laravel Backend Architecture & Cloud-Native Automation1
	Four-Quadrant Categorized Progress Matrices (Frontend, Backend & Database, Automation & Bots, UI/UX & Cloud R&D), and Interactive Code Sandbox.
	services.html
	Service Packages & Agency Portal1
	SOLUTIONS & COLLABORATION
	SaaS Partnerships, Custom Web Apps, Discord Bots & White-Label Execution2
	Expanded Reference 7 Interactive Service Accordion, 4-Step Delivery Lifecycle Schematic, Collaboration Tier Comparison Table, and Technical FAQ Accordion.
	contact.html
	Dedicated Project Scoping Portal1
	INITIATE PROJECT SCOPING
	Direct Engineering Channel — Chuadanga, Bangladesh to Worldwide1
	Interactive 3-Step Project Configurator (Select Track → Select Stack → Transmit Brief), Direct Contact Channels (Email, WhatsApp, GitHub), and Live GMT+6 Clock.
	Projects Archive Page (projects.html) — Full 25-Repository Explorer
The Projects Archive page opens with an architectural header (section.pt-36.pb-16.px-6.border-b.border-shoewax) backed by Reference 3’s vertical fluted ribs. Beneath the eyebrow H5 (// GITHUB.COM/MUNTHASIRDEVS // PUBLIC ARCHIVE2), H1 (OPEN-SOURCE & PROJECT ARCHIVE), and lead paragraph ("I believe in building in public. Explore my pinned tools, client architectures, and all 25 open-source repositories—free to inspect, fork, and learn from."2), the layout embeds Reference 3’s centered command search bar (input#repo-search). Styled in bg-shoewax/50 border border-thunder text-kingly placeholder-dull font-mono text-xs rounded-xl pl-12 pr-14 py-4, the input displays the placeholder Q FILTER 25 REPOSITORIES BY NAME, STACK (JS, LARAVEL, HTML, BOT)... and filters the repository table in real time on keyup.
Immediately below the search header, two full-width Deep-Dive Pinned Case Study Sections (section.py-16.px-6.border-b.border-shoewax) examine the two pinned repositories highlighted on Munthasir Rahman’s GitHub profile2. The first case study examines linkOpener (Multi-Link Opener)2, pairing an architectural breakdown on the left (H2: linkOpener — Bulk URL Validation & Sequential Launch Engine; P: explaining how the lightweight JavaScript utility parses multi-line URL inputs, strips invalid strings via regex validation, and launches tabs sequentially with an adjustable millisecond delay2) with an interactive Live Embedded Sandbox of linkOpener on the right (bg-shoewax/30 border border-thunder rounded-2xl p-6), enabling visitors to test URL validation and delay sliders directly inside the page. The second case study examines XenonStudios2, pairing its UI/UX and semantic HTML5 narrative on the left with an interactive viewport breakpoint switcher (Desktop 1440px, Tablet 768px, Mobile 375px) on the right. The final section of projects.html renders the 25-Repository Interactive Directory Table (table#github-archive-table.w-full.text-left.border-collapse.font-mono.text-xs), which dynamically hydrates live repository metadata from https://api.github.com/users/munthasirdevs/repos?sort=updated&per_page=30 while maintaining a complete static fallback catalog so all twenty-five repository rows render instantaneously regardless of API rate limits2.
About, Skills, Services, and Contact Secondary Pages (about.html, skills.html, services.html, contact.html)
Each remaining secondary page expands its corresponding domain from index.html into a dedicated deep-dive reference view:


Page Route & Section
	Container Styling & Layout Grid
	H2 / H3 Section Heading (#DEDEDE)
	Exact Narrative / Functional Content Specification (#979797 / #BCBCBC)
	Interactive / GSAP Component Mechanics
	about.html — Dual Identity Narrative
	section.py-20.px-6.border-b.border-shoewax (max-w-7xl mx-auto grid lg:grid-cols-12 gap-12)
	H2: Where UI/UX Artistry Meets Full-Stack & Bot Engineering1
	Chronicles the progression in Chuadanga, Khulna, Bangladesh from responsive HTML/CSS/Tailwind/UX design into full-stack PHP, MySQL, Laravel SaaS architecture, and custom Discord bot engineering1.
	Reference 6 dashed vector bounding box frames the portrait while scroll-triggered callout badges highlight key career milestones (03+ Years, 23+ Projects, 96% Satisfaction)1.
	about.html — Live README.md Inspector
	section.py-20.px-6 (max-w-5xl mx-auto)
	H2: munthasirdevs / README.md — Live System Manifesto2
	Displays the exact GitHub profile README structure inside a Reference 4 dual-tab terminal window (current_focus.yaml and open_source_manifesto.md), highlighting building: "Production-ready SaaS applications with Laravel" and next_milestone: "Launch first open-source SaaS boilerplate"2.
	Visitors can toggle between YAML configuration view and rendered Markdown preview via planar GSAP crossfades.
	skills.html — Four-Quadrant Stack Lab
	section.py-20.px-6 (max-w-7xl mx-auto grid lg:grid-cols-2 gap-8)
	H2: Four-Quadrant Technical Architecture1
	Divides all technologies into four #2B2B2B-bordered quadrant cards: Q1 Frontend Engineering (HTML5 98%, CSS3 96%, Tailwind 96%, JS 94%, TypeScript 85%, Bootstrap 95%, jQuery 92%, GSAP 90%), Q2 Backend & Database (PHP 92%, Laravel 95%, MySQL 90%), Q3 Bot & Automation (Discord Bots 95%, Web Dashboards 92%, Browser Tools 96%), and Q4 UI/UX & Cloud R&D (UI/UX 94%, Docker 85%, Kubernetes 80%, AI/ML Integration 86%)1.
	Hovering any skill row updates a live code preview panel demonstrating Munthasir Rahman’s coding conventions in that language.
	services.html — Engagement Blueprints
	section.py-20.px-6 (max-w-7xl mx-auto space-y-10)
	H2: Four Collaboration Tracks & Technical Deliverables2
	Dedicates a full-width architectural split card to each collaboration model (1. SaaS Partnerships, 2. Freelance Custom Web Apps, 3. Agency White-Label Development, 4. Open-Source Tooling)2, specifying architecture patterns, mobile-first QA guarantees1, and deployment handoff.
	Clicking Scope This Track → on any card routes to contact.html?track=saas (or freelance, agency, opensource) with that track pre-activated.
	contact.html — 3-Step Project Configurator
	section.py-20.px-6 (max-w-5xl mx-auto)
	H2: Interactive Project Architecture Configurator1
	Step 01 (Select Track): Pill toggles for SaaS App, Discord Bot + Dashboard, Frontend / UI-UX, White-Label Retainer1. Step 02 (Select Stack): Multi-select monochrome pills (Laravel, MySQL, Tailwind, JS/TS, Docker)1. Step 03 (Transmit Brief): Compiles selections into a live JSON summary beside the contact form and direct links (munthasirrahman@gmail.com, WhatsApp, GitHub)1.
	Selecting pills dynamically updates the right-hand terminal payload preview via GSAP TextPlugin and displays a live Chuadanga, BD (GMT+6) clock1.
	Frontend Implementation Architecture (HTML5, CSS3, Tailwind, JS, GSAP)
The entire multi-page frontend is engineered for zero-build-step portability or rapid Vite/Tailwind CLI compilation, relying exclusively on semantic HTML5, custom CSS3 variables, Tailwind CSS, vanilla ES6+ JavaScript, and GSAP (gsap.min.js, ScrollTrigger.min.js, TextPlugin.min.js). No external 3D libraries (such as Three.js) or heavy component frameworks are required, ensuring instantaneous load performance and 100% control over the seven-tone grayscale palette.


File / Directory Path
	Architectural Responsibility & Module Scope
	/index.html
	Primary single-page portfolio experience encompassing the Reference 1 Calligraphic Preloader and Sections 0 through 10.
	/projects.html
	Secondary page: 25-repository GitHub explorer, live linkOpener sandbox, and XenonStudios responsive preview2.
	/about.html
	Secondary page: expanded biography, Chuadanga/Khulna origin1, and live munthasirdevs/README.md terminal inspector2.
	/skills.html
	Secondary page: four-quadrant technical skill matrix (Frontend, Backend, Bots, Cloud/AI R&D) and code previewer1.
	/services.html
	Secondary page: detailed SaaS partnership, Discord bot, freelance, and white-label agency packages2.
	/contact.html
	Secondary page: interactive 3-step project configurator, live GMT+6 clock, and direct communication channels1.
	/css/styles.css
	Custom utility layers, SVG noise filter definitions, --mouse-x/--mouse-y planar radial border tracking, and custom scrollbars.
	/js/tailwind.config.js
	Exact configuration mapping the 7 Reference 2 grayscale hex codes (chaos through kingly) and font families.
	/js/ambient-3d.js
	Pure vanilla JS HTML5 <canvas> 3D Fibonacci wireframe sphere and Keplerian orbital ring projection engine.
	/js/animations.js
	Master GSAP timelines: Preloader calligraphy sequence, ScrollTrigger section reveals, number counters, and 2D magnetic pulls.
	/js/app.js
	UI interactivity: IDE code compiler toggle, project filter pills, use-case terminal switcher, and GitHub API repository fetcher.
	Master Tailwind CSS Configuration Blueprint (/js/tailwind.config.js)
The Tailwind configuration maps the exact HEX, RGB, and CMYK specifications from Reference 2 into semantic utility classes (bg-chaos, border-shoewax, border-thunder, text-dull, text-spanish, text-dust, text-kingly):






JavaScript
tailwind.config = {
 darkMode: 'class',
 theme: {
   extend: {
     colors: {
       chaos: '#0F0F0F',    // RGB: 15, 15, 15    | CMYK: 0%, 0%, 0%, 94%
       shoewax: '#2B2B2B',  // RGB: 43, 43, 43    | CMYK: 0%, 0%, 0%, 83%
       thunder: '#4D4D4D',  // RGB: 77, 77, 77    | CMYK: 0%, 0%, 0%, 70%
       dull: '#717171',     // RGB: 113, 113, 113 | CMYK: 0%, 0%, 0%, 56%
       spanish: '#979797',  // RGB: 151, 151, 151 | CMYK: 0%, 0%, 0%, 41%
       dust: '#BCBCBC',     // RGB: 188, 188, 188 | CMYK: 0%, 0%, 0%, 26%
       kingly: '#DEDEDE',   // RGB: 222, 222, 222 | CMYK: 0%, 0%, 0%, 13%
     },
     fontFamily: {
       sans: ['Inter', 'sans-serif'],
       display: ['Plus Jakarta Sans', 'Syne', 'sans-serif'],
       mono: ['JetBrains Mono', 'monospace'],
       'serif-editorial': ['Playfair Display', 'serif'],
       script: ['Pinyon Script', 'cursive'],
     },
     backgroundImage: {
       'card-surface': 'linear-gradient(180deg, rgba(43, 43, 43, 0.45) 0%, rgba(15, 15, 15, 0.85) 100%)',
       'row-sweep': 'linear-gradient(90deg, #2B2B2B 0%, #4D4D4D 50%, #2B2B2B 100%)',
     }
   }
 }
};

Core JavaScript and GSAP Motion Blueprint (/js/animations.js & /js/ambient-3d.js)
The following production JavaScript module initializes the Reference 1 "Munthasir" calligraphic preloader timeline, enforces strictly planar (2D) spotlight border tracking and magnetic pulls without 3D hover tilt, and drives the ScrollTrigger-coupled HTML5 Canvas 3D wireframe sphere:






JavaScript
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 1. CREATIVE GSAP PRELOADER ("Munthasir" Reference 1 Signature Sequence)
function initPreloader() {
 const tl = gsap.timeline({
   onComplete: () => {
     document.body.classList.remove('overflow-hidden');
     initScrollAnimations();
   }
 });

 const counterObj = { val: 0 };
 const counterEl = document.getElementById('preloader-counter');

 tl.fromTo('.orbital-arcs path', 
   { strokeDasharray: 1400, strokeDashoffset: 1400 },
   { strokeDashoffset: 0, duration: 1.0, ease: 'power2.inOut', stagger: 0.15 }, 0
 )
 .to(counterObj, {
   val: 100,
   duration: 2.3,
   ease: 'power2.inOut',
   onUpdate: () => {
     counterEl.textContent = String(Math.floor(counterObj.val)).padStart(3, '0');
   }
 }, 0)
 .from('.serif-glyphs path', {
   yPercent: 115,
   opacity: 0,
   duration: 0.8,
   stagger: 0.05,
   ease: 'expo.out'
 }, 0.4)
 .fromTo('.script-h-path',
   { strokeDasharray: 2200, strokeDashoffset: 2200 },
   { strokeDashoffset: 0, duration: 1.15, ease: 'power3.inOut' }, 0.75
 )
 .fromTo('.metallic-sheen',
   { xPercent: -120 },
   { xPercent: 120, duration: 0.7, ease: 'power2.inOut' }, 1.8
 )
 .to('#preloader-svg-wrap', {
   scale: 0.88,
   y: -30,
   autoAlpha: 0,
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

// 2. PLANAR (NON-3D) SPOTLIGHT BORDER TRACKING & 2D MAGNETIC BUTTONS
function initPlanarInteractions() {
 // Planar radial spotlight tracking (Strictly NO rotateX / rotateY 3D tilt)
 document.querySelectorAll('.bento-card, .project-card, .timeline-card').forEach(card => {
   card.addEventListener('mousemove', (e) => {
     const rect = card.getBoundingClientRect();
     card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
     card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
   });
 });

 // 2D flat magnetic button pull
 document.querySelectorAll('.magnetic-btn').forEach(btn => {
   const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
   const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });
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
}

// 3. AMBIENT 3D WIREFRAME SPHERE & ORBITAL RINGS (Pure Canvas + GSAP ScrollTrigger)
function initAmbient3DBackground() {
 const canvas = document.getElementById('ambient-3d-canvas');
 const ctx = canvas.getContext('2d');
 let width = (canvas.width = window.innerWidth);
 let height = (canvas.height = window.innerHeight);

 const state = { rotY: 0, rotX: 0.25, sphereXOffset: width * 0.22, radius: 240 };

 // Generate Fibonacci 3D Sphere Vertices
 const numPoints = 260;
 const points = [];
 const phi = Math.PI * (3 - Math.sqrt(5));
 for (let i = 0; i < numPoints; i++) {
   const y = 1 - (i / (numPoints - 1)) * 2;
   const r = Math.sqrt(1 - y * y);
   const theta = phi * i;
   points.push({ x: Math.cos(theta) * r, y: y, z: Math.sin(theta) * r });
 }

 // Link 3D Sphere coordinates to ScrollTrigger across the document
 gsap.to(state, {
   rotY: Math.PI * 3.5,
   rotX: -0.35,
   sphereXOffset: 0,
   radius: 340,
   ease: 'none',
   scrollTrigger: {
     trigger: 'body',
     start: 'top top',
     end: 'bottom bottom',
     scrub: 1.2
   }
 });

 function render() {
   ctx.clearRect(0, 0, width, height);
   state.rotY += 0.0018;
   const cx = width / 2 + state.sphereXOffset;
   const cy = height / 2;

   points.forEach(p => {
     // 3D Rotation Matrix
     const x1 = p.x * Math.cos(state.rotY) - p.z * Math.sin(state.rotY);
     const z1 = p.z * Math.cos(state.rotY) + p.x * Math.sin(state.rotY);
     const y2 = p.y * Math.cos(state.rotX) - z1 * Math.sin(state.rotX);
     const z2 = z1 * Math.cos(state.rotX) + p.y * Math.sin(state.rotX);

     const scale = 600 / (600 - z2 * state.radius);
     const px = cx + x1 * state.radius * scale;
     const py = cy + y2 * state.radius * scale;

     // Monochrome Depth Shading (#2B2B2B back to #DEDEDE front)
     const alpha = Math.max(0.08, (z2 + 1) / 2 * 0.55);
     ctx.fillStyle = z2 > 0.2 ? `rgba(222, 222, 222, ${alpha})` : `rgba(151, 151, 151, ${alpha})`;
     ctx.beginPath();
     ctx.arc(px, py, z2 > 0 ? 1.6 : 0.9, 0, Math.PI * 2);
     ctx.fill();
   });
   requestAnimationFrame(render);
 }
 render();
}

Works cited
1. https://munthasir.com/
2. Munthasir Rahman munthasirdevs - GitHub, https://github.com/munthasirdevs
3. Discord Web Dashboard Bots | Discord Bot List, https://discordbotlist.com/discord-web-dashboard-bots?page=29