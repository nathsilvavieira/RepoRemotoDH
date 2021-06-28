//Prática Arrow Functions e recursividade

function calculadoraFatorial (fatorial) {
         
    if ( fatorial < 0) {  //definindo condicao para parar caso numero seja menor de 0
        return 'não calcular';
    } 
     
    if (fatorial == 0 || fatorial == 1) {  //definindo condicao que caso seja 0 ou 1 resultado deve ser 1
        return 1;
    }
     
    let resultado = fatorial;
    for (let i=1;i<fatorial;i++){ //definindo laço de repetiçao e culculo do numero fatorial n! = n * (n - 1) * (n - 2)...
        resultado*=i 
        }
    return resultado // retornará resultado
    
}
 
console.log(calculadoraFatorial(5)); // imprime 120








