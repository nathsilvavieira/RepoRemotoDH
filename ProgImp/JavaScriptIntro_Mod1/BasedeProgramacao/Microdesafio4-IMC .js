let nome = "José";
let sobrenome = "da Silva"
let idade = 27;
let peso = 83.5;
let altura = 1.73;
let plano = true;
let imc = peso/(altura^2); // formula Imc peso / altura ao quadrado

console.log(nome + sobrenome +"tem" + idade + "anos e seu índice de massa corporal é de"+imc+ "esse paciente possui plano? "+plano);
console.log(`${nome}, ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc} esse paciente possui plano? ${plano}`);
//Uso de Crase para imprimir texto sem precisar concatenar com + e ordenar as variaveis corretamente. 