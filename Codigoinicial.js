var x, y;
var vida;
var pontos;
var tamBloco = 40; 
var imgParede; 
//var px;
//var py;
var cenario;
var X;
var Y;
var  posColuna;
var  posLinha;
cenario=  [
   ['l','l','l','l','l','l','l','l','l','l','l','l','l'],
   ['l','#','#','#','#','#','#','#','#','#','#','#','#'],
   ['l','#','l','l','l','l','l','l','l','l','l','l','#'],
   ['l','#','l','l','l','l','l','l','#','l','l','l','#'],
   ['l','#','l','#','#','l','l','l','l','l','l','l','#'],
   ['l','#','l','l','#','#','l','l','l','l','l','l','#'],
   ['l','#','l','l','l','l','l','#','l','l','l','l','#'],
   ['l','#','l','l','l','l','l','l','l','l','l','l','#'],
   ['l','#','l','l','#','#','l','l','l','l','l','l','#'],
   ['l','#','l','l','l','l','l','l','#','l','l','l','#'],
   ['l','#','l','#','l','l','#','l','l','l','l','l','#'],
   ['l','#','l','l','l','l','l','l','l','l','l','l','#'],
   ['l','#','#','#','#','#','#','#','#','#','#','#','#']
];

function setup() {
 createCanvas(560,550);
 x= 100; 
 y = 100;
}


function pacMan(x, y) {  
  stroke(250,250,5); 
  strokeWeight(0); 
  fill(51,51,153);
  arc(x, y, 45, 45, 0, PI+HALF_PI+QUARTER_PI, PIE);
} 
function FundoTela(){
    vida=0;
    pontos=12;
    fill(150,150,150);
  stroke(130,130,130);
   strokeWeight(1); 
    textSize(15);
    text("Java", 100, 60); text("Java", 275, 60); text("Java", 450, 60);
    text("JavaScript", 100, 130);text("JavaScript",275, 120);text("JavaScript", 450, 120);
    text("C++", 100, 175); text("C++",275, 175); text("C++", 450, 175);
    text("Phyton", 100, 230); text("Phyton", 275, 230);text("Phyton", 450, 230);
    text("C#", 100, 300);text("C#", 275, 300);text("C#", 450, 300);
    text("JavaScript", 100, 375);text("JavaScript",275, 375);text("JavaScript", 450, 375);
    text("Java", 100, 450); text("Java", 275, 450); text("Java", 450, 450);    
    fill(51,51,153);   //Retângulo (Vida)
    rect(450,6,70,17.5);  //Retângulo (Vida)
    fill(255,255,255);   // (Vida)
    textSize(17.3);  //(Vida)
    text(" VIDAS:"+vida,450,20);   //(Vida)
    fill(51,51,153);   //Retângulo (Pontos)
    rect(100,6,95,17.5);   // Retângulo (Pontos)
    fill(255,255,255);    //Retângulo (Pontos)
    textSize(17.3);  //Retângulo (Pontos)
    text(" PONTOS:"+pontos,100,20);
  
}    //Retângulo (Pontos)




function colisao(px, py) {
  posColuna = Math.floor( px / tamBloco ); 
  posLinha = Math.floor( py / tamBloco );
  if ( cenario[posLinha][posColuna] == '#' ) {
     return true;     
  }
  else {
     return false;  
  }
  
}
function draw() { //funçao de colisao
  
  clear();
  background(105,105,105);
  FundoTela(); //Chamar função FundoTela
  
  for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
        //image(imgParede,j*tamBloco,i*tamBloco); 
        fill(100,100,255);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
      }
    }
  }
  
   if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisao( x - 4 - tamBloco/2, y ) ) {
       x = x - 4;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisao( x + 4, y ) ) {
       x = x + 4;       
     } 
   }
    if (keyIsDown(UP_ARROW)) {
     if ( ! colisao( x , y - 4 - tamBloco/2) ) {
       y = y - 4;       
     }
   }
   if ( keyIsDown(DOWN_ARROW)) { 
     if ( ! colisao( x , y+4 -tamBloco/2 ) ) {
       y = y + 4;       
     } 
   }
   
   pacMan(x,y); 
   
}
