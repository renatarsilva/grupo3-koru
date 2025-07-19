// b) Verifique se um número é par ou ímpar

const prompt = require("prompt-sync")();

const num = prompt("Digite um número: ");

if (num % 2 == 0) {
  console.log("Número é par");
} else {
  console.log("Número é impar");
}
