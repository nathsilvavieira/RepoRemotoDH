//Recursividade - funcao que invoca ela mesma,  com uma condicao (if) atrelada a ela.

//recriando a funcao recursiva
function decrementar(numero) {  //declarando A FUNCAO COM PARAMETRO PARA EXECUTAR
    console.log(numero); //pedindo que seja impresso NO CONSOLE
    numero--; //decrementando valor
    if(numero>0){ //criando condicao de numero maior que zero, criando um looping até que condicao seja satisfeita!!
        decrementar(numero); //chamamos a dentro dela mesmapara realizar processo novamente. 
    }
}
decrementar(5); //INVOCAMOS A FUNCAO COM PARAMETRO PARA EXECUTAR!!!!