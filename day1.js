// exercício soma total
const numbers = [12, 5, 8, 130, 44];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log("Soma:", total);

//exercício maior número
let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest)  {
        biggest = numbers[i];
    }
}
console.log("Maior:", biggest);