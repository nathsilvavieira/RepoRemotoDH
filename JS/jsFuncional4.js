//funcao anonima
//IIFE -Imediataly Invoked Function Expression
//iife com parametros
(function (a,b,c) { //usar quando voce precisa garantir que determinados valores vao estar num escopo mais estrito
    let x =3; 
    console.log(`Result: ${a+b+c}`);
    console.log(`retornou x =${x}`); // para acessar valor de x ela precisa estar dentro da funcao
}) (1,2,3); //invocando funcao  
// iife sem parametros 
(function () {  //funcao define o escopo
    let x =300; 
    console.log(`retornou x =${x}`); 
}) (); // Mais comum usar esse tipo de funcao sem parametro

// funcao imadiatamente invocada com arrow function
(() =>{
console.log(`retornou arrow function`);
})();

// funcao iife com apenas uma linha
(() => console.log(`retornou arrow function em uma unica linha`))();

