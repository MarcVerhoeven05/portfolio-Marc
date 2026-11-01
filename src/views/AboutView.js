import { siteData } from '../data/siteData.js';
import { starDoodle, scribbleDoodle, arrowDoodle, crownDoodle, dotGridDoodle, organicOvalSVG, sparkTicksDoodle } from '../components/svgDoodles.js';

export function createAboutView() {
  return `
    <div class="sketchbook-view about-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY (100% SCREEN WIDTH) -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-about">
          <span>ABOUT</span>
          <span>ME</span>
        </div>
      </div>

      <!-- LAAG 2 & 3: COMPOSITION (EXACT MATCH WITH WIREFRAME PAGE 1) -->
      <div class="about-composition" style="position: relative; min-height: 92vh; padding-top: 1rem;">
        
        <!-- LAAG 2: MARC'S CUTOUT PHOTO -->
        <div class="marc-photo-wrapper" style="position: absolute; right: 38%; top: -6%; width: 48vw; max-width: 650px; z-index: 15;">
          <div style="position: relative;">
            <img src="${siteData.author.photo}" alt="Marc Verhoeven" style="width: 240%; height: auto; display: block; filter: drop-shadow(8px -12px 0px rgba(251, 232, 12, 0.95)) drop-shadow(12px -16px 0px #181819);" />
          </div>
        </div>

        ${dotGridDoodle("dot-grid-about-top-left")}
        <style>.dot-grid-about-top-left { position: absolute; top: 6%; left: 0%; opacity: 0.85; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 4%; left: 6%; max-width: 360px;">
          <p>${siteData.about.text1}</p>
        </div>

        <div class="text-block-handwritten" style="position: absolute; top: 85%; left: 36%; max-width: 240px;">
          <p>${siteData.about.text4}</p>
        </div>

        ${starDoodle(46, "star-about-top")}
        <style>.star-about-top { position: absolute; top: 16%; left: 52%; transform: rotate(10deg); }</style>

        ${arrowDoodle("down-right", 65, 45, "arrow-about-top")}
        <style>.arrow-about-top { position: absolute; top: 24%; left: 46%; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 40%; left: 15%; max-width: 320px;">
          <p>${siteData.about.text2}</p>
        </div>

        ${scribbleDoodle(110, 50, "scribble-about-left")}
        <style>.scribble-about-left { position: absolute; top: 60%; left: 3%; transform: rotate(0deg); }</style>

        <div class="horizontal-stroke-about" style="position: absolute; top: 69%; left: 15%; width: 280px; height: 3px; background-color: var(--black); transform: rotate(-1deg); z-index: 5;"></div>

        ${arrowDoodle("up-right", 65, 45, "arrow-about-bottom")}
        <style>.arrow-about-bottom { position: absolute; top: 70%; left: 38%; }</style>

        ${starDoodle(40, "star-about-bottom")}
        <style>.star-about-bottom { position: absolute; bottom: -10%; left: 30%; }</style>

        <div class="text-block-handwritten" style="position: absolute; top: 96%; left: 0%; max-width: 350px;">
          <p>${siteData.about.text3}</p>
        </div>

        ${dotGridDoodle("dot-grid-about-right")}
        <style>.dot-grid-about-right { position: absolute; top: 10%; right: 4%; opacity: 0.85; }</style>

        ${crownDoodle("crown-about")}
        <style>.crown-about { position: absolute; top: 44%; right: 2%; transform: rotate(12deg); }</style>

        ${sparkTicksDoodle("spark-about-bottom")}
        <style>.spark-about-bottom { position: absolute; top: 62%; right: 6%; }</style>

      </div>

      <!-- ── LEER MIJ KENNEN KNOP ── -->
      <div class="lmk-btn-wrap">
        <button id="lmk-open-btn" class="lmk-open-btn" type="button">
          Leer mij kennen
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- ── LINKERPANEEL ── -->
      <div id="lmk-panel" class="lmk-panel" aria-hidden="true">

        <!-- Sluit knop bovenin -->
        <button id="lmk-close-btn" class="lmk-panel-close" type="button" aria-label="Sluit paneel">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Ga terug
        </button>

        <div class="lmk-panel-inner">

          <div class="lmk-panel-header">
            ${starDoodle(36)}
            <h2 class="lmk-panel-heading">Hey, Marc hier! 👋</h2>
          </div>

          <div class="lmk-panel-cards">

            <div class="lmk-pcard lmk-pcard--yellow">
              <span class="lmk-pcard-icon">🎨</span>
              <div class="lmk-pcard-label">Wie ben ik?</div>
              <p>${siteData.lmk.text1}</p>
            </div>

            <div class="lmk-pcard">
              <span class="lmk-pcard-icon">💡</span>
              <div class="lmk-pcard-label">Wat doe ik?</div>
              <p>${siteData.lmk.text2}</p>
            </div>

            <div class="lmk-pcard lmk-pcard--yellow">
              <span class="lmk-pcard-icon">⚙️</span>
              <div class="lmk-pcard-label">Hoe werk ik?</div>
              <p>${siteData.lmk.text3}</p>
            </div>

            <div class="lmk-pcard">
              <span class="lmk-pcard-icon">✨</span>
              <div class="lmk-pcard-label">Mijn overtuiging</div>
              <p>${siteData.lmk.text4}</p>
            </div>

          </div>

          <!-- Contact -->
          <div class="lmk-panel-contact">
            <div class="lmk-contact-label">Neem contact op</div>
            <div class="lmk-contact-links">
              <a href="${siteData.author.socials.email}" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                E-mail
              </a>
              <a href="${siteData.author.socials.instagram}" target="_blank" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                Instagram
              </a>
              <a href="${siteData.author.socials.x}" target="_blank" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                YouTube
              </a>
              <a href="${siteData.author.socials.phone}" class="lmk-cpill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ${siteData.author.socials.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Donker overlay achter paneel -->
      <div id="lmk-backdrop" class="lmk-backdrop"></div>

    </div>

    <style>
      /* ── KNOP ───────────────────────────────────────── */
      .lmk-btn-wrap {
        position: relative;
        z-index: 20;
        display: flex;
        justify-content: center;
        padding: 6rem 0 6rem;
      }

      .lmk-open-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        background: var(--white, #fff);
        color: var(--black, #111);
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.9rem 2.2rem;
        font-size: 1.1rem;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        font-family: inherit;
        letter-spacing: 0.01em;
      }

      .lmk-open-btn:hover {
        transform: translate(-3px, -3px);
        box-shadow: 8px 8px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ── BACKDROP ───────────────────────────────────── */
      .lmk-backdrop {
        position: fixed;
        inset: 0;
        z-index: 8998;
        background: rgba(0,0,0,0.45);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.35s ease;
      }
      .lmk-backdrop.lmk-open {
        opacity: 1;
        pointer-events: all;
      }

      /* ── LINKERPANEEL ───────────────────────────────── */
      .lmk-panel {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: min(480px, 92vw);
        z-index: 8999;
        background: var(--white, #fff);
        border-right: 2.5px solid var(--black, #111);
        box-shadow: 8px 0 40px rgba(0,0,0,0.18);
        transform: translateX(-110%);
        transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .lmk-panel.lmk-open {
        transform: translateX(0);
      }

      /* ── SLUIT KNOP ─────────────────────────────────── */
      .lmk-panel-close {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1.25rem 1.5rem 0;
        background: var(--white, #fff);
        color: var(--black, #111);
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.55rem 1.4rem;
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 3px 3px 0 var(--black, #111);
        transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        font-family: inherit;
        align-self: flex-start;
      }

      .lmk-panel-close:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ── PANEEL INHOUD ──────────────────────────────── */
      .lmk-panel-inner {
        flex: 1;
        overflow-y: auto;
        padding: 1.5rem 1.5rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .lmk-panel-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .lmk-panel-heading {
        font-size: 1.6rem;
        font-weight: 900;
        margin: 0;
        color: var(--black, #111);
        line-height: 1.15;
      }

      /* ── KAARTEN ────────────────────────────────────── */
      .lmk-panel-cards {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .lmk-pcard {
        background: var(--white, #fff);
        border: 2.5px solid var(--black, #111);
        border-radius: 14px;
        padding: 1.2rem 1.4rem;
        box-shadow: 4px 4px 0 var(--black, #111);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }

      .lmk-pcard:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
      }

      .lmk-pcard--yellow {
        background: var(--yellow, #F5E642);
        box-shadow: 4px 4px 0 var(--black, #111);
      }

      .lmk-pcard--yellow:hover {
        box-shadow: 6px 6px 0 var(--black, #111);
      }

      .lmk-pcard-icon {
        font-size: 1.6rem;
        line-height: 1;
      }

      .lmk-pcard-label {
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        opacity: 0.55;
      }

      .lmk-pcard p {
        font-size: 0.97rem;
        line-height: 1.65;
        color: var(--black, #111);
        margin: 0;
      }

      /* ── CONTACT ────────────────────────────────────── */
      .lmk-panel-contact {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .lmk-contact-label {
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        opacity: 0.45;
      }

      .lmk-contact-links {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .lmk-cpill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: var(--black, #111);
        font-size: 0.92rem;
        font-weight: 600;
        border: 2px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.5rem 1.2rem;
        background: var(--white, #fff);
        box-shadow: 3px 3px 0 var(--black, #111);
        transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        align-self: flex-start;
      }

      .lmk-cpill:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }
    </style>
  `;
}

export function initAbout() {
  const openBtn   = document.getElementById('lmk-open-btn');
  const closeBtn  = document.getElementById('lmk-close-btn');
  const panel     = document.getElementById('lmk-panel');
  const backdrop  = document.getElementById('lmk-backdrop');

  if (!openBtn || !panel) return;

  const openPanel = () => {
    panel.classList.add('lmk-open');
    backdrop.classList.add('lmk-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closePanel = () => {
    panel.classList.remove('lmk-open');
    backdrop.classList.remove('lmk-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openPanel);
  closeBtn?.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('lmk-open')) closePanel();
  });
}
