//objeto literal

let objetoLiteral = { //definindo propriedades do objeto
    nome : "nathalia", //dois pontos separa nome do seu valor String
    idade: 27, //valor pode ser tanto string, como numero ou boolean.
    solteira: false
}
console.log(objetoLiteral);
console.log(objetoLiteral.nome); //imprimindo valores dentro do objeto
console.log(objetoLiteral.idade);
console.log(objetoLiteral.solteira);

//Criando metodos dentro do objeto literal

let programadora = { //criando um metodo
sistemaOperacional: "Windowns",
internetBandaLarga: true,
computador: function(){
    return "Dell"}
}
console.log(programadora); //retotna tudo dentro do metodo
console.log(programadora.computador()); //retorna apenas a funcao dentro do metodo

//funcao contrutora
function Computador(desktop,mouse,monitor) { //criando construtor com molde necessário, deve começar SEMPRE COM MAIUSCULO!!!
    this.desktop = desktop; //com 'this.propriedade' defino propriedade do objeto que estamos criando dentro do construtor
    this.mouse = mouse; // todos parametros passam a ser obrigatorios para criar o objeto
    this.monitor = monitor;  
}
 
//Instanciar objeto precisa usar a palavra reservada NEW, em seguida chamar a funcao construtora declarar parametros
const MeuComputador = new Computador("Ryzen","Logitec","Samsung");  // ele retonará uma instancia na nova variavel, criando uma nova instancia a partir funcao contrutora
console.log(MeuComputador); //Imprimindo objeto instanciado NAO USAR ()!!!!
