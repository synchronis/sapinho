
//definir botoes
const btnGreen = document.querySelector('.green');
const btnRed = document.querySelector('.red');
const btnYellow = document.querySelector('.yellow');
const btnBlue = document.querySelector('.blue');
const fundo = document.querySelector('body');

const botoes = [btnGreen, btnRed, btnYellow, btnBlue];

let gameSequence = [];
let playerGameSequence = [];
let rodada = 0;

//botoes.addEventListener
btnGreen.addEventListener('click', function() { //      0
    validarJogada (0);
});
btnRed.addEventListener('click', function() { //        1
    validarJogada (1);
});
btnYellow.addEventListener('click', function() { //     2
    validarJogada (2);
});
btnBlue.addEventListener('click', function() { //        3
    validarJogada (3);
});

function validarJogada (corBotao) {
    playerGameSequence.push(corBotao);

    let indice = playerGameSequence.length - 1;

    if (playerGameSequence[indice] !== gameSequence[indice]) {
        fundo.style.backgroundColor = 'red';
        gameSequence = [];
        rodada = 0;
        playerGameSequence = [];
        alert('perdeu lixo')
        return;
    }

    if (playerGameSequence.length === gameSequence.length) {
        playerGameSequence = [];
        fundo.style.backgroundColor = 'green';
        document.querySelector('.placar').innerHTML = rodada;
        setTimeout(() => {
            fundo.style.backgroundColor = 'rgb(7, 7, 41)';
        }, 1000);
        setTimeout(() => {
            game();
        }, 3000);
    }

}

function replay (gameSequence) {
    for (let i = 0; i < gameSequence.length; i++) {
        let botaoCor = gameSequence[i];
        setTimeout(() => {
            botoes[botaoCor].classList.add('animate-ativado');
        }, i * 1000);
        setTimeout(() => {
            botoes[botaoCor].classList.remove('animate-ativado');
        }, i * 1000 + 500);
    } 
}

//escopo jogo
function game () {
    rodada++;

    gameSequence.push(Math.floor(Math.random() * 4));

    playerGameSequence = [];

    replay(gameSequence);
}


/*main*/

game();
