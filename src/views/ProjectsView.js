import { siteData } from '../data/siteData.js';
import { starDoodle, scribbleDoodle, arrowDoodle, dotGridDoodle, sparkTicksDoodle } from '../components/svgDoodles.js';

export function createProjectsView() {
  const projects = siteData.projects;

  const projectCards = projects.map((project, index) => `
    <a href="/projecten/${project.slug}" class="project-grid-card" data-link id="project-card-${index + 1}">
      <div class="project-grid-thumb">
        <img src="${project.coverImage}" alt="${project.title}" />
        <div class="project-grid-overlay">
          <span class="project-grid-view-label">Bekijk project →</span>
        </div>
      </div>
      <div class="project-grid-info">
        <div class="project-grid-number">0${index + 1}</div>
        <h2 class="project-grid-title">${project.title}</h2>
        <p class="project-grid-subtitle">${project.subtitle}</p>
      </div>
    </a>
  `).join('');

  return `
    <div class="sketchbook-view projects-view projects-grid-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-projects">
          <span>PRO</span>
          <span>JECTEN</span>
        </div>
      </div>

      <!-- INTRO TEKST -->
      <div class="projects-grid-header">
        <div class="text-block-handwritten projects-intro-text">
          <p>${siteData.projectsIntro}</p>
        </div>
        ${starDoodle(46, "star-projects-header")}
      </div>

      <!-- PROJECT GRID -->
      <div class="projects-grid">
        ${projectCards}
      </div>

      <!-- Doodle decorations -->
      ${scribbleDoodle(120, 60, "scribble-projects-deco")}
      ${dotGridDoodle("dot-grid-projects-deco")}

      <style>
        .star-projects-header {
          display: inline-block;
          margin-left: 1.5rem;
          vertical-align: middle;
        }

        .projects-grid-view {
          min-height: 100vh;
          padding-bottom: 6rem;
        }

        .projects-grid-header {
          position: relative;
          z-index: 10;
          padding: 8rem 5% 2rem 5%;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .projects-intro-text {
          max-width: 600px;
        }

        .projects-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          padding: 1rem 5% 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-grid-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border: 2.5px solid var(--black, #111);
          border-radius: 16px;
          overflow: hidden;
          background: var(--white, #fff);
          box-shadow: 6px 6px 0px var(--yellow, #F5E642);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .project-grid-card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 9px 9px 0px var(--yellow, #F5E642);
        }

        .project-grid-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #eee;
        }

        .project-grid-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .project-grid-card:hover .project-grid-thumb img {
          transform: scale(1.04);
        }

        .project-grid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-grid-card:hover .project-grid-overlay {
          opacity: 1;
        }

        .project-grid-view-label {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-grid-info {
          padding: 1.2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .project-grid-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--yellow, #F5E642);
          -webkit-text-stroke: 2px var(--black, #111);
          line-height: 1;
        }

        .project-grid-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--black, #111);
          margin: 0.2rem 0 0 0;
        }

        .project-grid-subtitle {
          font-size: 1rem;
          color: #555;
          margin: 0;
        }

        .scribble-projects-deco {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          opacity: 0.3;
          pointer-events: none;
          z-index: 1;
        }

        .dot-grid-projects-deco {
          position: fixed;
          top: 6rem;
          right: 1rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </div>
  `;
}
