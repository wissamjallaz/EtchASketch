const sizeButton = document.querySelector('.set-size');
const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');
const sizeTxt = document.getElementById('size-txt');
const colorButtons = document.querySelectorAll('.color');
let brazilColors = ['green', 'yellow', 'blue', 'yellow', 'green', 'yellow', 'green'];
let spainColors = ['red', 'yellow'];
let germanyColors = ['black', 'yellow','red'];
let italyColors = ['green', 'white','red'];
let franceColors = ['blue', 'white','red'];
let argentineColors = ['#89CFF0', 'white'];
let colorList = ['black'];
let click = false;
let size = 16;
createBoard(size);

document.querySelector('body').addEventListener('click', function(e){
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT"){
        click = !click;
        if (click)
            document.getElementById('draw').textContent = 'You Can Draw';
        else 
            document.getElementById('draw').textContent = 'You Cannot Draw';
}})

colorButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.id == 'spain'){
            colorList = spainColors;
        }
        else if (e.target.id  == 'germany'){
            colorList = germanyColors;
        }
        else if (e.target.id  == 'france'){
            colorList = franceColors;
        }
        else if (e.target.id  == 'italy'){
            colorList = italyColors;
        }
        else if (e.target.id  == 'argentine'){
            colorList = argentineColors;
        }
        else if (e.target.id  == 'brazil'){
            colorList = brazilColors;
        }
    })
})

function createBoard(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i = 0; i<size * size; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = '#825736';
        square.style.border = 'black solid 1px'
        square.classList.add('square');
        board.insertAdjacentElement('beforeend', square);
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => square.addEventListener('mouseover',() => 
         {if (click){
                 square.style.backgroundColor =`${colorList[Math.floor(Math.random()*colorList.length)]}`}}));
    }};

function resetBoard(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.remove());
}

function setSize(){
    if (sizeTxt.value < 1 || sizeTxt.value > 30){
        document.getElementById('info2').textContent = 'You should enter a number between 1 and 30!';
        }
    else {
        resetBoard();
        createBoard(sizeTxt.value);
        }
    }

function clearBoard(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor = '#825736');
}

