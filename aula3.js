//Exercício 1
/*var a = "string"
var b = true
var c = 559

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c)) */

//Exercício 2

/*let primeiro_nome = "Gabriel"
let ultimo_nome = "Rosa"

let soma = primeiro_nome + " " + ultimo_nome

let template = `${primeiro_nome} ${ultimo_nome}`

console.log(soma)
console.log(template) */

//Exercício 3
/*
a = 1
b = "textoLegal"
c = `${a} ${b}`

console.log(c) */

//Exercício 4
/*
a = 1
console.log(a)
a = 2
console.log(a) */

//Exercício 5
/*
var a = 5

if(true){
var b = 3
console.log(a)
console.log(b)
}

console.log(a)
console.log(b)


let c = 10

if(true){
let d = 15 
console.log(c)
console.log(d)
}

console.log(c)
console.log(d)  */ // deu erro falou que "d" is not defined

//Exercício 6
/*
esta_chovendo = false

if (esta_chovendo == true){
    console.log("Sim, está chovendo leve guarda-chuva")
}
if (esta_chovendo == false){
    console.log("Não está chovendo, não leve guarda-chuva")
}

*/

//Exercício 7
/*
n1 = 8
n2 = 9
n3 = 5.5

media = (n1 + n2 + n3)/3

console.log("A média é:", media)
*/

//Exercício 8
/*
base = 10
altura = 20

area = (base * altura)/2

console.log(area) */

//Exercício 9
/*
raio = 3
area = Math.PI * Math.pow(raio,2)

console.log(area)
*/

//Exercício 10
/*
v = 135
i = 5

r = v/i

console.log(r) */

//Exercício 11
/*
salarioBruto = 1000
salarioLiquido = salarioBruto*0.8
console.log(salarioLiquido) */

//Exercicio 12
/*
litro = 100
valgal = 5.5

gasto = litro*valgal
console.log(gasto) */

//Exercicio 13
/*
const potenciaWatts = 1750
const potenciaKW = potenciaWatts / 1000
const horasPorDia = 8
const diasPorMes = 25
const custoPorKWh = 0.75
const consumoMensalKWh = potenciaKW * horasPorDia * diasPorMes
const custoMensal = consumoMensalKWh * custoPorKWh

console.log(custoMensal) */

//Exercício 14

/*
const nota1 = 9
const nota2 = 8
const nota3 = 7

const media = (nota1 + nota2 + nota3) / 3

var status
if (media >= 6) {
    status = 'Aprovado'
} else if (media > 4 && media < 6) {
    status = 'Exame'
} else {
    status = 'Reprovado'
}

console.log('Média:', media)
console.log('Status:', status) */

//Exercício 15
const peso = 70 // peso em quilogramas
const altura = 1.75 // altura em metros

const imc = peso / (altura * altura)

let classificacao
if (imc < 18.5) {
    classificacao = 'Abaixo do peso'
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = 'Peso normal'
} else if (imc >= 25 && imc < 29.9) {
    classificacao = 'Sobrepeso'
} else {
    classificacao = 'Obesidade'
}

console.log('IMC:', imc)
console.log('Classificação:', classificacao)
