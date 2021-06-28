// Catalogo de Filmes e desenhos

let filmes = ['star wars'.toUpperCase(), 'clube da luta'.toUpperCase(), 'o poderoso chefão'.toUpperCase(), 'top gun'.toUpperCase(), 'interestelar'.toUpperCase()]
console.log(filmes[2]); //IMPRIMINDO SEGUNDO ITEM DA LISTA

console.log(filmes); //IMPRIMINDO CATOLOGO

let cartoons = ['toy story', 'Procurando Nemo', 'kong-fu panda', 'wally', 'fortinite' ]
cartoons.pop(); //EXCLUINDO JOGO

filmes.unshift(cartoons); //TRANSFERINDO UM ARRAY PARA OUTRO

//filmes.unshift('toy story'.toUpperCase(), 'Procurando Nemo'.toUpperCase(), 'kong-fu panda'.toUpperCase(), 'wally'.toUpperCase())
console.log(filmes);

// COMPARANDO OS SCORES
/*const asiaScores=[8,10,6,9,10,6,6,8];
const euroScores= [8,10,6,8,10,6,7,9];

if(asiaScores.length==euroScores.length){
    for(i=0;i<asiaScores.length;i++){
        console.log(`o elementos do indice ${i} estão iguais`)
    }if(asiaScores[i]==euroScores[i]){
        console.log(`o elementos do indice ${i} estão iguais`)
    }else
    console.log(`o elementos do indice ${i} não são iguais`)
}*/



