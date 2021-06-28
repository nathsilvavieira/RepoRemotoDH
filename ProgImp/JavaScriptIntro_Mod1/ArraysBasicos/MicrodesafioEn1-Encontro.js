let encontro = ['Marta', 'Paula', 'Joana', 'Maria', 'Josefa'];
console.log(encontro); //Imprime elementos array
console.log(encontro.length); //conta elementos do array de 1 em diante
console.log(encontro[3]); //encontra um dado do array conta a partir do 0 em diante

encontro.push("Nathalia"); //adicionei um dado
console.log(encontro);

encontro.pop(); //retirei ultimo dado
console.log(encontro);

console.log(encontro.indexOf(23)); //Procurando elemento number no array
console.log(encontro.lastIndexOf("Joana")); // Procurando a string no array
