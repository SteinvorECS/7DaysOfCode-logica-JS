function respondePrimeirasPerguntas () {
    const nomeDoUsuario = document.querySelector('[data-pergunta="nome"]').value;
    const idadeDoUsuario = document.querySelector('[data-pergunta="idade"]').value;
    const linguagemAprendida = document.querySelector('[data-pergunta="linguagem"]').value;
    document.querySelector('[data-enxerto="primeira-resposta"]').innerHTML = 'Olá '+nomeDoUsuario+'! Você tem só '+idadeDoUsuario+' anos e já está aprendendo '+linguagemAprendida+'!';
    document.querySelector('[data-enxerto="pergunta-gosto"]').innerHTML = 'Você gosta de estudar '+linguagemAprendida+'? Responda com o número 1 para SIM ou 2 para NÃO.';
    document.querySelector('[data-conteudo="primeira-resposta"]').classList.remove('hide');
    document.querySelector('[data-conteudo="segunda-pergunta"]').classList.remove('hide');
    document.querySelector('[data-conteudo="primeiras-perguntas"]').classList.add('hide');
}

function respondeSegundaPergunta () {
    const gostaOuNao = document.querySelector('[data-pergunta="gosto"]').value;
    if (gostaOuNao === '1' || gostaOuNao === '2') {
        if (gostaOuNao === '1') {
            document.querySelector('[data-enxerto="segunda-resposta"]').innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.'
        }
        else {
            document.querySelector('[data-enxerto="segunda-resposta"]').innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?'
        }

        document.querySelector('[data-conteudo="primeira-resposta"]').classList.add('hide');
        document.querySelector('[data-conteudo="segunda-pergunta"]').classList.add('hide');
        document.querySelector('[data-conteudo="segunda-resposta"]').classList.remove('hide');
    }
}

document.querySelector('[data-botao="primeiras-perguntas"]').onclick = respondePrimeirasPerguntas

document.querySelector('[data-botao="segunda-pergunta"]').onclick = respondeSegundaPergunta
