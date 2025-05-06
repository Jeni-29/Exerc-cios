const prompt = require("prompt-sync")()
// Ex1

function Calcular (valorA, valorB, tipo ){

    if(tipo == 1){
        Resultado= valorA + valorB
    } else if(tipo == 2){
        Resultado = valorB - valorA
    } else{
        Resultado = 0
    }
    return Resultado
}
let resultado 

//const valorA = Number(prompt("Escreva o primeiro valorA  "))
//const valorB = Number(prompt("Escreva o segundo valorB  "))
//const valorC = Number(prompt("Escreva a operação  "))

//resultado = Calcular( valorA, valorB, valorC );
//console.log( resultado)


//ex2

function ex2 ( valorA, valorB, escolha){

    if(escolha=="multiplicação"){
       return valorA*valorB 
    } else 
    if(escolha == "divisão"){
          return valorA/valorB
    } else if(escolha == "divisãoInteira"){
        return  Math.floor(valorA / valorB); // tras numeros inteiros 
    }
    
  
}

//resultado = ex2(2,5, "multiplicação")
//console.log( resultado)

//resultado = ex2(2,5, "divisão")
//console.log( resultado)

//resultado = ex2(5,3, "divisãoInteira")
//console.log( resultado)


// ex3
function ex3 (valorA, valorB, valorc){

    let divisão 
    let multiplicação

    if(valorc=="Resto%"){
        return  valorA % valorB
    } else if(valorc == "Sem%"){
        divisão= Math.floor(valorA/valorB) // isso daqui ira pegar o valorA/ValorB
        multiplicação = valorB*divisão
        return valorA - multiplicação
    }
    
}

//resultado = ex3(5,2, "Resto%")
////console.log(resultado)


//resultado = ex3(5,2, "Sem%")
//console.log(resultado)

//ex4

const valorA = Number(prompt("Qual tabuda:  "))
// "for" sempre no minimo tres parametros (inicio do loop, ate quando sera exexutado e o incremento)


/*for(let x =0; x<=10; x++){
    
resultado = multiplicar(valorA, x)
console.log(valorA + " x " + x + " = " + resultado)
}*/


// "while (Em quanto)" apenas um parametro 
let x = 0
while( x<=10){
    resultado = multiplicar(valorA, x)
    console.log(valorA + " x " + x + " = " + resultado )
    x++
}

function multiplicar (valorA, valorB, ){

    resultado = valorA*valorB
    return resultado


}

// lista composta de chave e "valor"
let nomeInteiro = { nome: "jenifer", sobrenome : "Santos", idade : 20}

console.log(nomeInteiro.nome)

//"key (chave)" 
for(let key in nomeInteiro){
    console.log(key, nomeInteiro[key] )
}