// Calculadora Numero Fatorial com Laço For



function calculadoraFatorial(fatorial) {
    if (fatorial < 0) {  //definindo condicao para parar caso numero seja menor de 0
        return 'não calcular';
    } if (fatorial == 0 || fatorial == 1) { //definindo condicao que caso seja 0 ou 1 resultado deve ser 1
        return 1;
    }else{ //comentario resposta recursividade
        let numero = calculadoraFatorial(fatorial)
        let resultado=numero*calculadoraFatorial(numero-1)
    } return resultado   
   
} 
console.log(calculadoraFatorial(2));  // Resultado correto 120 




 

