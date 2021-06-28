// Aula  21/06/21
// objeto literal

let carro={
    modelo:'gol',
    cor:'prata',
    ano: 2021,
    flex:true,
    mostrar: function () {
        return 'caraxcteristicas do carro';
    }
}
console.log(carro.mostrar());
console.log(carro.modelo); //pode usar o this.modelo para chamar dentro do bloco
console.log(carro.cor);
console.log(carro.ano);
console.log(carro.flex);
