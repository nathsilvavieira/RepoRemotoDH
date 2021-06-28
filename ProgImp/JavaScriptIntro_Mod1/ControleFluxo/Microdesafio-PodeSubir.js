function podeSubir(altura,acompanhada){ //criando function para analisar se pode subir no brinquedo 
    if(altura < 2.0 && altura >= 1.40){ // condicao se crianca maior que 2mt acesso negado,  entre 2mts menor que 1,4 pode subir desacompanhada
        console.log("Pode subir");
    }else if(altura < 1.40 && altura >= 1.20 && acompanhada){ // entre 1.4 mt e 1.2 somente acompanhada
        console.log("Pode subir com acompanhante")
    }else{ // se menor de 1.2 acesso negado
        (console.log("Acesso negado"))
    }
}
podeSubir(2.30,false); //chamando funcao