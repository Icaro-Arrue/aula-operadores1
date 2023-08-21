17

/* exercício 1

a. false

b. false

c. true

d. boolean


exercício 2
os números não serão somados pois estarão em string ao invés de number

exercício 3
seria necessário utilizar o cast

const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

/* exercicio 1 escrita de código 
let idade = prompt("Qual a sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo(a)?")

const idadeMaior = Number(idade) > Number(idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

const diferencaIdade =  Number(idade) - Number(idadeMelhorAmigo)

console.log(diferencaIdade)

*/
//exercício 2

/*let numero = prompt("Insira um número PAR")
let divisor = 2

const resultado = Number(numero) % divisor

console.log(resultado)
*/

//c. sempre exibirá 0, pois não há´resto na divisão de numero par por 2
//d. o resultado será diferente de 0

/*let idadeAnos = prompt("Me diga sua idade")

const idadeMeses = Number(idadeAnos) * 12 
const idadeDias = (idadeMeses * 30) + 5
const idadeHoras = idadeDias * 24 

console.log("Você tem", idadeAnos, "anos de idade")
console.log("Você tem um total de", idadeMeses, "meses")
console.log("Você tem um total de", idadeDias, "dias")
console.log("Você tem um total de1", idadeHoras, "horas")
*/

let numeroPergunta = prompt("Digite um número")
let numeroPergunta2 = prompt("Digite mais um número")

const maior = Number(numeroPergunta) > Number(numeroPergunta2)
const igual = Number(numeroPergunta) == Number(numeroPergunta2)
const primeiroDivide = Number(numeroPergunta) / Number(numeroPergunta2)
const segundoDivide =  Number(numeroPergunta2) / Number(numeroPergunta)

console.log("O primeiro numero é maior que segundo?", maior)
console.log("O primeiro numero é igual ao segundo?", igual)
console.log("O primeiro numero é divisível pelo segundo?", primeiroDivide)
console.log("O segundo numero é divisível pelo primeiro?", segundoDivide)

//ps:nao consegui resoler o 4, tentei tirar o cast mas as duas ultimas continuam c numeros inves de booleanos. talez seja pq é quase 1h da manhã