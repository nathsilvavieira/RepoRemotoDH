//Arrows Function com Parâmetros

let fizzbuzz=(numero1,numero2)=>{
    for (let i = 0; i < 100; i++) {
        if(multiplos(i,numero1)&& multiplos(i,numero2)){
            console.log("fizzbuzz")
        }else if (multiplos(i,numero1)){
            console.log("fizz")
        }else if(multiplos(i,numero2)){
            console.log("buzz")
        }else{
            console.log(i)
        }
        
    }
} 

let multiplos= (numero, multiplo)=> {
    if(numero%multiplo==0){
        return true
    }else{
        return false
    }
}

fizzbuzz(1,2);











/* function fizzbuzz(num1,num2){
    for (let i = 0; i < 100; i++) {
        if(multiplos(i,num1)&& multiplos(i,num2)){
            console.log("fizzbuzz")
        }else if (multiplos(i,num1)){
            console.log("fizz")
        }else if(multiplos(i,num2)){
            console.log("buzz")
        }else{
            console.log(i)
        }
        
    }
} 

function multiplos(num, mult) {
    if(num%mult==0){
        return true
    }else{
        return false
    }
}

fizzbuzz(2,3); */
