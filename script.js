document.addEventListener("DOMContentLoaded", function () {
    const movableImages = document.querySelectorAll('.movable-image');

    function updateImagePositions() {
        const scrollPosition = window.scrollY;

        movableImages.forEach(image => {
            const movementFactor = 0.5; 
            const newY = scrollPosition * movementFactor;
            image.style.transform = `translateY(${newY}px)`;
        });
    }

    window.addEventListener('scroll', updateImagePositions);
});
