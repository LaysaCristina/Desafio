let nome = "João"
let XP =9000
let nivel = ""
if (XP < 1000) {
    nivel = "Ferro"
} else if (XP < 2000) {
    nivel = "Bronze"
} else if (XP < 5000){
    nivel = "Prata"
}else if (XP < 6000){
    nivel = "Ouro"
}else if (XP < 7000){
    nivel = "Platina"
}else if (XP < 8000) {
    nivel = "Ascendente"
}else if (XP < 9000){
    nivel = "Imortal"
}else if (XP < 10001) {
    nivel = "Radiante"
}
console.log("O herói de nome " + nome + " está no nível " + nivel)