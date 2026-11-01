import { siteData } from '../data/siteData.js';
import { socialInstagramIcon, socialXIcon, socialMailIcon } from './svgDoodles.js';

export function createHeader(currentRoute = '/') {
  const isOverMijActive = currentRoute === '/over-mij' ? 'active' : '';
  const isProjectenActive = (currentRoute === '/projecten' || currentRoute.startsWith('/projecten/')) ? 'active' : '';

  return `
    <header class="site-header">
      <div class="header-left-group">
        <div class="header-left">
          <a href="/" class="logo-link" data-link>Marc Verhoeven</a>
        </div>
        
        <nav class="header-nav">
          <a href="/over-mij" class="nav-item ${isOverMijActive}" data-link>over mij</a>
          <a href="/projecten" class="nav-item ${isProjectenActive}" data-link>projecten</a>
        </nav>
      </div>
      
      <div class="header-socials">
        <button id="cursor-studio-trigger" class="nav-item cursor-studio-nav-btn" type="button" title="Teken je eigen cursor">cursor</button>
        <a href="${siteData.author.socials.instagram}" target="_blank" rel="noopener" class="social-icon-btn" title="Instagram">
          ${socialInstagramIcon()}
        </a>
        <a href="${siteData.author.socials.x}" target="_blank" rel="noopener" class="social-icon-btn" title="X">
          ${socialXIcon()}
        </a>
        <a href="${siteData.author.socials.email}" class="social-icon-btn" title="Email Marc">
          ${socialMailIcon()}
        </a>
      </div>
    </header>
  `;
}
