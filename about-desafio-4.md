# Desafio 4

## Proposta

A proposta do desafio 4 é criar um jogo em que o usuário tenta adivinhar o número de 0 a 10 em que o computador está "pensando". O usuário terá 3 tentativas para tentar acertar. Caso acerte, uma mensagem de parabenização aparecerá. Caso use as 3 tentativas, outra mensagem aparecerá, revelando o número inicial.
A proposta inicial é fazer o programa com um número pre-definido por mim. Depois de tudo certo, a ideia é usar um número randômico como resposta.

## Proposta de resolução

Para este desafio iniciarei desenvolvendo o HTML, com:
1. Título.
2. Mensagem inicial desafiando o jogador.
3. Campo para digitar o número arriscado.
4. Botão enviar resposta.
5. Parágrafo em branco para mensagem personalizada inserida por Javascript para cada situação.
6. Contador de tentativas restantes.

Para o arquivo JS penso em:
1. Declarar variável contendo número alvo.
2. Declarar variável de contagem de tentativas.
3. Criar função desencadeada pelo botão *enviar*.
4. Atribuir função ao botão.

O algoritmo desencadeado pela função será:
1. Captura valor do input.
2. Adiciona 1 ao contador de tentativas.
3. Se tentativa igual ao número alvo:

    3.1. Apresenta mensagem de parabenização
    3.2. Apresenta mensagem exibindo quantas tentativas foram usadas
    3.3. Apresenta botão de recomeçar

4. Se o passo *3* retornar *false*:
    
    4.1. Se numero de tentativas igual a 3:

        4.1.1. Apresenta mensagem de aviso, apresentando o número correto.
        4.1.2. Apresenta botão de recomeçar.
    
    4.2. Se o passo *4.1.* retornar *false*:

        4.2.1. Apresenta mensagem personalizada refoçando número de tentativas restantes

## Descrição da resolução final

...