   let cardapio = ['Salada', 'Brusqueta', 'Tabua de Frios'];
   let nome = " Restaurante Saladinha \n"; 

   function Restaurante(nome, cardapio){
       this.nome = nome; 
       this.cardapio=cardapio;
       this.entrada = function mensagem (){ return "SEJA BEM VINDO" + this.nome + this.cardapio}
   }
   
  const MeuRestaurante = new Restaurante(nome, cardapio)


   
   console.log(MeuRestaurante.entrada());