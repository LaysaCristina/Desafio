let nome = "João"
let XP = 3000
let nivel = ""
if (XP > 0 && XP < 999) {
    nivel = "Ferro"
} else if (XP > 999 && XP < 2000) {
    nivel = "bronze"
} else if (XP > 1999 && XP < 5000){
    nivel = "prata"
}else if (XP > 2999 && XP < 6000){
    nivel = "ouro"
}else if (XP > 5999 && XP < 7000){
    nivel = "platina"
}else if (XP > 6999 && XP < 8000) {
    nivel = "Ascendente"
}else if (XP > 7999 && XP < 9000){
    nivel = "Imortal"
}else if (XP > 8999 && XP < 10001) {
    nivel = "Radiante"
}
console.log("O herói de nome " + nome + " está no nível " + nivel)