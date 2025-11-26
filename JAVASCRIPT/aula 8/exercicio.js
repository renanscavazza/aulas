/**
 luiz otavio miranda tem 30 anos e pesa 80kg
 tem 1.8m de altura e seu IMC e de 25.9259259259254
 luiz otavio nasceu em 1980
 */

 const nome = 'renan souza';
 const sobrenome = 'scavazza';
 const idade = 17;
 const peso = 68;
 const altura = 1.78;

 let imc; // peso / (altura * altura)
 let anoNascimento;
 
 
 
 imc = peso / (altura * altura);
 anoNascimento = 2025 - idade;
 
 
 
 console.log(imc);
 console.log(anoNascimento)



 console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso} kg` )
 console.log(`tem ${altura} de altura e seu imc e de ${imc}`)
 console.log(`${nome} nasceu em ${anoNascimento}`)