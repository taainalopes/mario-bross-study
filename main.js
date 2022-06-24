const mario  = document.querySelector('.super-mario'); 
const cano   = document.querySelector('.cano'); 

const jump = function () {
    mario.classList.add('jump-mario'); 

    setTimeout(() => {
        mario.classList.remove('jump-mario')
    }, 500)
}; 

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft; 
    const marioPosition = +window
        .getComputedStyle(mario) // pegando posição do mario de acordo com os valores do estilo dele
        .bottom.replace('px', ''); 


    if(canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {
    cano.style.animation = 'none'; 
    cano.style.left = `${canoPosition}px`; 

    mario.style.animation = 'none'; 
    mario.style.bottom = `${marioPosition}px`; 

    mario.src ="./imgs/mario-game-over.png"; 
    mario.style.width = '75px'; 
    mario.style.marginLeft = '45px'; 

    clearInterval(loop)
    }


}, 10)

document.addEventListener('keydown', jump) // a qualquer tecla pressionada o mario pula