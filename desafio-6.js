//--Referências dos botões------------------------------
const botaoSim = document.querySelector('[data-input="b-sim"]');
const botaoNao = document.querySelector('[data-input="b-nao"]');
const botaoDesejaRemover = document.querySelector('[data-input="b-deseja-remover"]');
const botaoCadastrar = document.querySelector('[data-input="b-cadastrar"]');
const listaBotoesVoltar = document.querySelectorAll('[data-input="b-voltar"]');
const botaoRemover = document.querySelector('[data-input="b-remover"]');
const botaoResetar = document.querySelector('[data-input="b-resetar');

//--Referências de inputs---------------------------------
const inputCadastro = document.querySelector('[data-input="item"]')
const inputRemocao = document.querySelector('[data-input="remover-item"]')

//--Referências das divs---------------------------------
const divInicial = document.querySelector('[data-conteudo="p-inicial"]');
const divCadastro = document.querySelector('[data-conteudo="c-de-itens"]');
const divExibeListaFinal = document.querySelector('[data-conteudo="exibe-lista"]');
const divExibeListaRemocao = document.querySelector('[data-conteudo="r-itens"]');
const divConfirmaRemocao = document.querySelector('[data-conteudo="confirma-remocao"]');

//--Referências de espaços para mensagens personalizadas-----------
const mensagemInicial = document.querySelector('[data-mensagem="m-inicial"]');
const mensagemNovoItem = document.querySelector('[data-mensagem="m-novo-item"]');
const exibicaoDeListaRemocao = document.querySelector('[data-mensagem="imprime-lista-remocao"]');
const mensagemConfirmaRemoção = document.querySelector('[data-mensagem="m-confirma-remocao"]');
const exibicaoDeListaFinal = document.querySelector('[data-mensagem="imprime-lista-final"]');

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
    mostraElemento (divExibeListaFinal)
    imprimeLista (exibicaoDeListaFinal)
 }

function irParaRemocao () {
    escondeDivs ()
    mostraElemento (divExibeListaRemocao)
    imprimeLista (exibicaoDeListaRemocao)

}

function cadastrarItem () {
    let novoProduto = inputCadastro.value
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
    exibicaoDeListaFinal.innerHTML = ''
    exibicaoDeListaRemocao.innerHTML = ''
}

function resetar () {
    for (i = 0; i < listaCategorias.length; i++) {
        listaCategorias[i].length = 0
    }
    exibicaoDeListaFinal.innerHTML = ''
    escondeElemento (mensagemNovoItem)
    mostraElemento (mensagemInicial)
    escondeDivs ()
    mostraElemento (divInicial)
}

function removerItem () {
    let item = inputRemocao.value
    if (listaCategorias.every ((categoria) => !categoria.includes(item)) ){
        alert ('Parece que "'+item+'" não está na lista. Verifique a digitação e tente novamente')
    }
    else {
    listaCategorias.forEach (elemento => elemento.splice (item.indexOf(), 1))
    mensagemConfirmaRemoção.innerHTML = 'Tudo certo! "'+item+'" foi removido da lista.'
    escondeDivs ()
    resetaCampos ()
    mostraElemento (divConfirmaRemocao)
    }
}

//--Funções auxiliares-------------------------------------------

function resetaCampos () {
    inputCadastro.value = ''
    inputRemocao.value = ''
}

function imprimeLista (onde) {
    for (i = 0; i < listaCategorias.length; i++) {
        let arrayCategoria = listaCategorias[i]
        let nomeDaCategoria = listaNomesDeCategorias[i]
        if (arrayCategoria != 0){
            onde.innerHTML += '<p>'+nomeDaCategoria+': '+arrayCategoria+'.'
            onde.innerHTML = onde.innerHTML.replaceAll (",", ", ")
        }
    }
}

//--Atribuindo funções aos botões
botaoSim.onclick = irParaCadastro
botaoNao.onclick = irParaFinal
botaoDesejaRemover.onclick = irParaRemocao
botaoCadastrar.onclick = cadastrarItem
botaoRemover.onclick = removerItem
botaoResetar.onclick = resetar
for (i = 0; i < listaBotoesVoltar.length; i++) {
    listaBotoesVoltar[i].onclick = voltarAoInicio
}