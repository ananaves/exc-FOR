/*
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
nome: Ana Carolina M. naves
*/
var teclado = require("prompt-sync")();
var fatorial = 1;
var n = parseInt(teclado("Digite um n\u00FAmero inteiro para calcular o fatorial:  "));
for (var x = 1; x <= n; x++) {
    fatorial *= n;
}
console.log("O fatorial de ".concat(n, " \u00E9: ").concat(fatorial));
