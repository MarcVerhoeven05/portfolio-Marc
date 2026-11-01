import { siteData } from '../data/siteData.js';
import { socialInstagramIcon, socialSnapchatIcon, socialPhoneIcon, scribbleDoodle } from './svgDoodles.js';

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-volg-wrapper">
        <button id="volgMijBtn" class="footer-badge volg-mij-toggle" aria-expanded="false">
          volg mij <span class="toggle-arrow">▼</span>
        </button>
        
        <div id="volgMijMenu" class="volg-mij-dropdown hidden">
          <a href="${siteData.author.socials.instagram}" target="_blank" rel="noopener" class="volg-menu-item">
            ${socialInstagramIcon()}
            <span>Instagram</span>
          </a>
          <a href="${siteData.author.socials.snapchat}" target="_blank" rel="noopener" class="volg-menu-item">
            ${socialSnapchatIcon()}
            <span>Snapchat</span>
          </a>
          <a href="${siteData.author.socials.phone}" class="volg-menu-item">
            ${socialPhoneIcon()}
            <span>${siteData.author.socials.phoneDisplay}</span>
          </a>
        </div>
      </div>

      ${scribbleDoodle(120, 20, "footer-scribble")}

      <div class="footer-copy">
        &copy; ${new Date().getFullYear()} Marc Verhoeven — Portfolio
      </div>
    </footer>
  `;
}

export function initFooterToggle() {
  const btn = document.getElementById('volgMijBtn');
  const menu = document.getElementById('volgMijMenu');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        menu.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
