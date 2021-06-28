/* Faça um programa que recebe três números do usuário, 
e identifica o maior através de uma função e o menor número através de outra função. */
/* function menor(a,b,c) {
    return Math.min(a,b,c);
}
function maior(a,b,c) {
    return Math.max(a,b,c);
} */

function menor(a,b,c) {
    if (a<b&&a<c) {
        console.log(`${a} é menor`);
    }else if(b<c){
     console.log(`${b}é menor`);
    }else{
        console.log(`${c} é menor`);
    }
}

menor(2,8,6);
menor(8,2,6);
menor(8,6,2);
/* console.log(maior(2,4,6)); */

