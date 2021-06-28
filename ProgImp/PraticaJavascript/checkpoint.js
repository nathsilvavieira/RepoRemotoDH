//Avaliação Programação Imperativa
//Checkpoint 2 - 28/06/21 - Nathalia Vieira
let prato;
let segundos;

function microondas(prato,novotempo) {
    
    switch (prato) {
        case "pipoca":
        segundos =10;
        break;
    case "macarrao":
        segundos =8;
        break;
    case "carne":
        segundos =15;
        break;
    case "feijao":
        segundos =12;
        break;
    case "brigadeiro":
        segundos =8;
        break;
    default:
        console.log("Prato inexistente");
    }   
}




