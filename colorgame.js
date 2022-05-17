//variables

let colores = document.querySelectorAll('.square')

let color

let pickedColor

let mensaje = document.querySelector('#message')

let clickedColor 

let h1 = document.querySelector('h1')

let reset = document.querySelector('#reset')

let nivel = document.querySelectorAll('.nivel')

let numberOfSquares

//codigo

init()

//funciones

function init (){
    resetear()

    background()
    
    listeners()
}

function desaparecer (){
    clickedColor = this.style.backgroundColor    
    
    if (pickedColor == clickedColor){ 

        mensaje.textContent = 'Perfect!'; 
        h1.style.backgroundColor = pickedColor;
        changeColors (pickedColor);
        for(i=0; i<colores.length; i++){
        colores[i].classList.remove('hidden');
        colores[i].classList.add('visible')
        }}
    
    else {
        this.classList.remove('visible');
        this.classList.add('hidden');
        mensaje.textContent = 'Try Again';
        }
    }
   
function changeColors (InsertColor){
    for( i = 0; i < colores.length; i++ ){
    colores[i].style.backgroundColor = InsertColor
    }
}

function pickColor (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

function randomColor (){
    let r = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    return `rgb(${r}, ${g}, ${b})`
}

function generateRandomColors (num){
    let col = []
    for( i = 0; i < num; i++){
        col.push(randomColor())
    }
    return col
}

function resetear (){

    if(nivel[0].classList.contains('selected')){
        numberOfSquares = 3
    }
    else if(nivel[1].classList.contains('selected')){
        numberOfSquares = 6
    }

    for(i=0; i<colores.length; i++){
        colores[i].classList.remove('hidden');
        colores[i].classList.add('visible')
        }

    for(i=3; i<colores.length; i++){
            colores[i].classList.remove('visible')
        }
        
    h1.style.backgroundColor = 'rgb(205, 22, 22)'
    
    color = generateRandomColors(numberOfSquares);
    
    pickedColor = color[pickColor(0, numberOfSquares-1)];
    
    for( i = 0; i < colores.length; i++ ){
        colores[i].style.backgroundColor = color[i]};
    
    document.querySelector('#colorDisplay').textContent = pickedColor;
    
    for( i = 0; i < colores.length; i++ ){
         colores[i].addEventListener('click', desaparecer)
        }

    mensaje.textContent = ''

    reset.textContent = 'New Colors'
}

function again (){
    if(mensaje.textContent == 'Perfect!'){
    reset.textContent = 'Play Again?'
    }
}

function dif1 (){
    for(i=0; i<colores.length; i++){
        colores[i].classList.remove('hidden');
        colores[i].classList.add('visible')
        }

    nivel[0].classList.add('selected')
    nivel[1].classList.remove('selected')

    for(i=3; i<colores.length; i++){
        colores[i].classList.add('esconder');
        colores[i].classList.remove('visible')
    }
    
    resetear()
}

function dif2 (){
    nivel[0].classList.remove('selected')
    nivel[1].classList.add('selected')

    for(i=3; i<colores.length; i++){
        colores[i].classList.remove('esconder')
    }

    resetear()
}

function listeners (){
    for( i = 0; i < colores.length; i++ ){
        colores[i].addEventListener('click', desaparecer)
       }
         
   reset.addEventListener('click', resetear)
   
   mensaje.addEventListener('DOMSubtreeModified', again)
   
   nivel[0].addEventListener('click', dif1)
   
   nivel[1].addEventListener('click', dif2)
}

function background (){
    for( i = 0; i < colores.length; i++ ){
        colores[i].style.backgroundColor = color[i]
        }
    
    document.querySelector('#colorDisplay').textContent = pickedColor
}