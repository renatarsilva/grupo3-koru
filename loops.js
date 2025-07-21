//Exercício 5: Loops
//Desafio A
console.log("Tábuada do 7:");
for (let i = 1; i <= 10; i++) {
  let resulted = 7 * i;
  console.log(`7 x ${i} = ${resulted}`);
}

//Desafio B
let numeros = [2, 4, 6, 8, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma = soma + numeros[i];
}
console.log(`\nSoma dos números: ${soma}`);

//Desafio C
let valores = [13, 7, 3, 17, 5, 9];
let menor = valores[0];
for (let i = 1; i < valores.length; i++) {
  if (valores[i] < menor) {
    menor = valores[i];
  }
}
console.log("Menor valor do array:", menor);
