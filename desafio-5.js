//--Referências dos botões------------------------------

const botaoSim = document.querySelector('[data-input="b-sim"]')
const botaoNao = document.querySelector('[data-input="b-nao"]')
const botaoCadastrar = document.querySelector('[data-input="b-cadastrar"]')
const botaoVoltar = document.querySelector('[data-input="b-voltar"]')
const botaoContinuarAdicionando = document.querySelector('[data-input="b-voltar-ao-inicio"]')
const botaoResetar = document.querySelector('[data-input="b-resetar')

//--Referências das divs---------------------------------
const divInicial = document.querySelector('[data-conteudo="p-inicial"]')
const divCadastro = document.querySelector('[data-conteudo="c-de-itens"]')
const divExibeLista = document.querySelector('[data-conteudo="exibe-lista"]')

//--Referências de espaços para mensagens personalizadas-----------
const mensagemInicial = document.querySelector('[data-mensagem="m-inicial"]')
const mensagemNovoItem = document.querySelector('[data-mensagem="m-novo-item"]')
const exibicaoDeLista = document.querySelector('[data-mensagem="imprime-lista"]')

//--Definição das categorias e Arrays para refenciá-las------------
var Frutas = []
var Laticínios = []
var Congelados = []
var Doces = []
var Limpeza = []
var Higiene = []
var Bebidas = []
var Panificação = []
var Outros = []
var listaCategorias = [Frutas, Laticínios, Congelados, Doces, Limpeza, Higiene, Bebidas, Panificação, Outros]
var listaNomesDeCategorias = ['Frutas', 'Laticínios', 'Congelados', 'Doces', 'Limpeza', 'Higiene', 'Bebidas', 'Panificação', 'Outros']

//__FUNÇÕES_______________________________________________________
//--Funções de exibição--------------------------------------------
function escondeDivs () {
    let listaDeDivs = document.querySelectorAll('[data-conteudo]')
    for (i = 0; i < listaDeDivs.length; i++) {
        listaDeDivs[i].classList.add ('hide')
    }
}

function mostraElemento (elemento) {
    elemento.classList.remove ('hide')
}

function escondeElemento (elemento) {
    elemento.classList.add ('hide')
}

//--Funções para os botões-------------------------------------------
function irParaCadastro () {
    escondeDivs ()
    mostraElemento (divCadastro)
}

function irParaFinal () {
    escondeDivs ()
    mostraElemento (divExibeLista)
    imprimeLista ()
 }
function cadastrarItem () {
    let novoProduto = document.querySelector('[data-input="item"]').value
    categoriaNovoProduto = document.querySelector('[data-categoria]:checked').dataset.categoria
    listaCategorias[categoriaNovoProduto].push (novoProduto)
    voltarAoInicio ()
    escondeElemento (mensagemInicial)
    mostraElemento (mensagemNovoItem)
 }

function voltarAoInicio () {
    escondeDivs ()
    mostraElemento (divInicial)
    resetaCampos ()
    exibicaoDeLista.innerHTML = ''
}

function resetar () {
    for (i = 0; i < listaCategorias.length; i++) {
        listaCategorias[i].length = 0
    }
    exibicaoDeLista.innerHTML = ''
    escondeElemento (mensagemNovoItem)
    mostraElemento (mensagemInicial)
    escondeDivs ()
    mostraElemento (divInicial)
}

//--Funções auxiliares-------------------------------------------

function resetaCampos () {
    document.querySelector('[data-categoria]:checked').checked = false
    document.querySelector('[data-input="item"]').value = ''
}

function imprimeLista () {
    for (i = 0; i < listaCategorias.length; i++) {
        let arrayCategoria = listaCategorias[i]
        let nomeDaCategoria = listaNomesDeCategorias[i]
        if (arrayCategoria != 0){
            exibicaoDeLista.innerHTML += '<p>'+nomeDaCategoria+': '+arrayCategoria
            exibicaoDeLista.innerHTML = exibicaoDeLista.innerHTML.replaceAll (",", ", ")
        }
    }
}

//--Atribuindo funções aos botões
botaoSim.onclick = irParaCadastro
botaoNao.onclick = irParaFinal
botaoCadastrar.onclick = cadastrarItem
botaoVoltar.onclick = voltarAoInicio
botaoContinuarAdicionando.onclick = voltarAoInicio
botaoResetar.onclick = resetar
