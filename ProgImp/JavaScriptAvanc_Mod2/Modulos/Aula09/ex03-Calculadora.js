let calculo = require('./modulo/exformulas');


function calcular(a,b,operacao) {
    let resultado
    if(operacao=='+'){
        resultado = calculo.soma(a,b);
    }else if(operacao=='-'){
        resultado= calculo.subtracao(a,b);
    }else if (operacao=='*') {
        resultado = calculo.multiplicacao(a,b);
    }if(operacao=='/'){
        resultado==calculo.divisao(a,b);
    }
    console.log(resultado);
}

calcular(2,5,'+');
calcular(2,5,'-');
calcular(2,5,'*');
calcular(5,2,'/'); 
calcular(2,0,'/');