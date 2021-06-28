//arrow function - funcao flexa - uma function com sintaxe simplificada

let bemVindo =() =>'Olá Mundo!'; //com string

let dobro = n => n*2; //com operador matematico

let soma = (a,b) => a+b; //com  parametros

let horaAtual = () =>{ //usando metodos
    let data = new Date ();
    return data.getHours() + ':'
    + data.getMinutes();
}
console.log(bemVindo());
console.log(dobro(3));
console.log(soma(1,2));
console.log(horaAtual());