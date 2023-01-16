function criarInput () {
    for (i = 1; i < 10; i++) {
        let categoria = '<li><input type="radio" name="categorias" id="c-'+i+'"><label for="c-'+i+'"></label></li>';
        console.log (categoria)
    }
}

function checar () {
var radioSelecionado = document.querySelector('input[name="categorias"]:checked')
console.log (radioSelecionado)
}

function mostrarTudo () {
    let listaDeElementos = document.querySelectorAll('button, p, label, div')
    for (i = 0; i < listaDeElementos.length; i++) {
        listaDeElementos[i].classList.remove ('hide')
    }
}

function criarCategoria () {
    let inputsDeCategorias = document.querySelectorAll('input[name="categorias"]')
    for (i = 0; i < inputsDeCategorias.length; i++) {
        let nomeCategoria = inputsDeCategorias[i].dataset.categoria
        console.log ('var '+nomeCategoria) 
    }
}

//-------Início do código------------------------------

var Frutas = []
var Laticínios = []
var Congelados = []
var Doces = []
var Limpeza = []
var Higiene = []
var Bebidas = []
var Panificação = []
var Outros = []

