/* Faça um programa, com uma função que necessite de três argumentos,
 e que forneça a soma desses três argumentos através de uma função. 
 Seu script também deve fornecer a média dos três números, através de uma 
 segunda função que chama a primeira. */

 function soma(a,b,c) {
     return a+b+c
 }
 function media(a,b,c) {
     return soma(a,b,c)/3;
 }
 console.log(media(1,2,3));