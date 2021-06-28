/* function logParams(a,b,c) { //criando a funcoa com parametros
    console.log(a,b,c);
    
}
logParams(1,2,3); //atribuindo os valores dos parametros
logParams(); //imprimindo funcao sem parametros retorna undefined */

/* function defoultParams(a=1,b=2,c=3) { //criando a funcoa com parametros
    console.log(a,b,c);
    
}
defoultParams(4,5,6); //reatribuindo os valores dos parametros
defoultParams(); //imprimindo funcao sem parametros default retorna undefined */

//spread/rest
/* function lognums(nums) { //retona dentro do array com (...nums)
    //console.log (Array.isArray(nums)); //retorna booleano
    for(n of nums ){ //se quiser simplificar transformar para array e executar
        console.log (n);
    }
}
lognums([1,2,3,4,5]); //retorna cada valor em uma linha */

function sumAll(...nums) {
    let total =0;
    for(let n of nums){
        total +=n
    }
    return total
}
console.log(sumAll(1,2,3));