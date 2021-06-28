//Veririficar se é Impar ou Par
let numero = 11;

if(numero%2==0){
console.log(`Numero ${numero} é Par`);
}else{
console.log(`Numero ${numero} é Impar`);   
}
//===================

//Verificar se o ano é bissexto
let ano = 2017;

if(ano%4==0){
console.log(`Ano ${ano} é bissexto`);
}else{
console.log(`Ano ${ano} não é bissexto`);
}
//========================
//média notas
let nota1=3;
let nota2=3;
let media=(nota1+nota2)/2;
if(media>=7){
    console.log("Aluno Aprovado");
}else if(media<7&&media>=4){
    console.log("Aluno está em Recuperação");
}else{
    console.log("Aluno Reprovado");
}
//==============================
// Numero primo
let verificar = 15;
let contador = 0;
for (let index = 1; index <= verificar; index++) {
    if(verificar%index==0){
        contador++;
    }
}
if(contador==2){
        console.log(`numero ${verificar} é primo`)
    }else{
        console.log(`numero ${verificar} não é primo`)
    }

//===================================
// numero primo com switch


switch (contador) { //contador==2
    case 2:
        console.log(`numero ${verificar} é primo`)
        break;
    default:
        console.log(`numero ${verificar} não é primo`)
       
}
//===============================

let palavra = ["nathalia"];


for (let index = 1; index < palavra.length; index++) {
 console.log(palavra[i])   
    
}