// function expression
const increment1 = function (n) {
    return n +1;
}

// arrow function - sempre é uma funcao anonima
const increment2 = (n) => {
    return n +1;
}
// sem parenteses
const increment3 = n => {
    return n +1;
}
//sem return e sem chaves (implicita) funcao com uma unica linha de codigo
const increment4 = (n) =>  n +1;

console.log(increment1(1));
console.log(increment2(10));
console.log(increment3(50));
console.log(increment4(100));