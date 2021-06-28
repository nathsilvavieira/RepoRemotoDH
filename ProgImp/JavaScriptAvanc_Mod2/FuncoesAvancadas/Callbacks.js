
function acaoCarro(callback){
return callback()
}

function andar(){
console.log ("o carro esta andando");
}
   
        
let parar = () => console.log("o carro parou");

acaoCarro(parar);
acaoCarro(andar);



