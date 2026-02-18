const characterViewer = document.querySelector('.character-viewer');
const characterVideo = document.getElementById('character-video');
const characterImg = document.getElementById('character-rotate');

if (characterViewer && characterVideo && characterImg) {
    const totalFrames = 8;
    let currentFrame = 1;
    let isDragging = false;
    let lastX = 0;
    let videoMode = true;
    let hasInteracted = false;

    characterImg.style.display = 'none';
    characterVideo.style.display = 'block';

    const isMobile = window.innerWidth <= 768;
    const imageFolder = isMobile ? './images/character/mobile' : './images/character';

    function updateImage(frameNumber) {
        characterImg.src = `${imageFolder}/sylvari-character-rotation-frame-${frameNumber}.webp`;
    }

    function switchToImageMode() {
        if (videoMode) {
            videoMode = false;
            characterVideo.style.display = 'none';
            characterImg.style.display = 'block';
            updateImage(currentFrame);
        }
    }

    function handleStart(e) {
        if (!hasInteracted) {
            hasInteracted = true;
            switchToImageMode();
        }

        isDragging = true;
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        lastX = x;
        characterViewer.style.cursor = 'grabbing';
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const deltaX = currentX - lastX;

        if (Math.abs(deltaX) >= 15) {
            if (deltaX > 0) {
                currentFrame++;
                if (currentFrame > totalFrames) currentFrame = 1;
            } else {
                currentFrame--;
                if (currentFrame < 1) currentFrame = totalFrames;
            }

            updateImage(currentFrame);
            lastX = currentX;
        }
    }

    function handleEnd() {
        isDragging = false;
        characterViewer.style.cursor = 'grab';
    }

    characterViewer.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    characterViewer.addEventListener('touchstart', handleStart, { passive: false });
    characterViewer.addEventListener('touchmove', handleMove, { passive: false });
    characterViewer.addEventListener('touchend', handleEnd);

    characterViewer.addEventListener('click', () => {
        if (!hasInteracted) {
            hasInteracted = true;
            switchToImageMode();
        }
    });

    characterViewer.style.cursor = 'grab';
}
