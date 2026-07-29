let numero = 8;
let nota = 6.5;
let temperatura = 28;

if (numero % 2 === 0) {
    console.log (`O número ${numero} é par`);
} else {
    console.log (`O número ${numero} é ímpar`);
}

if (nota >=7) {
    console.log ("O aluno está APROVADO!!!");
} else {
    console.log ("O aluno precisará realizar RECUPERAÇÃO!!!");
}

if (temperatura < 15) {
    console.log ("O clima está FRIO");
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log ("O clima está AGRADÁVEL");
} else {
    console.log ("O clima está QUENTE")
}
