//desestruturacao de dados é extracao de dados de arrays e objetos literias de forma simplificada
//ela nao motifica o array ou objeto, apenas copia valores com rapidez

let casa = ['sala','quarto', 'banheiro','cozinha'] //- array
let comodo = casa[1]; //criando uma nova variavel para alocar a string quarto de acordo com indice do array
console.log(comodo); 
 
let MinhaCasa = { // - Objeto
    tenhoQuarto : 'quarto',
    tenhoSala : 'sala',
    tenhoBanheiro :'banheiro',
    tenhoCozinha: 'cozinha',
}

let minhaCasaTem = MinhaCasa.tenhoSala;  //atribuindo propriedade para objeto na nova variavel
console.log(minhaCasaTem);