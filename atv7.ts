/*
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
nome: Ana Carolina M. naves
*/

let teclado = require(`prompt-sync`)();
let fatorial: number = 1;
let n: number = parseInt(teclado(`Digite um número inteiro para calcular o fatorial:  `));

for (let x = 1; x <= n; x++){
    fatorial *= n;
}

console.log(`O fatorial de ${n} é: ${fatorial}`);




