const characterImg = document.getElementById('character-rotate');
const characterViewer = document.querySelector('.character-viewer');

if (characterImg && characterViewer) {
    const totalFrames = 7;
    let currentFrame = 1;
    let isDragging = false;
    let lastX = 0;

    function updateImage(frameNumber) {
        characterImg.src = `./images/character/${frameNumber}.webp`;
    }

    function handleStart(e) {
        isDragging = true;
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startX = x;
        lastX = x;
        characterViewer.style.cursor = 'grabbing';
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const deltaX = currentX - lastX;
        
        if (Math.abs(deltaX) >= 20) {
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

    characterViewer.style.cursor = 'grab';
}