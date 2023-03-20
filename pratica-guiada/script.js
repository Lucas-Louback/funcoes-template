// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
console.log("Parte 1 -----")
function cumprimentar (nome){
    console.log(`Olá ${nome}!`)
}
const nome1 = prompt("qual o seu nome?")
const nome2 = prompt("qual o seu nome?")
const nome3 = prompt("qual o seu nome?")
cumprimentar(nome1)
cumprimentar(nome2)
cumprimentar(nome3)

console.log("Parte 2 -----")

function operacoes (numero) {
    const verifica = (numero %2 ===0)
    const soma = numero + 10
    const multiplicacao = numero * numero
    return(`O núemro ${numero} é par? ${verifica}. Somando com 10 o resultado é ${soma} e multiplicando por ele mesmo o resultado é${multiplicacao}`)
}
let x =Number( prompt("Escolha um número") )

const retorno = operacoes(x)
console.log(retorno)

console.log("Parte 3 -----")

function acesso (loginArmazenado, senhaArmazenada){
    const login = (loginArmazenado==="Lucas Louback")
    const senha = (senhaArmazenada==="12345") 
    return (`O login está correto? ${login}. A senha está correta? ${senha}`)
}
const loginTeste = prompt ("Qual o seu login?") 
const senhaTeste = prompt("Qual a senha?")
const retorno2 = acesso(loginTeste, senhaTeste)
console.log(retorno2)

console.log("Parte 4 (Exercicio) -----")

function maioridade (nomeProprio, nascimento, anoAtual){
    const nome = (nomeProprio)
    const anoNascimento = (nascimento)
    const ano = (anoAtual)
    const maior = ano-anoNascimento >= 18
    const idade = ano-anoNascimento
    return (`${nome} é maior de idade? ${maior}. A idade de ${nome} é ${idade}`)  
}

const nomeResposta = prompt("Qual o seu nome?")
const anoNascimentoResposta = prompt("Qual o ano do seu nascimento?")
const anoResposta = prompt("Qual o ano atual?")
const resposta = maioridade(nomeResposta, anoNascimentoResposta, anoResposta)
console.log(resposta)


