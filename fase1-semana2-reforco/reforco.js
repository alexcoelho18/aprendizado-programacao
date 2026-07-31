let diaSemana = "sábado";
let idade = 18;
let temCarteira = true;
let senha = "12345";

if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É fim de semana");    
} else {
    console.log("É dia de semana");
    
}

if (idade >= 18) {
    if (temCarteira === true) {
    console.log("Pode dirigir");    
} else {
    console.log("Precisa tirar a carteira");
}    
} else {
    console.log("Muito jovem para dirigir");
    
}

if (senha === 12345) {
  console.log("Senha aceita (como número)");
} else {
  console.log("Senha rejeitada");
}