// Converte Fahreinheit para Celcius(32 °F − 32) × 5/9 = 0 °C

let fahreinheit = 60;
let celcius = (fahreinheit -32)*5/9;
console.log (celcius);

//=========================

// Converte Celcius para Fareinheit (32 °C × 9/5) + 32 = 89,6 °F
let celcius2 = 30;
let fahreinheit2 = (celcius2*9/5)+32;
console.log (fahreinheit2);

//==========

// Calculo IMC Basico
let peso =73;
let altura =1.60;
let imc = peso/(altura*altura);
console.log(imc);

//===============

// Area triangulo
let base = 10;
let altura1 = 20;
let triangulo = (base*altura1)/2;
console.log(triangulo);

//================

/// Formula de Baskara e Equacao de segundo grau (ax2 + bx + c = 0); a = 1, b = 12 e c = -13
let a=1;
let b=12;
let c=-13;
let delta = (b^2)-4*a*c;
let x1 = -b+Math.sqrt(delta)/2*a;
let x2= -b-Math.sqrt(delta)/2*a;
let equacao = a*(x2)^2 + b*(x2) + c;
console.log(equacao);
