const prompt = require("prompt-sync")()

const valorA = Number(prompt("Escreva o primeiro valor  "))
const valorB = Number(prompt("Escreva o segundo valor  "))

Multiplicaçao = valorA * valorB
Divisão = valorA / valorB
DivisãoInteira = valorA / valorB / valorB

console.log(" Multiplicação: " + Multiplicaçao)
console.log(" Divisão: " + Divisão)
console.log(" Divisão Inteira: " + DivisãoInteira)