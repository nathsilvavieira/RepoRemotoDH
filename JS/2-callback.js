
//Criando Callback - uma funcao pai que executa junto com ela a funcao filho

//funcoes filho
let somar = (numA,numB) => numA+numB; 
let mult = (numA,numB) => numA*numB;
let div = (numA,numB) => numA/numB;
let sub = (numA,numB) => numA-numB;

//funcao pai
const calculadora = (numA,numB,operacao) => operacao(numA,numB); 

console.log("Este é um Callback com soma " + calculadora(3,3,somar)); // nunca chamar callback dentro do funcao com ()
console.log("Este é um Callback com subtracao " + calculadora(3,3,sub)); //ao chamar a funcao pai a funcao filho sera executada
console.log("Este é um Callback com multiplicacao " + calculadora(3,3,mult));
console.log("Este é um Callback com divisao " + calculadora(3,3,div));

