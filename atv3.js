/*
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
nome: Ana carolina M. naves

*/
var teclado = require("prompt-sync")();
var numeros = new Array();
var maiorN = 0;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA n\u00FAmero: ")));
}
for (var x = 0; x < 10; x++) {
    if (numeros[x] > maiorN) {
        maiorN = numeros[x];
    }
}
console.log("o maior numero \u00E9: ".concat(maiorN));
