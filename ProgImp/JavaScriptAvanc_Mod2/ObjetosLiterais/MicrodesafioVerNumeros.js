let numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let numeros = [4, 6, 8, 12, 14, 18, 20, 22, 24, 26,...numerosPrimos];
console.log(numeros);

//console.log(Math.min(...numeros));

function maiorNumero(...params){
return Math.min(...params)
} 
console.log(maiorNumero(50,51,53,54,55,56,57,58,59));