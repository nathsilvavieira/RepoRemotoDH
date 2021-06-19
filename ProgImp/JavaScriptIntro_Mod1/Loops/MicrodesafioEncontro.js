
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];
const substituto = [15, 39, 60, 39, 10, 13, 81, 9, 6, 95];

console.log(pontos.length);
console.log(substituto.length);

function alterandoArray(pontos, substituto){
    for(let x = 0; x<substituto.length;x++) {
        pontos.pop();
        pontos.unshift(substituto[x]);
    }
}
alterandoArray(pontos,substituto);
console.log(pontos);