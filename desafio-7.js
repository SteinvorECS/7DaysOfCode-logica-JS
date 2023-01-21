//--Referências das div---------------------------------
const listaDeDivsJS = document.querySelectorAll('[data-conteudo]')
const divOperacao = document.querySelector('[data-conteudo="define-operacao"]')
const divEscolhaNumeros = document.querySelector('[data-conteudo="define-numeros"]')
const divResultados = document.querySelector('[data-conteudo="resultados"]')
const divFim = document.querySelector('[data-conteudo="fim"]')

//--Referências para campos de mensagem-----------------

const mensagemOperacao = document.querySelector('[data-mensagem="operação"]')
const mensagemResultados = document.querySelector('[data-mensagem="resultados"]')

//--Referências inputs ---------------------------------

const botaoSoma = document.querySelector('[data-botao="b-soma"]')
const botaoSubtracao = document.querySelector('[data-botao="b-subtracao"]')
const botaoMultiplicaco = document.querySelector('[data-botao="b-multiplicacao"]')
const botaoDivisao = document.querySelector('[data-botao="b-divisao"]')
const botaoSair = document.querySelector('[data-botao="b-sair"]')
const botaoCalcular = document.querySelector('[data-botao="b-calcular"]')
const botaoVoltar = document.querySelector('[data-botao="b-voltar"]')
const botaoApagarHistorico = document.querySelector('[data-botao="b-apagar"]')

const inputA = document.querySelector('[data-input="primeiro-numero"]')
const inputB = document.querySelector('[data-input="segundo-numero"]')

//==CÓDIGO==========================================

var operacao
var sinalDaOperacao = ''
var numeroA
var numeroB
var resultado

//--Mostrar e esconder elementos--------------------

function mostraElemento (elemento) {
    elemento.classList.remove('hide')
}

function escondeElemento (elemento) {
    elemento.classList.add('hide')
}

//--Operações---------------------------------------
function soma (a, b) {
    resultado = a + b;
}

function subtracao (a, b) {
    resultado = a - b;
}

function multiplicacao (a, b) {
    resultado = a * b;
}

function divisao (a, b) {
    resultado = a / b;
}

//--Gerando mensagens----------------------------

function mostrarSinal (sinal) { //mostra o sinal da operação entre os dois inputs
    sinalDaOperacao = sinal
    mensagemOperacao.innerHTML = sinalDaOperacao
}

function mostrarResultado () {
    mensagemResultados.innerHTML = '<p>'+numeroA+' '+sinalDaOperacao+' '+numeroB+' = '+resultado+mensagemResultados.innerHTML
    mostraElemento (divResultados)
}

//--Funções dos botões---------------------------------------

function sair () {
    escondeElemento (divOperacao)
    escondeElemento (divResultados)
    mostraElemento (divFim)
}

function escolheSoma () {
    operacao = soma
    mostrarSinal ('+')
    escondeElemento (divOperacao)
    mostraElemento (divEscolhaNumeros)
}

function escolheSubtracao () {
    operacao = subtracao
    mostrarSinal ('-')
    escondeElemento (divOperacao)
    mostraElemento (divEscolhaNumeros)
}

function escolheMultiplicacao () {
    operacao = multiplicacao
    mostrarSinal ('x')
    escondeElemento (divOperacao)
    mostraElemento (divEscolhaNumeros)
}

function escolheDivisao () {
    operacao = divisao
    mostrarSinal ('/')
    escondeElemento (divOperacao)
    mostraElemento (divEscolhaNumeros)
}

function calcular () {
    numeroA = parseFloat(inputA.value)
    numeroB = parseFloat(inputB.value)
    operacao (numeroA, numeroB)
    mostrarResultado()
}

function voltar () {
    escondeElemento (divEscolhaNumeros)
    mostraElemento (divOperacao)
}

function apagarHistorico () {
    mensagemResultados.innerHTML = ''
}

//--Atribuindo funções aos botões

botaoSair.onclick = sair
botaoSoma.onclick = escolheSoma
botaoSubtracao.onclick = escolheSubtracao
botaoMultiplicaco.onclick = escolheMultiplicacao
botaoDivisao.onclick = escolheDivisao
botaoCalcular.onclick = calcular
botaoVoltar.onclick = voltar
botaoApagarHistorico.onclick = apagarHistorico