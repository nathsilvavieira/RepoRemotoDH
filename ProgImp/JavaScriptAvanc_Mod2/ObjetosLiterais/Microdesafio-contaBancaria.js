let numeroDeConta
let saldo
let nomeDoTitular


function Conta(numeroDeConta,saldo,nomeDoTitular) {
    this.numeroDeConta=numeroDeConta;
    this.saldo=saldo;
    this.nomeDoTitular=nomeDoTitular;
    this.depositoConta = function deposito(valorDeposito) {
        this.saldo+=valorDeposito
        return console.log(`Olá ${this.nomeDoTitular}! \n Deposito realizado seu novo saldo é de ${this.saldo}  reais`);
    } 
    this.saqueConta = function saque(valorSaque) {
         if(saldo<valorSaque){
             console.log("não é possivel fazer essa operação");
         }else{
             console.log(`Olá ${this.nomeDoTitular}! \n Saque realizado seu novo saldo é de ${this.saldo-=valorSaque}  reais`)
         }
       
    }
}    


const MeuBanco = new Conta(1234,250,"nathalia")

MeuBanco.depositoConta(600);
MeuBanco.saqueConta(200);

