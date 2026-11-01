export function initEasterEgg() {
  let modal = document.getElementById('easter-egg-modal');
  let stopConfetti = null;
  let timerInterval = null;
  let confettiTimeout = null;

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'easter-egg-modal';
    modal.className = 'easter-egg-modal hidden';
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
      <div class="easter-egg-overlay"></div>
      <div class="easter-egg-dialog minimal-dialog">
        <!-- ONLY THE PROGRESS BAR -->
        <div id="easter-egg-loading-phase">
          <div class="easter-egg-progress-wrap">
            <div class="easter-egg-progress-bar" id="easter-egg-bar"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  const TOTAL_DURATION_SEC = 67;
  const CONFETTI_DURATION_SEC = 10;

  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.className = 'easter-egg-confetti-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    modal.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const colors = ['#fbe80c', '#181819', '#ff4757', '#2e86de', '#2ed573', '#ffa502', '#ff6b81'];
    
    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * 90,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    }));

    let animationFrame;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) * 1.3;
        p.tilt = Math.sin(p.tiltAngle) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        if (p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = -20;
        }
      });

      animationFrame = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    };
  }

  const closeEasterEgg = () => {
    if (timerInterval) clearInterval(timerInterval);
    if (confettiTimeout) clearTimeout(confettiTimeout);
    if (stopConfetti) {
      stopConfetti();
      stopConfetti = null;
    }
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  };

  const startEasterEgg = () => {
    const loadingPhase = document.getElementById('easter-egg-loading-phase');
    const progressBar = document.getElementById('easter-egg-bar');

    closeEasterEgg();

    // Reset state: Show ONLY the bar
    loadingPhase.classList.remove('hidden');
    progressBar.style.width = '0%';

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');

    const startTime = Date.now();

    timerInterval = setInterval(() => {
      const elapsedMs = Date.now() - startTime;
      const progress = Math.min(elapsedMs / (TOTAL_DURATION_SEC * 1000), 1);
      const percent = Math.floor(progress * 100);

      progressBar.style.width = `${percent}%`;

      if (progress >= 1) {
        clearInterval(timerInterval);
        loadingPhase.classList.add('hidden'); // Hide bar when done

        // Launch confetti for 10 seconds
        stopConfetti = launchConfetti();
        confettiTimeout = setTimeout(() => {
          closeEasterEgg(); // Auto close after 10 sec!
        }, CONFETTI_DURATION_SEC * 1000);
      }
    }, 100);
  };

  // Attach trigger to star doodle near V on HomeView
  const triggers = document.querySelectorAll('#easter-egg-star-trigger, .star-home-bottom');
  triggers.forEach(trigger => {
    trigger.style.cursor = 'pointer';
    trigger.style.zIndex = '50';
    trigger.title = '✨';
    trigger.addEventListener('click', startEasterEgg);
  });
}
