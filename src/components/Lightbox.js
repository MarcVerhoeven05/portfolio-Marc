export function initLightbox() {
  let modal = document.getElementById('lightbox-modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.innerHTML = `
      <style>
        #lightbox-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.92);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          padding: 1.5rem;
          box-sizing: border-box;
        }
        #lightbox-modal.lb-open {
          opacity: 1;
          pointer-events: all;
        }
        #lightbox-img-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-height: calc(100vh - 120px);
          overflow: hidden;
        }
        #lightbox-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 0 60px rgba(0,0,0,0.6);
          transform: scale(0.93);
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: block;
        }
        #lightbox-modal.lb-open #lightbox-img {
          transform: scale(1);
        }
        #lightbox-close-btn {
          flex-shrink: 0;
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #fff;
          color: #111;
          border: 2.5px solid #111;
          border-radius: 50px;
          padding: 0.7rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 4px 4px 0 #F5E642;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          font-family: inherit;
        }
        #lightbox-close-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #F5E642;
          background: #F5E642;
        }
        #lightbox-close-btn svg {
          flex-shrink: 0;
        }
      </style>
      <div id="lightbox-img-wrap">
        <img id="lightbox-img" src="" alt="Foto groot" />
      </div>
      <button id="lightbox-close-btn" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Ga terug
      </button>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.classList.remove('lb-open');
      document.body.style.overflow = '';
    };

    document.getElementById('lightbox-close-btn').addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target === document.getElementById('lightbox-img-wrap')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('lb-open')) closeModal();
    });
  }

  function openLightbox(src, alt) {
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt || 'Foto';
    modal.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
  }

  // New detail gallery: .detail-photo-item[data-src]
  document.querySelectorAll('.detail-photo-item[data-src]').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.src, card.querySelector('img')?.alt || '');
    });
  });

  // Legacy selectors (project-1 / project-2 old layout, just in case)
  document.querySelectorAll('.project-detail-view .gallery-item img, .project-detail-view .project2-card img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}
