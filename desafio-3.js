var linguagensAprendidas = [];
var carreira;
var area;
var valorDoInput;

const listaDeBotoes = document.querySelectorAll('button');
const listaDeDivs = document.querySelectorAll('[data-perfil]');
const botaoAdicionarTecnologias = listaDeBotoes[8];
const botaoFinalizar = listaDeBotoes[9];

//Adicionando funcionalidade nos botões da primeira etapa:
for (let i = 0; i < 2; i++) {
    let botao = listaDeBotoes[i];
    let respostaDada = botao.value;
    let divAtual = listaDeDivs[0];
    let divSeguinte = listaDeDivs[i+1];

    function computarResposta () {
        area = respostaDada;
        divAtual.classList.add('hide');
        divSeguinte.classList.remove('hide');
    }

    botao.onclick = computarResposta
}

//Adicionando funcionalidade nos botões da segunda etapa:
const espacoParaMensagemTerceiraEtapa = document.querySelector('[data-paragrafo="mensagem-carreira"]')

for (let i = 2; i < 6; i++) {
    let botao = listaDeBotoes[i];
    let respostaDada = botao.value;
    if (i == 2 || i == 3) {
        var numDivAtual = 1;
    }
    else {
        var numDivAtual = 2;
    }
    let divAtual = listaDeDivs[numDivAtual];
    let divSeguinte = listaDeDivs[3];

    function computarResposta () {
        linguagensAprendidas.push(respostaDada);
        divAtual.classList.add('hide');
        divSeguinte.classList.remove('hide');
        espacoParaMensagemTerceiraEtapa.innerHTML = 'Legal! Até aqui você já escolheu a área de '+area+' e conseguiu aprender bastante sobre '+linguagensAprendidas[0]+'!'
    }

    botao.onclick = computarResposta;
}

//Adicionando funcionalidade nos botões da terceira etapa:
for (let i = 6; i < 8; i++) {
    let botao = listaDeBotoes[i];
    let respostaDada = botao.value;
    let divAtual = listaDeDivs[3];
    let divSeguinte = listaDeDivs[4];
    function computarResposta () {
        carreira = respostaDada;
        divAtual.classList.add('hide');
        divSeguinte.classList.remove('hide');
    }

    botao.onclick = computarResposta;
}

//Adicionando funcionalidade nos botões da quarta etapa:

const espacoParaMensagemNovaTecnologia = document.querySelector('[data-paragrafo="mensagem-nova-tecnologia"]');
const espacoParaMensagemFinal = document.querySelector('[data-paragrafo="mensagem-final"]');

function adicionarTecnologia () {
    let respostaDada = document.querySelector('[data-resposta="tecnologias-adicionais"]').value;
    if (respostaDada != 0) {
        linguagensAprendidas.push(respostaDada);
        let mensagemPersonalizada = 'Legal! Você adicionou '+respostaDada+' à sua trajetória Dev!';
        espacoParaMensagemNovaTecnologia.innerHTML = mensagemPersonalizada;
        document.querySelector('[data-resposta="tecnologias-adicionais"]').value = ''; //limpa o campo de input
    }
    else {
        espacoParaMensagemNovaTecnologia.innerHTML = 'Ops! Parece que você enviou uma resposta em branco.';
    }
}

botaoAdicionarTecnologias.onclick = adicionarTecnologia;



function finalizar () {
    var linguagensEmLinha = ''+linguagensAprendidas[0];
    let divAtual = listaDeDivs[4];
    let divSeguinte = listaDeDivs[5];
    for (i = 1; i < linguagensAprendidas.length; i++) {
        if (i < (linguagensAprendidas.length - 1)) {
            linguagensEmLinha += ', '+linguagensAprendidas[i];
        }
        else {
            linguagensEmLinha += ' e '+linguagensAprendidas[i];
        }
    }
    if (carreira == 'Fullstack') {
        espacoParaMensagemFinal.innerHTML = 'Muito bem! Durante a sua trajetória você escolheu tornar-se '+carreira+' e conseguiu aprender '+linguagensEmLinha+'! Parabéns!';
    }
    else {
        espacoParaMensagemFinal.innerHTML = 'Muito bem! Durante a sua trajetória você escolheu seguir se especializando em '+area+' e conseguiu aprender '+linguagensEmLinha+'! Parabéns!';
    }
    divAtual.classList.add ('hide');
    divSeguinte.classList.remove ('hide');
}

botaoFinalizar.onclick = finalizar;