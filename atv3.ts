/* 
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
nome: Ana carolina M. naves 

*/
let teclado = require(`prompt-sync`)();

let numeros : number [] = new Array();
let maiorN: number = 0;

for (let x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado(`Digite o ${x + 1}º número: `));
    
}
for (let x = 0; x < 10; x++){
    if(numeros[x] > maiorN){
        maiorN = numeros[x];
    }
}

console.log(`o maior numero é: ${maiorN}`);