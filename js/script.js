const mario = document.querySelector('.mario'); // Seleciona o elemento do Mario
const pipe = document.querySelector('.pipe'); // Seleciona o elemento do cano

// Função para o pulo do Mario
const jump = () => {
    // Adiciona a classe 'jump' para iniciar a animação de pulo
    mario.classList.add('jump');

    // Remove a classe 'jump' após 500ms (tempo da animação)
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Loop principal do jogo para verificar colisões
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição do cano em relação à esquerda
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição vertical do Mario

    // Verifica se houve colisão
    if (pipePosition > 0 && pipePosition <= 120 && marioPosition < 80) {
        // Para a animação do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Para a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Troca a imagem do Mario para "game over"
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Para o loop do jogo
        clearInterval(loop);
    }
}, 10);

// Adiciona o evento de teclado para o pulo
document.addEventListener('keydown', (event) => {
    // Verifica se a tecla pressionada é 'Espaço' ou 'Seta para cima'
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump(); // Chama a função de pulo
    }
});