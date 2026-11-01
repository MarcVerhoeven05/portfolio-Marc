import { siteData } from '../data/siteData.js';
import { starDoodle, scribbleDoodle, dotGridDoodle, organicOvalSVG, sparkTicksDoodle } from '../components/svgDoodles.js';

export function createHomeView() {
  return `
    <div class="sketchbook-view home-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY (100% SCREEN WIDTH) -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-home-1">
          <span>MARC</span>
        </div>
        <div class="bg-text bg-text-home-2">
          <span>VERHOEVEN</span>
        </div>
      </div>

      <!-- LAAG 2 & 3: COMPOSITION (EXACT MATCH WITH WIREFRAME PAGE 3) -->
      <div class="home-composition" style="position: relative; min-height: 85vh; padding-top: 1rem;">
        
        <!-- LAAG 2: Tekst 1 Top-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 14%; left: 6%; max-width: 380px;">
          <p>${siteData.home.text1}</p>
        </div>

        <!-- LAAG 3: Star Left Edge -->
        ${starDoodle(44, "star-home-left")}
        <style>
          .star-home-left { position: absolute; top: 36%; left: -0%; }
        </style>

        <!-- LAAG 3: Scribble Bottom-Left -->
        ${scribbleDoodle(110, 50, "scribble-home-bottom-left")}
        <style>
          .scribble-home-bottom-left { position: absolute; bottom: 4%; left: 4%; transform: rotate(-5deg); }
        </style>

        <!-- LAAG 2: Tekst 1 Center-Left -->
          <div class="text-block-handwritten" style="position: absolute; top: 81%; left: 26%; max-width: 280px;">
            <p>${siteData.home.text2}</p>
          </div>
        </div>

        <!-- LAAG 3: Dot Cluster Center -->
        ${dotGridDoodle("dot-grid-home-center")}
        <style>
          .dot-grid-home-center { position: absolute; top: 60%; left: 46%; opacity: 0.85; }
        </style>

        <!-- LAAG 3: Star Top Center -->
        ${starDoodle(46, "star-home-top")}
        <style>
          .star-home-top { position: absolute; top: 18%; left: 54%; transform: rotate(10deg); }
        </style>

        <!-- LAAG 3: Spark Ticks Center Right -->
        ${sparkTicksDoodle("spark-home-right")}
        <style>
          .spark-home-right { position: absolute; top: 38%; left: 62%; }
        </style>

        <!-- LAAG 3: Scribble Top Right -->
        ${scribbleDoodle(110, 50, "scribble-home-top-right")}
        <style>
          .scribble-home-top-right { position: absolute; top: 22%; right: 10%; transform: rotate(15deg); }
        </style>

        <!-- LAAG 3: Star Bottom Center (Easter Egg Trigger - Foreground) -->
        <div id="easter-egg-star-trigger" style="position: absolute; bottom: 6%; left: 78%; cursor: pointer; z-index: 50;">
          ${starDoodle(40, "star-home-bottom")}
        </div>

        <!-- LAAG 2: Tekst 1 Bottom-Right -->
        <div class="text-block-handwritten" style="position: absolute; top: 48%; right: 6%; max-width: 380px;">
          <p>${siteData.home.text3}</p>
        </div>
        

      </div>
    </div>
  `;
}
