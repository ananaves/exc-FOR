/*
5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
nome: ana carolina M. naves

*/
var teclado = require("prompt-sync")();
var numeros = new Array();
var y = 0;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA n\u00FAmero: ")));
}
for (var y_1 = 0; y_1 < 10; y_1++) {
    for (var z = y_1 + 1; z < 10; z++) {
        if (numeros[y_1] > numeros[z]) {
            var temp = numeros[y_1];
            numeros[y_1] = numeros[z];
            numeros[z] = temp;
        }
    }
}
console.log("os numeros ordenados s\u00E3o: ".concat(numeros));
