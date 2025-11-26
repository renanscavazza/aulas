/**
 luiz otavio miranda tem 30 anos e pesa 80kg
 tem 1.8m de altura e seu IMC e de 25.9259259259254
 luiz otavio nasceu em 1980
 */
const nome = 'luiz otavio'
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM);



let anoNascimento;

anoNascimento = 2025 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu imc e de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);




