//lista de compras

let listaDeCompras=['arroz','feijão','ovo','café','pão']; //criando um array
console.log(listaDeCompras);

listaDeCompras.push('queijo','leite'); //adicionando um ou mais itens no final do array
console.log(listaDeCompras);

listaDeCompras.pop(); //retira ultimo item do array
console.log(listaDeCompras);

listaDeCompras.shift(); //retira primeiro item do array
console.log(listaDeCompras);

listaDeCompras.unshift("leite zero lactose", "arroz integral"); //adicona itens no inicio do array
console.log(listaDeCompras);

listaDeCompras.join("-"); // Junta todos itens do array
console.log(listaDeCompras); 