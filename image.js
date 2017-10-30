//como carregar a imagem

var img;

function preload() {
	
  
	img = loadImage("thumbnail_clogo (1).jpg");
}

function setup() {
	createCanvas(640, 640);
}

function draw() {
	image(img,0,0); 
}
