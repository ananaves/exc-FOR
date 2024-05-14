/* 
4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
nome: Ana carolina M. Naves

*/

let teclado = require(`prompt-sync`)();

let numeros : number [] = new Array();
let numerosInvert : number [] = new Array();
let z: number  = 0;

for (let x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado(`Digite o ${x + 1}º número: `));   
}

for(let x = 10 ;x >= 0; x-- ){
    numerosInvert[z] = numeros[x]
    z++
}

console.log();
console.log(`os numeros são: ${numeros}`);
console.log();
console.log(`os numeros invertidos são: ${numerosInvert}`);
console.log();


