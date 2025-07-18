// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); 

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++);  
console.log("Novo valor:", counter);       
console.log("Pré-incremento:", ++counter); 
console.log("Valor final:", counter);      

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

//Desafio A) Calcule a média de números: 15, 25, 38
const numero1 = 15;
const numero2 = 25;
const numero3 = 38;

const soma = numero1 + numero2 + numero3;
const media = soma / 3;
console.log("Média dos 3 números é: ", media);

//Desafio B) Converter a string "123.45" em número
const stringNumero = "123.45";
const converterNumero = parseFloat(stringNumero);
console.log("O valor convertido é: ", convertedNumber);
console.log("Tipo do valor convertido: ", typeof converterNumero);

//Desafio C) Divida 9.7 por 2 e depois arredonde o resultado para o inteiro mais próximo.
const divisaoResultado = 9.7 / 2;
const resultadoArrendondado = Math.round(divisaoResultado);
console.log("O resultado da divisão de 9.7 por 2 é: ", divisaoResultado);
console.log("O resultado arredondado é: ", resultadoArrendondado);
