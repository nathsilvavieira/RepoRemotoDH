let nomeJogador = "Bruno";
let golsJogador = 1000;
let precoEmDolares = 100000000;


function fazGol() { //funcao de parametro global
golsJogador++;// soma +1 gol a cada rodada
console.log("GOL!!!!!!!!!");// Imprime a mensagem "GOL!!!!!!!!"
precoEmDolares = precoEmDolares + 10000;// Adiciona mais $10,000 dólares a cada rodada
return console.log(`${nomeJogador} tem ${golsJogador} gols e vale $${precoEmDolares} dólares.`)//Imprime na tela
}

function hatTrick (){ 
fazGol(); //chamando repeticao da fubncao fazergol
fazGol();
fazGol();
precoEmDolares *= 0.1  //adicionando 10%
return precoEmDolares
}
console.log(hatTrick());