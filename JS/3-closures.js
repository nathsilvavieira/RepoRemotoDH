//closures - funcoes aninhadas que vivem dentro de outras funcoes. Usada somente quando a conteiner é executada
//funcao container (pai)
function menu(nomeRestaurante){ // declarando parametro usado dentro do closure
    let saudacao = "\n Seja bem vindo!\n";
    function restaurante(){return  nomeRestaurante + saudacao} // funcao interna (filha) - closure
    return restaurante (); //pedindo para executar o closure
}
console.log(menu("Você esta no restaurante Joia de Minas!")); //chmando funcao pai com parametro da funcao filha dentro

//exempplo do playground
function saudacao(nome) {
    let mensagem = "Olá, tudo bem?"
    function juntarNome() {
        return mensagem +"\n Como voce se chama?" +nome;

    }
    return juntarNome();

}
console.log(saudacao("\n Nathalia"));


