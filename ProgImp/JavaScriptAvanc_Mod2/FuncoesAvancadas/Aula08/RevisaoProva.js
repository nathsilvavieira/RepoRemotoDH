let numa, numb, operacao
let resultado
function calcular(numa,numb,operacao) {
    if(operacao=='+'){
        return numa+numb
    }if(operacao=='-'){
        return numa-numb
    }if(operacao=="*"){
        return numa*numb
    }if(operacao=='/'&& numb!=0){
        return numa/numb
    } else{
        return 'impossivel dividir'}
}


console.log(calcular('2',5,'+'))

/* for (i=1; i<=1000; i--) { 
    console.log(i);} */

//Se o salario for maior ou igual a 5000.00 o funcionário terá um aumento de 5%, caso contrário o aumento será de 10%. 
//Assinale a alternativa INCORRETA para o cálculo do novo salário. 
let salario = 6000.00
    console.log(salario>=5000.00 ? salario*=1.05 : salario*=1.1);    //minha resposta estava correta
    console.log(salario<5000.00 ? salario+=salario*0.1 : salario+=salario*0.05); //Se salario menor que 5k entao salario=salario* 10% caso contrario salario=salario*5%
    console.log(salario<5000.00 ? salario+=salario*0.05 : salario+=salario*0.1); //resposta incorreta Se salario menor que 5k entao salario=salario* 5% caso contrario salario=salario*10%
