//Primeiro: Criar duas variaveis para derrota e vitoria, e utilizar esses parametros na função
//Fazer o calculo das partidas e depois retornar pra variavel e mostrar o nivel
// const receber = require('prompt-sync')({sigint: true}); let vic = receber("Vitorias:  "); let der = receber("Derrotas:  ");

let venceu = 110
let perdeu = 5
calculoPartidas(venceu, perdeu)

function calculoPartidas(vitoria, derrota){
    resultado = vitoria - derrota
    return resultado
}

if ((venceu <= 10)){
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Ferro ") ;
}
if ((venceu >=11) & (venceu <=20)) {
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Bronze");
}
if ((venceu >=21) & (venceu <=50)){
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Prata");
}
if ((venceu >=51) & (venceu <=80)){
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Ouro");
}
if ((venceu >=81) & (venceu <=90)){
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Diamante");
}
if ((venceu >=91) & (venceu <=100)){
    console.log("O heroi tem saldo de ", + venceu ,"e esta no nivel Lendário");
}
if ((venceu >= 101)){
    console.log("O heroi tem vitorias com saldo de",+ venceu ,"e esta no nivel Imortal");
}

