let vidas = 5;
let cont = 1;
let contador = 1;
let saldoConta = 1000;
let gastoMensal = 150;
let meses = 0;

// while (vidas >0) {
//     console.log(`Vidas restantes: ${vidas}`);
//     vidas--;
// }

// console.log("Fim de jogo!!");

// while (cont <=10) {
//     console.log(cont);
    
//     cont++;
// }

// while (contador <= 5) {
//   console.log(contador);
//   contador++;
// }

while (saldoConta >= gastoMensal) {
    console.log(`Mês ${meses}`);
    meses++;
    console.log(`Saldo do mês ${saldoConta}`);
    saldoConta-=gastoMensal;
    
} console.log(`Total de meses: ${meses}`);
console.log(`Saldo restante: ${saldoConta}`);