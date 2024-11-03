// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as imagens que você deseja mover
    const movableImages = document.querySelectorAll('.movable-image');

    // Função para atualizar a posição das imagens ao rolar
    function updateImagePositions() {
        const scrollPosition = window.scrollY;

        movableImages.forEach(image => {
            // Define a nova posição vertical com base na posição de rolagem
            const movementFactor = 0.5; // Ajuste este valor para controlar a velocidade do movimento
            const newY = scrollPosition * movementFactor;
            image.style.transform = `translateY(${newY}px)`;
        });
    }

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', updateImagePositions);
});
