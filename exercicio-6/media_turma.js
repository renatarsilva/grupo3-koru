const alunos = [
  { nome: "João", idade: 20, notas: [85, 90, 78] },
  { nome: "Maria", idade: 19, notas: [92, 95, 89] },
  { nome: "Pedro", idade: 21, notas: [70, 65, 80] },
  { nome: "Ana", idade: 18, notas: [60, 75, 68] },
  { nome: "Carlos", idade: 22, notas: [90, 88, 92] },
];

// Desafios
// A) Para cada aluno, calcule a média das notas!

alunos.forEach((aluno) => {
  const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
  const mediaNotas = somaNotas / aluno.notas.length;
  aluno.media = mediaNotas;

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média das notas: ${aluno.media.toFixed(2)}`);

  // B) Verifique se a média é maior ou igual a 70. Se sim, o aluno está aprovado, caso contrário, reprovado.

  if (aluno.media >= 70) {
    aluno.status = "Aprovado";
  } else {
    aluno.status = "Reprovado";
  }

  console.log(`O status do aluno é: ${aluno.status}`);
});

//C) Conte quantos alunos foram aprovados e quantos foram reprovados

let aprovados = 0;
let reprovados = 0;

alunos.forEach((aluno) => {
  if (aluno.status === "Aprovado") {
    aprovados++;
  } else {
    reprovados++;
  }
});

console.log(`Total de alunos aprovados: ${aprovados}`);
console.log(`Total de alunos reprovados: ${reprovados}`);

//D) Encontre o aluno com a maior média

let maiorMedia = alunos[0];
alunos.forEach((aluno) => {
  if (aluno.media > maiorMedia.media) {
    maiorMedia = aluno;
  }
});

console.log(
  `O aluno com a maior média é: ${
    maiorMedia.nome
  } com média ${maiorMedia.media.toFixed(2)}`
);

//E) Calcule a média geral da turma

let somaDasMedias = 0;

alunos.forEach((aluno) => {
  somaDasMedias += aluno.media;
});

const mediaGeral = somaDasMedias / alunos.length;

console.log(`A média geral da turma é: ${mediaGeral.toFixed(2)}`);
