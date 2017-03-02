var section = document.getElementsByClassName("article-section");
var output = document.getElementById('output-target');
var header = document.getElementById('page-title');
var input = document.getElementById('keypress-input');
var pig = document.getElementById('guinea-pig');
var addColor = document.getElementById('add-color');
var makeLarge = document.getElementById('make-large');
var capture = document.getElementById('add-border');
var rounded = document.getElementById('add-rounding');

function clickySections(event){
  var target = event.target.innerHTML;
  output.innerHTML = "You clicked the " + target + " section";
};

function headerMouse(){
   output.innerHTML = "You moved your mouse over the header";
};

function mouseLeave(){
   output.innerHTML = "You left me!";
};

function keyPress(){
  output.innerHTML = input.value;
};

function pigColor(){
  pig.classList.add('blue');
}

function makeLarge(){
  pig.classList.add('large');
}

function borderCapture(){
  pig.classList.add('borderCapture');
}

function borderRound(){
  pig.classList.add('borderRound');
}

// Loop for clickySections
for(i=0; i < section.length; i++){
   section[i].addEventListener("click", clickySections);     
}

header.addEventListener('mouseenter', headerMouse);
header.addEventListener('mouseleave', mouseLeave);
input.addEventListener('keypress',keyPress);
addColor.addEventListener('click',pigColor);
makeLarge.addEventListener('click',makeLarge);
capture.addEventListener("click", borderCapture);
rounded.addEventListener("click", borderRound);