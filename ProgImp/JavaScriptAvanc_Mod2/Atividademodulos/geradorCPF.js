const { cpf } = require('cpf-cnpj-validator')

let numcpf = cpf.generate(); //gera numcpf

console.log(numcpf); //imprimindo numero cpf 
/* console.log(cpf.isValid(numcpf)); Validando numero CPF*/ 
/* console.log(cpf.format(numcpf));  *///formatando numero CPF
