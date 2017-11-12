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
var posColuna;
var posLinha;
cenario= [
['l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l','l'],
['l','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['l','#','l','l','l','l','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','l','l','l','#','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','#','l','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','l','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','#','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','l','l','l','l','#','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','#','l','l','l','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','l','l','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','#','l','l','#','l','l','l','l','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','l','l','l','l','l','l','l','#','#','l','l','l','#','l','l','l','l','l','l','l','l','l','l','l','#'],
['l','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];

function setup() {
createCanvas(1110,540);
x= 100; 
y = 100;
}

function pacMan(x, y) { 
stroke(250,250,5); 
strokeWeight(0); 
fill(250,194,0);
arc(x, y, 45, 45, 0, PI+HALF_PI+QUARTER_PI, PIE);
} 

function FundoTela(){
textStyle(BOLD);
vida=0;
pontos=0;
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
fill(51,51,153); //Retângulo (Vida)
//rect(480,10,75,17.5); //Retângulo (Vida)
fill(255,255,255); // (Vida)
textSize(20); //(Vida)
text(" VIDAS:"+vida,480,30); //(Vida)
fill(51,51,153); //Retângulo (Pontos)
//rect(100,6,95,17.5); // Retângulo (Pontos)
fill(255,255,255); //Retângulo (Pontos)
textSize(20); //Retângulo (Pontos)
text(" PONTOS:"+pontos,100,30);
} 

function Niveis(){
    fill(255,255,255); //Texto(Nivel)
    textSize(30);
    text("NIVEL 1", 780, 30); //Inicialização Nível 1
    textSize(18);
    text("OBJETIVO:", 610, 110 ); 
    text("Somar dois numeros digitados pelo usuario.", 630,140); 

    //fill(255,255,255); //Texto(Nivel)
    //textSize(17.3);
    //text("NIVEL 2", 930, 30); //Inicialização Nível 2
    //textSize(17.3);
    //text("OBJETIVO:", 920, 80 ); 
    //text("Calcular o IMC a partir do usuario.", 800,100); 
   
    //fill(255,255,255); //Texto(Nivel)
    //textSize(17.3);
    //text("NIVEL 3", 930, 30); //Inicialização Nível 3
    //textSize(17.3);
    //text("OBJETIVO:", 920, 80 ); 
    //text("Verificar se um numero eh divisivel ", 800,100); 
    //text("por 3, 4 ou 5. ", 800,120); 
   
    //fill(255,255,255); //Texto(Nivel)
    //textSize(17.3);
    //text("NIVEL 4", 930, 30); //Inicialização Nível 4
    //textSize(17.3);
    //text("OBJETIVO:", 920, 80 ); 
    //text("Contagem até 22.", 800,100); 
   
    //fill(255,255,255); //Texto(Nivel)
    //textSize(17.3);
    //text("NIVEL 5", 930, 30); //Inicialização Nível 5
    //textSize(17.3);
    //text("OBJETIVO:", 920, 80 ); 
    //text("Imprimir os 10 primeiros numeros em ", 800, 100);
    //text("ordem decrescente.", 820,120); 
   
    //fill(255,255,255); //Texto(Nivel)
    //textSize(17.3);
    //text("DESAFIO", 930, 30); //Inicialização Nível 6 (DESAFIO)
    //textSize(17.3);
    //text("OBJETIVO:", 920, 80 ); 
    //text("Imprimir apenas os elementos com indice par", 800,100);
    }
   
    function Respostas(){
    text("var n1, n2, soma;", 630,160);
    text("n1=parseInt(prompt('Entre com um numero:'));", 630,180 );
    text("n2=parseInt(prompt('Entre com um numero:'));",630,200);             //QUESTÃO 1 
    text("soma=n1+n2;",630,220 ); 
    text("alert(soma);",630,240);
   
    //text("var massa, altura, imc;", 700, 150);
    //text("massa=parseFloat(prompt('Entre com uma massa: '));", 700, 170);
    //text("altura=parseFloat(prompt('Entre com uma altura: '));", 700, 190);            // QUESTÃO 2
    //text("imc=massa/Math.pow(altura,2);", 700, 210);
   
    //text("var n;", 700, 170);
    //text("n=parseInt(prompt('Entre com um número: '));" , 700, 190);
    //text("if(n%3==0 || n%4==0 || n%5==0){", 700, 210);                //QUESTÃO 3
    //text("alert('Divisivel');", 700, 230);
    //text("}", 700, 250);
    //text("else{", 700, 270);
    //text("alert('Nao divisivel');", 700, 290);
    //text("}", 700, 310);
   
    //text("var num, result;", 700, 150);
    //text("result=' '", 700, 170);
    //text("num=parseInt(prompt(''));", 700, 190);
    //text("while(num !=22){", 700, 210);                             //QUESTÃO 4 
    //text("result=result+num+' ';", 700, 230);
    //text("num=parseInt(prompt(' '));", 700, 250);
    //text("}", 700, 270);
    //text("alert(result);", 700, 310);

    //text(" var result;", 700, 150);
    //text("result=' ';", 700, 170);
    //text("for(i=10;i>=1;i--){", 700, 190);                               //QUESTÃO 5 
    //text("result=result+i+' ';", 700, 210);
    //text("}", 700, 230);
    //text("alert(result);", 700, 250);
    
    //text("var N, Par=[], nPar=' ';", 700, 150);
    //text("N=parseInt(prompt(' ');", 700, 170);
    //text("for(i=0; i<N; i+=1){", 700, 190);
    //text("Par[i]=parseInt(prompt(' '));", 700, 210);                       //QUESTÃO DESAFIO
    //text("if(i%2===0){", 700, 230);
    //text("nPar=Par[i]+' ';", 700, 250);
    //text("alert(nPar);", 700, 270);
    //text("}", 700, 290);
    }
    

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
background(0,0,0);
FundoTela(); //Chamar função FundoTela
Niveis(); //Chamar função Niveis
Respostas();// Chamar funções Respostas
for ( i = 0; i < cenario.length; i++ ) { 
for ( j = 0; j < cenario[0].length; j++ ) { 
if ( cenario[i][j] == '#' ) {
//image(imgParede,j*tamBloco,i*tamBloco); 
fill(51,51,153);
rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
}
if ( cenario[4][8] == '#' ) {
//image(imgParede,j*tamBloco,i*tamBloco); 
fill(51,51,153);
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
