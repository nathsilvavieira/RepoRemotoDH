/* import { cnpj } from 'cpf-cnpj-validator'; */
const { cnpj } = require('cpf-cnpj-validator');

let numcnpj = cnpj.generate();

console.log(numcnpj);
console.log(cnpj.isValid(numcnpj));
console.log(cnpj.format(numcnpj));