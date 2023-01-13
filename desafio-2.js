function respondePrimeirasPerguntas () {
    const nomeDoUsuario = document.querySelector('[data-pergunta="nome"]').value;
    const idadeDoUsuario = document.querySelector('[data-pergunta="idade"]').value;
    const linguagemAprendida = document.querySelector('[data-pergunta="linguagem"]').value;
    document.querySelector('.resposta-do-bot').innerHTML = 'Olá '+nomeDoUsuario+'! Você tem só '+idadeDoUsuario+' anos e já está aprendendo '+linguagemAprendida+'!'
    document.querySelector('[data-conteudo="primeira-resposta"]').classList.remove('hide')
    document.querySelector('[data-conteudo="segunda-pergunta"]').classList.remove('hide')
    document.querySelector('[data-conteudo="primeiras-perguntas"]').classList.add('hide')
}

document.querySelector('[data-botao="primeiras-perguntas"]').onclick = respondePrimeirasPerguntas
