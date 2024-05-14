/*
5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
nome: ana carolina M. naves

*/

let teclado = require(`prompt-sync`)();

let numeros : number [] = new Array();
let y: number = 0;

for (let x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado(`Digite o ${x + 1}º número: `));
    
}

for(let y = 0; y < 10; y++){
  for(let z = y+1; z < 10; z++){
    if (numeros[y]>numeros[z]){
    let temp = numeros[y];
    numeros[y]=numeros[z];
    numeros[z]= temp;
    }
  }
}


console.log(`os numeros ordenados são: ${numeros}`);