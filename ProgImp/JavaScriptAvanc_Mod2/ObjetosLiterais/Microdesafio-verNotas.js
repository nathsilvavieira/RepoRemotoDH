let nome
let numeroArquivo
let notas

function aluno(nome, numeroArquivo,mediaAprovacao) {
    this.nome=nome;
    this.numeroArquivo=numeroArquivo;
    this.mediaAprovacao=mediaAprovacao;
    this.boletim = function avaliacaoAluno(nota) {
        if(mediaAprovacao>nota){
            console.log(`Aluno ${nome} reprovado`);
        }else{
            console.log(`Aluno ${nome} aprovado`);
        }
    }
}

const CalcularNotas = new aluno('Nathalia',123,7);

CalcularNotas.boletim(6);
CalcularNotas.boletim(8);