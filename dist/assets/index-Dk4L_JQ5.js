(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const c={author:{photo:"/images/marc.png",socials:{instagram:"https://instagram.com/Marc_verhoeven05",x:"https://Youtube.com/m4rcv",email:"mailto:marcverhoeven05@gmail.com",snapchat:"https://snapchat.com/marcverhoeven05",phone:"tel:+31627126898",phoneDisplay:"+31 6 27126898"}},home:{text1:"Bij de knop (Projecten) krijg je een verzameling van projecten te zien. Zodra je op een gekozen project drukt krijg je hier meer info van.",text2:"Druk op (Over mij) om meer te weten te komen over mij.",text3:"Deze website geeft inzicht in wie ik ben als ontwerper en wat mijn eigen stijl is die ik aan het vormen ben."},projectsIntro:"Dit zijn een paar projecten waar ik aan heb gewerk. Druk op een project om meer beeldmateriaal te zien en meer uitleg er over te vinden.",about:{text1:"Wie ben ik? Ik ben Marc, een creatieve student met een passie voor ontwerpen en nieuwe ideeën uitwerken ",text2:"Wat doe ik? Ik maak graag viduele ontwerpen en experimenteer met verschillende stijlen en technieken",text3:"Hoe werk ik? Ik probeer graag nieuwe dingen uit en blijf zoeken tot een ontwerp goed voelt",text4:"Ik geloof dat de beste ideeën niet als eerst komen!"},projects:[{id:"project-1",slug:"project-1",title:"Identity Design",subtitle:"NRGY — Packaging & Graphic Identity",description:"Ik kreeg de opdracht om een blikje + Poster te ontwerpen. Hier zaten wel de eisen aan vast dat het een enrgie drankje moest zijn die het thema Glitchy in zich heeft. Dit heb ik op de volgende manier uitgewerkt.",coverImage:"/images/project-1/foto-1.png",images:["/images/project-1/foto-1.png","/images/project-1/foto-2.png","/images/project-1/foto-3.png","/images/project-1/foto-4.png","/images/project-1/foto-5.png","/images/project-1/foto-6.png"],text1:"Dit is het eindresultaat van het ontworpen blikje. Het effect Glitchy heb ik terug laten komen door tekst over elkaar heen te plaatsen waardoor je een soort error ervaart.",text2:"De poster moest de zelfde vormen taal hebben als het blikje maar het mocht er niet te veel op lijken. Daarom ben ik voor een net andere indeling gegaan."},{id:"project-2",slug:"project-2",title:"3sec.gallery",subtitle:"Poster Campagne",description:"Tijdens deze opdracht mocht ik zelf kiezen welk onderwerp ik wilde gebruiken. Doordat er frictie ontstaat bij mij als ik denk aan muzieksmaken heb ik het ook hierover gedaan. De bedoeling was dat ik een poster moest ontwerpen die laat zien dat iedereen een eigen muzieksmaak heeft.",coverImage:"/images/project-2/foto-1.png",images:["/images/project-2/foto-1.png","/images/project-2/foto-2.png","/images/project-2/foto-3.png","/images/project-2/foto-4.png","/images/project-2/foto-5.png","/images/project-2/foto-6.png","/images/project-2/foto-7.png"],text1:"Dit is de poster die ik heb ingeleverd voor de opdrachtgever. Helaas is deze niet uitgekozen. Ik heb er wel veel tijd en moeite ingestopt waardoor je dus veel details ziet.",text2:"Ik ben per muziek genre gaan kijken wat die genre echt speciaal maakt. Dit heb ik onderzocht en toegevoegd aan mijn design."}]},w=(e=32,t="")=>`
  <svg class="doodle star-doodle ${t}" width="${e}" height="${e}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V36M4 20H36M8 8L32 32M32 8L8 32" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,j=(e=60,t=30,s="")=>`
  <svg class="doodle scribble-doodle ${s}" width="${e}" height="${t}" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 25C15 5 25 35 35 12C45 38 55 8 65 28C70 18 75 22 78 20" stroke="#181819" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,A=(e="down-right",t=50,s=40,p="")=>{let r="M5 10Q25 5 40 30M28 28L40 30L38 18";return e==="up-right"?r="M5 32Q20 30 38 10M25 10L38 10L38 23":e==="left"?r="M42 20Q20 18 8 20M18 10L8 20L18 30":e==="down-left"&&(r="M38 8Q20 10 10 32M12 20L10 32L24 30"),`
    <svg class="doodle arrow-doodle ${p}" width="${t}" height="${s}" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${r}" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `},L=(e="")=>`
  <svg class="doodle dot-grid ${e}" width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2.5" fill="#181819"/>
    <circle cx="25" cy="12" r="2" fill="#181819"/>
    <circle cx="40" cy="8" r="2.8" fill="#181819"/>
    <circle cx="15" cy="28" r="2.2" fill="#181819"/>
    <circle cx="30" cy="30" r="3" fill="#181819"/>
    <circle cx="42" cy="26" r="2" fill="#181819"/>
    <circle cx="12" cy="48" r="2.8" fill="#181819"/>
    <circle cx="28" cy="50" r="2" fill="#181819"/>
    <circle cx="44" cy="46" r="2.5" fill="#181819"/>
  </svg>
`,T=(e="")=>`
  <svg class="doodle spark-ticks ${e}" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 24L12 8M16 26L22 10" stroke="#181819" stroke-width="3" stroke-linecap="round"/>
  </svg>
`,O=(e="")=>`
  <svg class="doodle crown-doodle ${e}" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 26L2 10L12 16L20 4L28 16L38 10L36 26H4Z" stroke="#181819" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,M=()=>`
  <svg viewBox="0 0 32 32">
    <rect x="4" y="4" width="24" height="24" rx="7" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="23" cy="9" r="1.5" fill="#181819" />
  </svg>
`,D=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M6 6L26 26M26 6L6 26" />
  </svg>
`,P=()=>`
  <svg viewBox="0 0 32 32">
    <rect x="4" y="6" width="24" height="20" rx="3" />
    <path d="M4 8L16 18L28 8" />
  </svg>
`,S=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M16 4C10.5 4 7 8 7 12C7 14.5 8 16 9 17C8.5 17.5 7 18 5 18C4.5 18 4 18.5 4 19C4 19.5 4.5 20.5 6 21C8 21.5 10 21 11.5 20.5C12 22 13.5 24 16 24C18.5 24 20 22 20.5 20.5C22 21 24 21.5 26 21C27.5 20.5 28 19.5 28 19C28 18.5 27.5 18 27 18C25 18 23.5 17.5 23 17C24 16 25 14.5 25 12C25 8 21.5 4 16 4Z" />
  </svg>
`,F=()=>`
  <svg viewBox="0 0 32 32">
    <path d="M6 4H10L12.5 10L9.5 12.5C11 16 15 20 18.5 21.5L21 18.5L27 21V25C27 26.5 25.5 28 24 28C13 28 4 19 4 8C4 6.5 5.5 5 6 4Z" />
  </svg>
`;function H(e="/"){const t=e==="/over-mij"?"active":"",s=e==="/projecten"||e.startsWith("/projecten/")?"active":"";return`
    <header class="site-header">
      <div class="header-left-group">
        <div class="header-left">
          <a href="/" class="logo-link" data-link>Marc Verhoeven</a>
        </div>
        
        <nav class="header-nav">
          <a href="/over-mij" class="nav-item ${t}" data-link>over mij</a>
          <a href="/projecten" class="nav-item ${s}" data-link>projecten</a>
        </nav>
      </div>
      
      <div class="header-socials">
        <button id="cursor-studio-trigger" class="nav-item cursor-studio-nav-btn" type="button" title="Teken je eigen cursor">cursor</button>
        <a href="${c.author.socials.instagram}" target="_blank" rel="noopener" class="social-icon-btn" title="Instagram">
          ${M()}
        </a>
        <a href="${c.author.socials.x}" target="_blank" rel="noopener" class="social-icon-btn" title="X">
          ${D()}
        </a>
        <a href="${c.author.socials.email}" class="social-icon-btn" title="Email Marc">
          ${P()}
        </a>
      </div>
    </header>
  `}function N(){return`
    <footer class="site-footer">
      <div class="footer-volg-wrapper">
        <button id="volgMijBtn" class="footer-badge volg-mij-toggle" aria-expanded="false">
          volg mij <span class="toggle-arrow">▼</span>
        </button>
        
        <div id="volgMijMenu" class="volg-mij-dropdown hidden">
          <a href="${c.author.socials.instagram}" target="_blank" rel="noopener" class="volg-menu-item">
            ${M()}
            <span>Instagram</span>
          </a>
          <a href="${c.author.socials.snapchat}" target="_blank" rel="noopener" class="volg-menu-item">
            ${S()}
            <span>Snapchat</span>
          </a>
          <a href="${c.author.socials.phone}" class="volg-menu-item">
            ${F()}
            <span>${c.author.socials.phoneDisplay}</span>
          </a>
        </div>
      </div>

      ${j(120,20,"footer-scribble")}

      <div class="footer-copy">
        &copy; ${new Date().getFullYear()} Marc Verhoeven — Portfolio
      </div>
    </footer>
  `}function z(){const e=document.getElementById("volgMijBtn"),t=document.getElementById("volgMijMenu");e&&t&&(e.addEventListener("click",s=>{s.stopPropagation(),!t.classList.contains("hidden")?(t.classList.add("hidden"),e.setAttribute("aria-expanded","false")):(t.classList.remove("hidden"),e.setAttribute("aria-expanded","true"))}),document.addEventListener("click",s=>{!e.contains(s.target)&&!t.contains(s.target)&&(t.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}))}function W(){return`
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
          <p>${c.home.text1}</p>
        </div>

        <!-- LAAG 3: Star Left Edge -->
        ${w(44,"star-home-left")}
        <style>
          .star-home-left { position: absolute; top: 36%; left: -0%; }
        </style>

        <!-- LAAG 3: Scribble Bottom-Left -->
        ${j(110,50,"scribble-home-bottom-left")}
        <style>
          .scribble-home-bottom-left { position: absolute; bottom: 4%; left: 4%; transform: rotate(-5deg); }
        </style>

        <!-- LAAG 2: Tekst 1 Center-Left -->
          <div class="text-block-handwritten" style="position: absolute; top: 81%; left: 26%; max-width: 280px;">
            <p>${c.home.text2}</p>
          </div>
        </div>

        <!-- LAAG 3: Dot Cluster Center -->
        ${L("dot-grid-home-center")}
        <style>
          .dot-grid-home-center { position: absolute; top: 60%; left: 46%; opacity: 0.85; }
        </style>

        <!-- LAAG 3: Star Top Center -->
        ${w(46,"star-home-top")}
        <style>
          .star-home-top { position: absolute; top: 18%; left: 54%; transform: rotate(10deg); }
        </style>

        <!-- LAAG 3: Spark Ticks Center Right -->
        ${T("spark-home-right")}
        <style>
          .spark-home-right { position: absolute; top: 38%; left: 62%; }
        </style>

        <!-- LAAG 3: Scribble Top Right -->
        ${j(110,50,"scribble-home-top-right")}
        <style>
          .scribble-home-top-right { position: absolute; top: 22%; right: 10%; transform: rotate(15deg); }
        </style>

        <!-- LAAG 3: Star Bottom Center (Easter Egg Trigger - Foreground) -->
        <div id="easter-egg-star-trigger" style="position: absolute; bottom: 6%; left: 78%; cursor: pointer; z-index: 50;">
          ${w(40,"star-home-bottom")}
        </div>

        <!-- LAAG 2: Tekst 1 Bottom-Right -->
        <div class="text-block-handwritten" style="position: absolute; top: 48%; right: 6%; max-width: 380px;">
          <p>${c.home.text3}</p>
        </div>
        

      </div>
    </div>
  `}function U(){return`
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
        
        <!-- LAAG 2: MARC'S CUTOUT PHOTO (RIGHT SIDE ANCHORED ~48% WIDTH) -->
        <div class="marc-photo-wrapper" style="position: absolute; right: 38%; top: -6%; width: 48vw; max-width: 650px; z-index: 15;">
          <div style="position: relative;">
            <img src="${c.author.photo}" alt="Marc Verhoeven" style="width: 240%; height: auto; display: block; filter: drop-shadow(8px -12px 0px rgba(251, 232, 12, 0.95)) drop-shadow(12px -16px 0px #181819);" />
          </div>
        </div>

        <!-- LAAG 3: Dot Cluster Top-Left -->
        ${L("dot-grid-about-top-left")}
        <style>
          .dot-grid-about-top-left { position: absolute; top: 6%; left: 0%; opacity: 0.85; }
        </style>

        <!-- LAAG 2: Tekst 1 Top-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 4%; left: 6%; max-width: 360px;">
          <p>${c.about.text1}</p>
        </div>

        <!-- LAAG 2: Tekst 4 Top-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 85%; left: 36%; max-width: 240px;">
          <p>${c.about.text4}</p>
        </div>

        <!-- LAAG 3: Star Top-Center -->
        ${w(46,"star-about-top")}
        <style>
          .star-about-top { position: absolute; top: 16%; left: 52%; transform: rotate(10deg); }
        </style>

        <!-- LAAG 3: Arrow Top-Center Pointing Down-Right to Marc -->
        ${A("down-right",65,45,"arrow-about-top")}
        <style>
          .arrow-about-top { position: absolute; top: 24%; left: 46%; }
        </style>

        <!-- LAAG 2: Tekst 2 Center-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 40%; left: 15%; max-width: 320px;">
          <p>${c.about.text2}</p>
        </div>

        <!-- LAAG 3: Scribble Below Quote Circle -->
        ${j(110,50,"scribble-about-left")}
        <style>
          .scribble-about-left { position: absolute; top: 60%; left: 3%; transform: rotate(0deg); }
        </style>

        <!-- LAAG 3: Horizontal Stroke Below Tekst 2 -->
        <div class="horizontal-stroke-about" style="position: absolute; top: 69%; left: 15%; width: 280px; height: 3px; background-color: var(--black); transform: rotate(-1deg); z-index: 5;"></div>

        <!-- LAAG 3: Arrow Below Horizontal Line Pointing Up-Right to Marc -->
        ${A("up-right",65,45,"arrow-about-bottom")}
        <style>
          .arrow-about-bottom { position: absolute; top: 70%; left: 38%; }
        </style>

        <!-- LAAG 3: Star Bottom-Left -->
        ${w(40,"star-about-bottom")}
        <style>
          .star-about-bottom { position: absolute; bottom: -10%; left: 30%; }
        </style>

        <!-- LAAG 2: Tekst 3 Bottom-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 96%; left: 0%; max-width: 350px;">
          <p>${c.about.text3}</p>
        </div>

        <!-- LAAG 3: Dot Cluster Top-Right -->
        ${L("dot-grid-about-right")}
        <style>
          .dot-grid-about-right { position: absolute; top: 10%; right: 4%; opacity: 0.85; }
        </style>

        <!-- LAAG 3: Crown Icon Middle-Right -->
        ${O("crown-about")}
        <style>
          .crown-about { position: absolute; top: 44%; right: 2%; transform: rotate(12deg); }
        </style>

        <!-- LAAG 3: Spark Ticks Bottom-Right -->
        ${T("spark-about-bottom")}
        <style>
          .spark-about-bottom { position: absolute; top: 62%; right: 6%; }
        </style>
        

      </div>
    </div>
  `}function Y(){const e=c.projects[0],t=c.projects[1]||c.projects[0];return`
    <div class="sketchbook-view projects-view">
      <!-- LAAG 1: GIANT BACKGROUND TYPOGRAPHY (100% SCREEN WIDTH) -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-projects">
          <span>PRO</span>
          <span>JECTEN</span>
        </div>
      </div>

      <!-- LAAG 2 & 3: COMPOSITION (EXACT MATCH WITH WIREFRAME PAGE 2) -->
      <div class="projects-composition-grid">
        
        <!-- LAAG 2: Tekst Top-Left -->
        <div class="text-block-handwritten" style="position: absolute; top: 14%; left: 5%; max-width: 380px;">
          <p>${c.projectsIntro}</p>
        </div>

        <!-- LAAG 3: Star Top Center above 'O' -->
        ${w(46,"star-projects-top")}
        <style>
          .star-projects-top { position: absolute; top: 10%; left: 50%; }
        </style>

        <!-- LAAG 2: Foto 1 (Project 1 Top-Right Oval Frame) -->
        <a href="/projecten/${e.slug}" class="project-card-asymmetric" data-link style="top: 12%; right: 4%; width: 44%; max-width: 520px;">
          <div class="project-card-inner">
            <div class="project-thumb-frame">
              <img src="${e.coverImage}" alt="${e.title}" />
            </div>
          </div>
        </a>

        <!-- LAAG 3: Dot Cluster Top-Right next to Foto 1 -->
        ${L("dot-grid-projects-top-right")}
        <style>
          .dot-grid-projects-top-right { position: absolute; top: 8%; right: 2%; opacity: 0.85; }
        </style>

        <!-- LAAG 2: "Klik voor meer" Center Prompt -->
        <div class="click-prompt" style="top: 110%; left: 14%;">
          <span>Klik op foto voor meer</span>
        </div>

        <!-- LAAG 2: "Klik voor meer" Center Prompt -->
        <div class="click-prompt" style="top: 69%; left: 65%;">
          <span>Klik op foto voor meer</span>
        </div>

        <!-- LAAG 3: Spark Ticks Left of Foto 2 -->
        ${T("spark-projects-foto2")}
        <style>
          .spark-projects-foto2 { position: absolute; top: 48%; left: 8%; }
        </style>

        <!-- LAAG 2: Foto 2 (Project 2 Bottom-Left Oval Frame) -->
        <a href="/projecten/${t.slug}" class="project-card-asymmetric" data-link style="top: 52%; left: 10%; width: 44%; max-width: 520px;">
          <div class="project-card-inner">
            <div class="project-thumb-frame">
              <img src="${t.coverImage}" alt="${t.title}" />
            </div>
            
          </div>
        </a>

        <!-- LAAG 3: Spark Ticks Below Foto 2 -->
        ${T("spark-projects-bottom")}
        <style>
          .spark-projects-bottom { position: absolute; top: 82%; left: 46%; }
        </style>

        <!-- LAAG 3: Dot Cluster Bottom Center -->
        ${L("dot-grid-projects-bottom-center")}
        <style>
          .dot-grid-projects-bottom-center { position: absolute; bottom: 8%; left: 63%; opacity: 0.85; }
        </style>

        <!-- LAAG 3: Scribble Bottom-Right -->
        ${j(120,60,"scribble-projects-bottom-right")}
        <style>
          .scribble-projects-bottom-right { position: absolute; bottom: -10%; right: 14%; transform: rotate(-12deg); }
        </style>

        <!-- LAAG 3: Star Bottom-Right -->
        ${w(42,"star-projects-bottom-right")}
        <style>
          .star-projects-bottom-right { position: absolute; bottom: 8%; right: 4%; }
        </style>

        
      </div>
    </div>
  `}function K(e="project-1"){const t=c.projects.find(p=>p.slug===e)||c.projects[0];return t.slug==="project-2"||t.id==="project-2"?`
      <div class="sketchbook-view project-detail-view">
        <!-- GIANT BACKGROUND TYPOGRAPHY -->
        <div class="bg-typography-container">
          <div class="bg-text bg-text-projects">
          </div>
        </div>

        <div class="project-detail-layout">
          <!-- PROJECT HEADER -->
          <div class="project-header-block">
            <h1 class="project-title">${t.title}</h1>
            <div class="project-subtitle">${t.subtitle}</div>
            <p style="margin-top: 1rem; max-width: 650px; font-size: 1.25rem;">
              ${t.description}
            </p>
          </div>

          <!-- STRUCTURED ALIGNED GALLERY FOR PROJECT 2 -->
          <div class="project-gallery-asymmetric">
            
            <!-- RIJ 1: Foto 1 (Concept) + Tekstblok 1 -->
            <div class="project2-card" style="grid-column: 1 / span 6;">
              <img src="${t.images[0]}" alt="${t.title} - Foto 1" />
              <div style="position: absolute; top: -15px; right: -15px;">
                ${w(42)}
              </div>
            </div>

            <div class="project2-card text-card-yellow" style="grid-column: 7 / span 6; background-color: var(--yellow);">
              <div class="text-block-handwritten">
                <p><strong>Eindconcept</strong></p>
                <p>${t.text1}</p>
              </div>
              ${A("down-left",45,35)}
            </div>

            <!-- RIJ 2: Foto 2 + Foto 3 -->
            <div class="project2-card" style="grid-column: 1 / span 6;">
              <img src="${t.images[1]}" alt="${t.title} - Foto 2" />
            </div>

            <div class="project2-card" style="grid-column: 7 / span 6;">
              <img src="${t.images[2]}" alt="${t.title} - Foto 3" />
            </div>

            <!-- RIJ 3: 3-LUIK (Foto 4, Foto 5, Foto 7) -->
            <div class="project2-card" style="grid-column: 1 / span 4;">
              <img src="${t.images[3]}" alt="${t.title} - Foto 4" />
            </div>

            <div class="project2-card" style="grid-column: 5 / span 4;">
              <img src="${t.images[4]}" alt="${t.title} - Foto 5" />
            </div>

            <div class="project2-card" style="grid-column: 9 / span 4;">
              <img src="${t.images[6]}" alt="${t.title} - Foto 7" />
            </div>

            <!-- TEKSTBALK: Text 2 -->
            <div style="grid-column: 1 / span 12; margin: 0.5rem 0;">
              <div class="text-block-handwritten" style="max-width: 1450px; background: var(--white); padding: 1.2rem 1.5rem; border: 2.5px solid var(--black); border-radius: 10px; box-shadow: 4px 4px 0px var(--yellow);">
                <p><strong>schetsen</strong></p>
                <p>${t.text2}</p>
              </div>
            </div>

            <!-- RIJ 4: Foto 6 (Brede Mockup Presentatie) -->
            <div class="project2-card project2-card-wide" style="grid-column: 1 / span 12;">
              <img src="${t.images[5]}" alt="${t.title} - Foto 6" />
            </div>

          </div>

          <!-- Back to projects link -->
          <div style="margin-top: 4rem; text-align: center;">
            <a href="/projecten" class="nav-item active" data-link style="display: inline-flex; align-items: center; gap: 0.5rem;">
              ${A("left",35,25)}
              <span>Terug naar alle projecten</span>
            </a>
          </div>

        </div>
      </div>
    `:`
    <div class="sketchbook-view project-detail-view">
      <!-- GIANT BACKGROUND TYPOGRAPHY -->
      <div class="bg-typography-container">
        <div class="bg-text bg-text-projects">
        </div>
      </div>

      <div class="project-detail-layout">
        <!-- PROJECT HEADER -->
        <div class="project-header-block">
          <h1 class="project-title">${t.title}</h1>
          <div class="project-subtitle">${t.subtitle}</div>
          <p style="margin-top: 1rem; max-width: 650px; font-size: 1.25rem;">
            ${t.description}
          </p>
        </div>

        <!-- ASYMMETRIC IMAGE COLLAGE SHOWCASING ALL 6 PHOTOS -->
        <div class="project-gallery-asymmetric">
          
          <!-- Foto 1: Main 3D render cans -->
          <div class="gallery-item gallery-item-1">
            <img src="${t.images[0]}" alt="${t.title} - Render 3D Cans" />
            <div style="position: absolute; top: -20px; right: -20px;">
              ${w(48)}
            </div>
          </div>

          <!-- Text block 1 next to Foto 1 -->
          <div class="gallery-item gallery-item-2" style="background-color: var(--yellow); border-radius: 12px;">
            <div class="text-block-handwritten">
              <p><strong>Eindconcept</strong></p>
              <p>${t.text1}</p>
            </div>
            ${A("down-left",50,40,"arrow-item-2")}
            <style>
              .arrow-item-2 { margin-top: 1rem; }
            </style>
          </div>

          <!-- Foto 2: Technical specifications -->
          <div class="gallery-item gallery-item-3">
            <img src="${t.images[1]}" alt="${t.title} - 360 Full-Wrap Design" />
          </div>

          <!-- Foto 3: Typographic Poster -->
          <div class="gallery-item gallery-item-4">
            <img src="${t.images[2]}" alt="${t.title} - Typographic Poster" />
          </div>

          <!-- Text block 2 -->
          <div style="grid-column: 1 / span 12; margin: 0.5rem 0;">
            <div class="text-block-handwritten" style="max-width: 1450px; background: var(--white); padding: 1.2rem 1.5rem; border: 2.5px solid var(--black); border-radius: 10px; box-shadow: 4px 4px 0px var(--yellow);">
              <p><strong>Schetsen</strong></p>
              <p>${t.text2}</p>
            </div>
          </div>

          <!-- Foto 4 -->
          ${t.images[3]?`
          <div class="gallery-item gallery-item-3" style="grid-column: 1 / span 6;">
            <img src="${t.images[3]}" alt="${t.title} - Foto 4" />
          </div>`:""}

          <!-- Foto 5 -->
          ${t.images[4]?`
          <div class="gallery-item gallery-item-4" style="grid-column: 7 / span 6;">
            <img src="${t.images[4]}" alt="${t.title} - Foto 5" />
          </div>`:""}

          <!-- Foto 6 -->
          ${t.images[5]?`
          <div class="gallery-item gallery-item-3" style="grid-column: 1 / span 6;">
            <img src="${t.images[5]}" alt="${t.title} - Foto 6" />
          </div>`:""}

          <!-- Foto 7 -->
          ${t.images[6]?`
          <div class="gallery-item gallery-item-4" style="grid-column: 7 / span 6;">
            <img src="${t.images[6]}" alt="${t.title} - Foto 7" />
          </div>`:""}

        </div>

        <!-- Back to projects link -->
        <div style="margin-top: 4rem; text-align: center;">
          <a href="/projecten" class="nav-item active" data-link style="display: inline-flex; align-items: center; gap: 0.5rem;">
            ${A("left",35,25)}
            <span>Terug naar alle projecten</span>
          </a>
        </div>

      </div>
    </div>
  `}function V(){let e=document.getElementById("lightbox-modal");if(!e){e=document.createElement("div"),e.id="lightbox-modal",e.className="lightbox-modal hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="lightbox-overlay" id="lightbox-overlay"></div>
      <div class="lightbox-content-container">
        <div class="lightbox-image-wrapper">
          <img id="lightbox-img" src="" alt="Project foto in het groot" />
        </div>
        <div class="lightbox-controls">
          <button id="lightbox-close-btn" class="lightbox-close-btn" type="button">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Ga terug</span>
          </button>
        </div>
      </div>
    `,document.body.appendChild(e);const s=()=>{e.classList.add("hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""};document.getElementById("lightbox-close-btn").addEventListener("click",s),document.getElementById("lightbox-overlay").addEventListener("click",s),document.addEventListener("keydown",p=>{p.key==="Escape"&&!e.classList.contains("hidden")&&s()})}document.querySelectorAll(".project-detail-view .gallery-item img, .project-detail-view .project2-card img").forEach(s=>{s.style.cursor="zoom-in",s.addEventListener("click",p=>{p.preventDefault();const r=document.getElementById("lightbox-img");r.src=s.src,r.alt=s.alt||"Project foto",e.classList.remove("hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"})})}function _(){let e=document.getElementById("cursor-studio-modal");if(!e){let f=function(){const o=document.createElement("canvas");o.width=48,o.height=48;const i=o.getContext("2d");return i.imageSmoothingEnabled=!1,i.drawImage(a,0,0,48,48),o.toDataURL("image/png")},y=function(){m.clearRect(0,0,d,d);const o=u.children;for(let i=0;i<v.length;i++){const k=v[i],x=o[i];if(k){m.fillStyle=k;const I=i%d,C=Math.floor(i/d);m.fillRect(I,C,1,1),x.style.backgroundColor=k}else x.style.backgroundColor="transparent"}h.src=f()},l=function(o){o<0||o>=v.length||(g==="pen"?v[o]=n:g==="eraser"&&(v[o]=null),y())};var s=f,p=y,r=l;e=document.createElement("div"),e.id="cursor-studio-modal",e.className="cursor-modal hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="cursor-overlay" id="cursor-overlay"></div>
      <div class="cursor-dialog">
        <div class="cursor-dialog-header">
          <h2>✏️ Teken je eigen cursor</h2>
          <button class="cursor-close-x" id="cursor-close-x" type="button" title="Sluiten">&times;</button>
        </div>
        
        <p class="cursor-intro-text">
          Teken je eigen icoontje of figuurtje in het stramien. Klik onderaan op <strong>'Toepassen'</strong> om je tekening als actieve muiscursor te gebruiken!
        </p>

        <div class="cursor-studio-body">
          <!-- CANVAS GRID CONTAINER -->
          <div class="cursor-canvas-wrap">
            <canvas id="cursor-canvas" width="24" height="24"></canvas>
            <div class="canvas-grid-overlay" id="canvas-grid-overlay"></div>
          </div>

          <!-- TOOLS & PALETTE SIDEBAR -->
          <div class="cursor-tools-panel">
            <div class="tool-section">
              <span class="tool-label">Gereedschap:</span>
              <div class="tool-buttons">
                <button type="button" id="tool-pen" class="tool-btn active" title="Pen">✏️ Pen</button>
                <button type="button" id="tool-eraser" class="tool-btn" title="Gum">🧹 Gum</button>
                <button type="button" id="tool-clear" class="tool-btn danger" title="Wissen">🗑️ Wissen</button>
              </div>
            </div>

            <div class="tool-section">
              <span class="tool-label">Kleuren:</span>
              <div class="color-palette">
                <button type="button" class="color-swatch active" data-color="#181819" style="background-color: #181819;" title="Zwart"></button>
                <button type="button" class="color-swatch" data-color="#fbe80c" style="background-color: #fbe80c;" title="Geel"></button>
                <button type="button" class="color-swatch" data-color="#ff4757" style="background-color: #ff4757;" title="Rood"></button>
                <button type="button" class="color-swatch" data-color="#2e86de" style="background-color: #2e86de;" title="Blauw"></button>
                <button type="button" class="color-swatch" data-color="#2ed573" style="background-color: #2ed573;" title="Groen"></button>
                <button type="button" class="color-swatch" data-color="#ffffff" style="background-color: #ffffff; border: 1px solid #ccc;" title="Wit"></button>
              </div>
            </div>

            <div class="tool-section preview-section">
              <span class="tool-label">Voorbeeld op schaal:</span>
              <div class="cursor-preview-box">
                <img id="cursor-preview-img" src="" alt="Cursor Preview" />
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM ACTION BUTTONS -->
        <div class="cursor-dialog-footer">
          <button id="cursor-reset-btn" class="cursor-btn-secondary" type="button">Standaard Cursor</button>
          <button id="cursor-apply-btn" class="cursor-btn-primary" type="button">✨ Toepassen</button>
        </div>
      </div>
    `,document.body.appendChild(e);const a=document.getElementById("cursor-canvas"),m=a.getContext("2d"),h=document.getElementById("cursor-preview-img"),u=document.getElementById("canvas-grid-overlay"),d=24;let n="#181819",g="pen",b=!1,v=Array(d*d).fill(null);for(let o=2;o<=16;o++)for(let i=2;i<=o;i++)i===2||i===o||o===16?v[o*d+i]="#181819":v[o*d+i]="#fbe80c";u.style.gridTemplateColumns=`repeat(${d}, 1fr)`,u.innerHTML="";for(let o=0;o<d*d;o++){const i=document.createElement("div");i.className="grid-cell",i.dataset.index=o,u.appendChild(i)}const E=o=>{const i=u.getBoundingClientRect(),k=o.clientX-i.left,x=o.clientY-i.top;if(k>=0&&k<i.width&&x>=0&&x<i.height){const I=Math.floor(k/i.width*d),R=Math.floor(x/i.height*d)*d+I;l(R)}};u.addEventListener("mousedown",o=>{b=!0,E(o)}),window.addEventListener("mousemove",o=>{b&&E(o)}),window.addEventListener("mouseup",()=>{b=!1}),u.addEventListener("touchstart",o=>{b=!0,o.touches.length>0&&E(o.touches[0])}),u.addEventListener("touchmove",o=>{b&&o.touches.length>0&&E(o.touches[0])}),u.addEventListener("touchend",()=>{b=!1}),document.getElementById("tool-pen").addEventListener("click",()=>{g="pen",document.getElementById("tool-pen").classList.add("active"),document.getElementById("tool-eraser").classList.remove("active")}),document.getElementById("tool-eraser").addEventListener("click",()=>{g="eraser",document.getElementById("tool-eraser").classList.add("active"),document.getElementById("tool-pen").classList.remove("active")}),document.getElementById("tool-clear").addEventListener("click",()=>{v.fill(null),y()}),document.querySelectorAll(".color-swatch").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".color-swatch").forEach(i=>i.classList.remove("active")),o.classList.add("active"),n=o.dataset.color,g="pen",document.getElementById("tool-pen").classList.add("active"),document.getElementById("tool-eraser").classList.remove("active")})}),y();const G=()=>{const o=f();let i=document.getElementById("dynamic-custom-cursor-style");i||(i=document.createElement("style"),i.id="dynamic-custom-cursor-style",document.head.appendChild(i)),i.innerHTML=`
        *, html, body, a, button, input, select, textarea, .nav-item, .project-card-asymmetric {
          cursor: url('${o}') 4 4, auto !important;
        }
      `,$()},B=()=>{const o=document.getElementById("dynamic-custom-cursor-style");o&&o.remove(),$()},$=()=>{e.classList.add("hidden"),e.setAttribute("aria-hidden","true")};document.getElementById("cursor-apply-btn").addEventListener("click",G),document.getElementById("cursor-reset-btn").addEventListener("click",B),document.getElementById("cursor-close-x").addEventListener("click",$),document.getElementById("cursor-overlay").addEventListener("click",$)}const t=document.getElementById("cursor-studio-trigger");t&&t.addEventListener("click",()=>{e.classList.remove("hidden"),e.setAttribute("aria-hidden","false")})}function J(){let e=document.getElementById("easter-egg-modal"),t=null,s=null,p=null;e||(e=document.createElement("div"),e.id="easter-egg-modal",e.className="easter-egg-modal hidden",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="easter-egg-overlay"></div>
      <div class="easter-egg-dialog minimal-dialog">
        <!-- ONLY THE PROGRESS BAR -->
        <div id="easter-egg-loading-phase">
          <div class="easter-egg-progress-wrap">
            <div class="easter-egg-progress-bar" id="easter-egg-bar"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e));const r=67,a=10;function m(){const n=document.createElement("canvas");n.className="easter-egg-confetti-canvas",n.width=window.innerWidth,n.height=window.innerHeight,e.appendChild(n);const g=n.getContext("2d"),b=["#fbe80c","#181819","#ff4757","#2e86de","#2ed573","#ffa502","#ff6b81"],v=Array.from({length:140},()=>({x:Math.random()*n.width,y:Math.random()*n.height-n.height,r:Math.random()*8+4,d:Math.random()*90,color:b[Math.floor(Math.random()*b.length)],tilt:Math.random()*10-10,tiltAngleIncremental:Math.random()*.07+.05,tiltAngle:0}));let f;function y(){g.clearRect(0,0,n.width,n.height),v.forEach(l=>{l.tiltAngle+=l.tiltAngleIncremental,l.y+=(Math.cos(l.d)+3+l.r/2)*1.3,l.tilt=Math.sin(l.tiltAngle)*15,g.beginPath(),g.lineWidth=l.r,g.strokeStyle=l.color,g.moveTo(l.x+l.tilt+l.r/2,l.y),g.lineTo(l.x+l.tilt,l.y+l.tilt+l.r/2),g.stroke(),l.y>n.height&&(l.x=Math.random()*n.width,l.y=-20)}),f=requestAnimationFrame(y)}return y(),()=>{cancelAnimationFrame(f),n.remove()}}const h=()=>{s&&clearInterval(s),p&&clearTimeout(p),t&&(t(),t=null),e.classList.add("hidden"),e.setAttribute("aria-hidden","true")},u=()=>{const n=document.getElementById("easter-egg-loading-phase"),g=document.getElementById("easter-egg-bar");h(),n.classList.remove("hidden"),g.style.width="0%",e.classList.remove("hidden"),e.setAttribute("aria-hidden","false");const b=Date.now();s=setInterval(()=>{const v=Date.now()-b,f=Math.min(v/(r*1e3),1),y=Math.floor(f*100);g.style.width=`${y}%`,f>=1&&(clearInterval(s),n.classList.add("hidden"),t=m(),p=setTimeout(()=>{h()},a*1e3))},100)};document.querySelectorAll("#easter-egg-star-trigger, .star-home-bottom").forEach(n=>{n.style.cursor="pointer",n.style.zIndex="50",n.title="✨",n.addEventListener("click",u)})}function q(){const e=document.getElementById("app"),t=[{path:"/",view:()=>W()},{path:"/over-mij",view:()=>U()},{path:"/projecten",view:()=>Y()}];function s(a){window.scrollTo({top:0,behavior:"smooth"});let m="",h=a;if(a.startsWith("/projecten/")){const d=a.replace("/projecten/","");m=K(d)}else{const d=t.find(n=>n.path===a)||t[0];h=d.path,m=d.view()}const u=`
      ${H(h)}
      <main class="site-main">
        ${m}
      </main>
      ${N()}
    `;e.innerHTML=u,r(),z(),V(),_(),J()}function p(a){history.pushState(null,null,a),s(window.location.pathname)}function r(){document.querySelectorAll("a[data-link]").forEach(a=>{a.addEventListener("click",m=>{m.preventDefault();const h=a.getAttribute("href");h&&h!==window.location.pathname&&p(h)})})}window.addEventListener("popstate",()=>{s(window.location.pathname)}),s(window.location.pathname)}document.addEventListener("DOMContentLoaded",()=>{q()});
