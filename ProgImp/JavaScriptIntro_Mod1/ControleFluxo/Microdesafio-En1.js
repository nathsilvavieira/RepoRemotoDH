function podeSubir(altura,acompanhada){
    if(altura < 2.0 && altura >= 1.40){
        console.log("Pode subir");
    }else if(altura < 1.40 && altura >= 1.20 && acompanhada){
        console.log("Pode subir coma acompanhante")
    }else{
        (console.log("Acesso negado"))
    }
}
podeSubir(2.30,false);