export function initCursorStudio() {
  let modal = document.getElementById('cursor-studio-modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'cursor-studio-modal';
    modal.className = 'cursor-modal hidden';
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
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
    `;

    document.body.appendChild(modal);

    // Setup Canvas Logic
    const canvas = document.getElementById('cursor-canvas');
    const ctx = canvas.getContext('2d');
    const previewImg = document.getElementById('cursor-preview-img');
    const gridOverlay = document.getElementById('canvas-grid-overlay');

    const GRID_SIZE = 24;
    let currentColor = '#181819';
    let currentTool = 'pen';
    let isDrawing = false;
    let pixels = Array(GRID_SIZE * GRID_SIZE).fill(null);

    // Initial arrow cursor drawing
    for (let y = 2; y <= 16; y++) {
      for (let x = 2; x <= y; x++) {
        if (x === 2 || x === y || y === 16) {
          pixels[y * GRID_SIZE + x] = '#181819';
        } else {
          pixels[y * GRID_SIZE + x] = '#fbe80c';
        }
      }
    }

    // Create visual grid overlay pixels
    gridOverlay.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
    gridOverlay.innerHTML = '';
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.index = i;
      gridOverlay.appendChild(cell);
    }

    // Scaled Data URL generator (48x48px crisp cursor)
    function getScaledCursorDataUrl() {
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = 48; // 2x larger cursor!
      exportCanvas.height = 48;
      const eCtx = exportCanvas.getContext('2d');
      eCtx.imageSmoothingEnabled = false;
      eCtx.drawImage(canvas, 0, 0, 48, 48);
      return exportCanvas.toDataURL('image/png');
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, GRID_SIZE, GRID_SIZE);
      const cells = gridOverlay.children;

      for (let i = 0; i < pixels.length; i++) {
        const color = pixels[i];
        const cell = cells[i];
        if (color) {
          ctx.fillStyle = color;
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          ctx.fillRect(x, y, 1, 1);
          cell.style.backgroundColor = color;
        } else {
          cell.style.backgroundColor = 'transparent';
        }
      }

      previewImg.src = getScaledCursorDataUrl();
    }

    function paintPixelAtIndex(index) {
      if (index < 0 || index >= pixels.length) return;
      if (currentTool === 'pen') {
        pixels[index] = currentColor;
      } else if (currentTool === 'eraser') {
        pixels[index] = null;
      }
      renderCanvas();
    }

    // Grid interaction
    const handleGridPointer = (e) => {
      const rect = gridOverlay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x < rect.width && y >= 0 && y < rect.height) {
        const col = Math.floor((x / rect.width) * GRID_SIZE);
        const row = Math.floor((y / rect.height) * GRID_SIZE);
        const index = row * GRID_SIZE + col;
        paintPixelAtIndex(index);
      }
    };

    gridOverlay.addEventListener('mousedown', (e) => {
      isDrawing = true;
      handleGridPointer(e);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDrawing) handleGridPointer(e);
    });

    window.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    // Touch support for mobile/tablet
    gridOverlay.addEventListener('touchstart', (e) => {
      isDrawing = true;
      if (e.touches.length > 0) handleGridPointer(e.touches[0]);
    });
    gridOverlay.addEventListener('touchmove', (e) => {
      if (isDrawing && e.touches.length > 0) handleGridPointer(e.touches[0]);
    });
    gridOverlay.addEventListener('touchend', () => {
      isDrawing = false;
    });

    // Tool switching
    document.getElementById('tool-pen').addEventListener('click', () => {
      currentTool = 'pen';
      document.getElementById('tool-pen').classList.add('active');
      document.getElementById('tool-eraser').classList.remove('active');
    });

    document.getElementById('tool-eraser').addEventListener('click', () => {
      currentTool = 'eraser';
      document.getElementById('tool-eraser').classList.add('active');
      document.getElementById('tool-pen').classList.remove('active');
    });

    document.getElementById('tool-clear').addEventListener('click', () => {
      pixels.fill(null);
      renderCanvas();
    });

    // Color Swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        currentColor = swatch.dataset.color;
        currentTool = 'pen';
        document.getElementById('tool-pen').classList.add('active');
        document.getElementById('tool-eraser').classList.remove('active');
      });
    });

    // Initial render
    renderCanvas();

    // Apply Custom Cursor
    const applyCustomCursor = () => {
      const dataUrl = getScaledCursorDataUrl();

      let styleEl = document.getElementById('dynamic-custom-cursor-style');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-custom-cursor-style';
        document.head.appendChild(styleEl);
      }

      styleEl.innerHTML = `
        *, html, body, a, button, input, select, textarea, .nav-item, .project-card-asymmetric {
          cursor: url('${dataUrl}') 4 4, auto !important;
        }
      `;

      closeModal();
    };

    // Reset Cursor
    const resetCursor = () => {
      const styleEl = document.getElementById('dynamic-custom-cursor-style');
      if (styleEl) styleEl.remove();
      closeModal();
    };

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    };

    document.getElementById('cursor-apply-btn').addEventListener('click', applyCustomCursor);
    document.getElementById('cursor-reset-btn').addEventListener('click', resetCursor);
    document.getElementById('cursor-close-x').addEventListener('click', closeModal);
    document.getElementById('cursor-overlay').addEventListener('click', closeModal);
  }

  // Attach trigger to button in header
  const triggerBtn = document.getElementById('cursor-studio-trigger');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    });
  }
}
