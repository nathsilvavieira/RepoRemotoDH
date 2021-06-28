//funcao anonima

/* (function(a,b,c) {
    return a+b+c
}); */

//function expression
let sum = function (a,b){
    return a+b;
}
console.log(sum(2,5));

let outherSum = sum //reatribuir 
console.log(outherSum(2,50));