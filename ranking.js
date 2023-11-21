let win = 200
let defeat = 40
let result = minus(win,defeat)

function minus(n1, n2){
  return n1 - n2;}

switch(true) {
  case result <= 10:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Ferro");
    break;

  case result > 10 && result <= 20:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Bronze");
    break;

  case result > 20 && result <= 50:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Prata");
    break;

  case result > 50 && result <= 80:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Ouro");
    break;

  case result > 80 && result <= 90:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Diamante");
    break;

  case result > 90 && result <= 100:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Lendário");
    break;

  case result > 100:
    console.log("O Herói tem saldo de " + result + " vitórias e está no nível Imortal");
    break;

  default:
    console.log("O Herói tem saldo de " + result + " vitórias e está em um nível desconhecido");  

}
