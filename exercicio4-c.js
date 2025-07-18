// c) Crie uma verificação que diga se uma pessoa pode dirigir
// (precisa ser maior de idade E ter habilitação)

const prompt = require("prompt-sync")();

const age = prompt("Digite sua idade: ");

if (age < 18) return console.log("Voce nao pode dirigir! ");

const hasCNH2 = prompt("Você tem CNH? ");

if (hasCNH2 == "sim" || hasCNH2 == "s") {
  return console.log("Voce pode dirigir! ");
}
console.log("Voce nao pode dirigir! ");
