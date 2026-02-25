// Exercícios de lógica bruta

//Total
let total = 0

for (let i = 1; i <= 5; i++) {
  total = total + i
  console.log("i:", i, "total:", total)
}
console.log("------------------------")
// Soma de pares
const numbers = [10,15,20,33,40];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    soma += num;
  }
}
console.log("Soma dos pares é:", soma);

console.log("------------------------")

// Busca da maior palavra
const frase = "flutter é muito legal";
