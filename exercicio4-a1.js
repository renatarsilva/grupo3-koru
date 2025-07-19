const prompt = require("prompt-sync")();

function lerNota(n) {
  const nota = Number(prompt(`Digite a nota ${n}: `));
  if (nota < 0 || nota > 100) {
    console.log(`Nota ${n} não existe`);
    process.exit(); // Encerra o programa se a nota for inválida
  }
  return nota;
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, val) => acc + val, 0);
  return soma / notas.length;
}

function classificarNota(media) {
  if (media >= 90) return "A";
  if (media >= 80) return "B";
  if (media >= 70) return "C";
  if (media >= 60) return "D";
  return "F";
}

// Programa principal
const notas = [lerNota(1), lerNota(2), lerNota(3), lerNota(4)];

const media = calcularMedia(notas);
const classificacao = classificarNota(media);

console.log(`Média: ${media}`);
console.log(`Classificação: ${classificacao}`);
