import { siteData } from '../data/siteData.js';
import { starDoodle, scribbleDoodle, arrowDoodle, dotGridDoodle } from '../components/svgDoodles.js';

export function createProjectDetailView(slug = 'project-1') {
  const project = siteData.projects.find(p => p.slug === slug) || siteData.projects[0];
  const projectIndex = siteData.projects.findIndex(p => p.slug === slug);
  const projectNum = String(projectIndex + 1).padStart(2, '0');

  // Build photo grid — every image gets the same card size
  const photoItems = project.images.map((src, i) => `
    <div class="detail-photo-item lightbox-trigger" data-src="${src}" style="cursor:pointer;">
      <img src="${src}" alt="${project.title} — foto ${i + 1}" loading="lazy" />
    </div>
  `).join('');

  return `
    <div class="sketchbook-view project-detail-view">

      <div class="detail-wrap">

        <!-- ── HEADER ── -->
        <div class="detail-header">
          <div class="detail-header-meta">
            <span class="detail-project-num">${projectNum}</span>
            <div class="detail-header-text">
              <h1 class="detail-title">${project.title}</h1>
              <p class="detail-subtitle">${project.subtitle}</p>
            </div>
            <div class="detail-star">${starDoodle(52)}</div>
          </div>
          <p class="detail-description">${project.description}</p>
        </div>

        <!-- ── TEKSTBLOK 1 ── -->
        <div class="detail-textblock detail-textblock--yellow">
          <div class="detail-textblock-label">Eindconcept</div>
          <p>${project.text1}</p>
        </div>

        <!-- ── FOTOGALERIJ ── -->
        <div class="detail-gallery">
          ${photoItems}
        </div>

        <!-- ── TEKSTBLOK 2 ── -->
        <div class="detail-textblock detail-textblock--white">
          <div class="detail-textblock-label">Schetsen &amp; Proces</div>
          <p>${project.text2}</p>
        </div>

        <!-- ── TERUG KNOP ── -->
        <div class="detail-back">
          <a href="/projecten" class="detail-back-link" data-link>
            ${arrowDoodle('left', 32, 22)}
            <span>Terug naar alle projecten</span>
          </a>
        </div>

      </div>
    </div>

    <style>
      /* ─── WRAPPER ─────────────────────────────────────── */
      .detail-wrap {
        max-width: 1300px;
        margin: 0 auto;
        padding: 6rem 4% 6rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      /* ─── HEADER ──────────────────────────────────────── */
      .detail-header {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .detail-header-meta {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .detail-project-num {
        font-size: 5rem;
        font-weight: 900;
        line-height: 1;
        color: var(--yellow, #F5E642);
        -webkit-text-stroke: 2.5px var(--black, #111);
        flex-shrink: 0;
      }

      .detail-header-text {
        flex: 1;
        min-width: 200px;
      }

      .detail-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 900;
        margin: 0 0 0.3rem 0;
        line-height: 1.1;
        color: var(--black, #111);
      }

      .detail-subtitle {
        font-size: 1.15rem;
        color: #555;
        margin: 0;
        font-style: italic;
      }

      .detail-star {
        flex-shrink: 0;
        margin-top: 0.25rem;
      }

      .detail-description {
        font-size: 1.2rem;
        line-height: 1.7;
        color: var(--black, #111);
        max-width: 780px;
        margin: 0;
        border-left: 3px solid var(--yellow, #F5E642);
        padding-left: 1.25rem;
      }

      /* ─── TEKSTBLOKKEN ────────────────────────────────── */
      .detail-textblock {
        border: 2.5px solid var(--black, #111);
        border-radius: 14px;
        padding: 1.6rem 2rem;
        position: relative;
      }

      .detail-textblock--yellow {
        background: var(--yellow, #F5E642);
        box-shadow: 5px 5px 0 var(--black, #111);
      }

      .detail-textblock--white {
        background: var(--white, #fff);
        box-shadow: 5px 5px 0 var(--yellow, #F5E642);
      }

      .detail-textblock-label {
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--black, #111);
        margin-bottom: 0.6rem;
        opacity: 0.65;
      }

      .detail-textblock p {
        font-size: 1.1rem;
        line-height: 1.75;
        color: var(--black, #111);
        margin: 0;
      }

      /* ─── FOTOGALERIJ ─────────────────────────────────── */
      .detail-gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .detail-photo-item {
        border: 2.5px solid var(--black, #111);
        border-radius: 12px;
        overflow: hidden;
        background: #f0f0f0;
        aspect-ratio: 4 / 3;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 4px 4px 0 var(--black, #111);
      }

      .detail-photo-item:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
      }

      .detail-photo-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .detail-photo-item:hover img {
        transform: scale(1.04);
      }

      /* Odd last photo spans full width */
      .detail-photo-item:last-child:nth-child(odd) {
        grid-column: 1 / -1;
        aspect-ratio: 16 / 7;
      }

      /* ─── TERUG KNOP ──────────────────────────────────── */
      .detail-back {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
      }

      .detail-back-link {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        text-decoration: none;
        color: var(--black, #111);
        font-size: 1.05rem;
        font-weight: 700;
        border: 2.5px solid var(--black, #111);
        border-radius: 50px;
        padding: 0.65rem 1.8rem;
        background: var(--white, #fff);
        box-shadow: 4px 4px 0 var(--black, #111);
        transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
      }

      .detail-back-link:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--yellow, #F5E642);
        background: var(--yellow, #F5E642);
      }

      /* ─── RESPONSIVE ──────────────────────────────────── */
      @media (max-width: 680px) {
        .detail-wrap {
          padding: 5rem 4% 4rem;
          gap: 2rem;
        }
        .detail-gallery {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .detail-photo-item:last-child:nth-child(odd) {
          grid-column: 1;
          aspect-ratio: 4 / 3;
        }
        .detail-project-num {
          font-size: 3rem;
        }
      }
    </style>
  `;
}
