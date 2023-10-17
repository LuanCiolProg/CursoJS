/*
Luan Ciol tem 24 anos, pesa 99 kg
tem 1.7 altura e seu imc é de 30
Luan Ciol nasceu em 1999
*/
const nome = 'Luan Pedro';
const sobrenome = 'Miranda Ciol';
const idade = 24;
const peso = 99;
const alturaEmMetros = 1.70;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / Math.pow(alturaEmMetros, 2);
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem: ${idade} anos, pesa: ${peso} kgs, mede: ${alturaEmMetros} e seu IMC é de: ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);