// Este código foi criado como parte de um estudo de Estruturas de Controle em JavaScript, durante uma aula gratuita na plataforma DIO, no Bootcamp Potência Tech iFood, ministrado pelo Elias Araújo.

// Inicialização de variáveis
let herois = ["João", "Lord", "Alucard", "Zenitsu", "Ben 10", "Goku","Naruto", "Elias"];
let xp = 0;
let numeroDeMonstrosMortos = 40;

// Exibição de informações iniciais
console.log("Número de monstros mortos: " + numeroDeMonstrosMortos);
console.log("Cada monstro derrotado concede 500 XP.");

// Laço de repetição para ganhar XP
for (let i = 0; i < numeroDeMonstrosMortos; i++) {
  xp += 500;
  console.log("Ganhou 500 XP. Total de XP: " + xp);
}

// Cálculo do nível do herói
let nivel = xp;

// Estrutura de controle para determinar o nível
switch (true) {
  case nivel <= 1000:
    console.log("O herói " + herois[1] + " está no nível Ferro.");
    break;
  case nivel > 1000 && nivel <= 2000:
    console.log("O herói " + herois[2] + " está no nível Bronze.");
    break;
  case nivel > 2000 && nivel <= 5000:
    console.log("O herói " + herois[3] + " está no nível Prata.");
    break;
  case nivel > 5000 && nivel <= 7000:
    console.log("O herói " + herois[4] + " está no nível Ouro.");
    break;
  case nivel > 7000 && nivel <= 8000:
    console.log("O herói " + herois[5] + " está no nível Platina.");
    break;
  case nivel > 8000 && nivel <= 9000:
    console.log("O herói " + herois[6] + " está no nível Ascendente.");
    break;
  case nivel > 9000 && nivel <= 10000:
    console.log("O herói " + herois[6] + " está no nível Imortal.");
    break;
  case nivel >= 10001:
    console.log("O herói " + herois[7] + " está no nível Radiante.");
    break;
}
