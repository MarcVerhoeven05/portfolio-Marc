import { createHeader } from './components/Header.js';
import { createFooter, initFooterToggle } from './components/Footer.js';
import { createHomeView } from './views/HomeView.js';
import { createAboutView, initAbout } from './views/AboutView.js';
import { createProjectsView } from './views/ProjectsView.js';
import { createProjectDetailView } from './views/ProjectDetailView.js';
import { initLightbox } from './components/Lightbox.js';
import { initCursorStudio } from './components/CursorStudio.js';
import { initEasterEgg } from './components/EasterEgg.js';

export function initRouter() {
  const appContainer = document.getElementById('app');

  const routes = [
    { path: '/', view: () => createHomeView() },
    { path: '/over-mij', view: () => createAboutView() },
    { path: '/projecten', view: () => createProjectsView() },
  ];

  function renderRoute(path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let viewHTML = '';
    let currentPath = path;

    // Check project detail match e.g. /projecten/project-1
    if (path.startsWith('/projecten/')) {
      const slug = path.replace('/projecten/', '');
      viewHTML = createProjectDetailView(slug);
    } else {
      const match = routes.find(r => r.path === path) || routes[0];
      currentPath = match.path;
      viewHTML = match.view();
    }

    const fullHTML = `
      ${createHeader(currentPath)}
      <main class="site-main">
        ${viewHTML}
      </main>
      ${createFooter()}
    `;

    appContainer.innerHTML = fullHTML;
    attachLinkListeners();
    initFooterToggle();
    initLightbox();
    initAbout();
    initCursorStudio();
    initEasterEgg();
  }

  function navigateTo(url) {
    history.pushState(null, null, url);
    renderRoute(window.location.pathname);
  }

  function attachLinkListeners() {
    document.querySelectorAll('a[data-link]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== window.location.pathname) {
          navigateTo(href);
        }
      });
    });
  }

  window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname);
  });

  // Initial render
  renderRoute(window.location.pathname);
}
