-->Nível 1: 
(Somar dois números)

var n1, n2, soma;

n1=parseInt(prompt("Entre com um número: "));
n2=parseInt(prompt("Entre com um número: "));

soma=n1+n2;

alert(soma);

-->Nível 2:
(IMC)

var massa, altura, imc;

massa=parseFloat(prompt("Entre com uma massa: "));
altura=parseFloat(prompt("Entre com uma altura: "));

imc=massa/Math.pow(altura,2);

oouuu

imc=massa/(altura*altura);

alert(imc);



--Nível 3: 
(Divisível por 3 ou 4 ou 5)

var n;

n=parseInt(prompt("Entre com um número: "));

if(n%3==0 || n%4==0 || n%5==0){
alert("Divisivel");
}
else{
alert("Nao divisivel");
}


-->Nível 4: 
(Laço de Repetição-While)
