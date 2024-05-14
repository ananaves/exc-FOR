/*
4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
nome: Ana carolina M. Naves

*/
var teclado = require("prompt-sync")();
var numeros = new Array();
var numerosInvert = new Array();
var z = 0;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA n\u00FAmero: ")));
}
for (var x = 10; x >= 0; x--) {
    numerosInvert[z] = numeros[x];
    z++;
}
console.log();
console.log("os numeros s\u00E3o: ".concat(numeros));
console.log();
console.log("os numeros invertidos s\u00E3o: ".concat(numerosInvert));
console.log();
