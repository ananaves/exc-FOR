/*
6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR
nome: Ana carolina M. Naves

*/
for (var x = 1000; x <= 2000; x++) {
    if (x % 11 == 2) {
        console.log(x);
    }
}
