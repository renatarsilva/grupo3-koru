// a) Crie um sistema de classificação de notas:
// - 0-59: F
// - 60-69: D
// - 70-79: C
// - 80-89: B
// - 90-100: A

const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite nota 1: "));
if (nota1 < 0 || nota1 > 100) {
  return console.log("Nota 1 não existe");
}
const nota2 = Number(prompt("Digite nota 2: "));
if (nota2 < 0 || nota2 > 100) {
  console.log("Nota 2 não existe");
}
const nota3 = Number(prompt("Digite nota 3: "));
if (nota3 < 0 || nota3 > 100) {
  console.log("Nota 3 não existe");
}
const nota4 = Number(prompt("Digite nota 4: "));
if (nota4 < 0 || nota4 > 100) {
  console.log("Nota 4 não existe");
}

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 90) {
  console.log("A");
} else if (media >= 80) {
  console.log("B");
} else if (media >= 70) {
  console.log("C");
} else if (media >= 60) {
  console.log("D");
} else {
  console.log("F");
}
