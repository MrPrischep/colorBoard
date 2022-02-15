const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = ['rgb(160, 60, 60)', 'rgb(60, 90, 160)', 'rgb(60, 160, 90)', 'rgb(160, 160, 60)', 
                'rgb(160, 60, 120)', 'rgb(60, 160, 120)', 'rgb(160, 90, 60)'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
    
    board.append(square);
}

function setColor(element) {
    const color = getRandColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandColor() {
    const arrIndex = Math.floor(Math.random() * colors.length);
    return colors[arrIndex];
}