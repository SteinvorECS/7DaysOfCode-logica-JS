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

A resolução final deste desafio ficou bastante parecida com a plejada anteriormente. Segue uma descrição com as principais diferenças.

No HTML depois de iniciar com o título criei 3 *divs* diferentes para os diferentes cenários do jogo.
1. Divisão com conteúdo do jogo em si (frase inicial desafiando o jogador, input para número, botão de *enviar*, mensagem de palpite errado, contador de tentativas restantes)
2. Divisão com conteúdeo de "vitória" (com frase de parabéns e botão de *Recomeçar*)
3. Divisão com contéudo de "derrota" (Com mensagem revelando o número correto e botão de *Recomeçar*)

No código JS:
1. Criei as variaveis de número correto e número de tentativas
2. Criei as referências dos botões, das *div*, e dos locais de inserção de texto personalizado.
3. Criei funções para esconder *div* inserindo classe "hide", mostrar *div* fazendo o oposto, e função de limpar o campo de Input.
4. Criei a função de palpite, associada depois ao botão de enviar. A função:

    4.1. Registra o palpite em uma variável

    4.2. Atualiza o contador de tentativas

    4.3. Atualiza a mensagem de tentativas restantes

    4.4. Se o palpite for correto, esconde a *div* de jogo e mostra a *div* de vitória atualizando a mensagem com número de tentativas usadas.

    4.5. Se a contagem de palpites chegar a 3 sem acertar, esconde a *div* de jogo e mostra a *div* de derrota, atualizando a mensagem com o número correto.

    4.6. Se o palpite for incorreto e a contagem de palpites for diferente de 3, atualiza a mensagem personalizada de tentativa com o número arriscado ("X não é o número em que estou pensando..."), e limpa o campo de input.

5. Criei a função de recomeçar, que zera o número de tentativas, reseta os campos personalizados e esconde as outras *div*, mostrando a *div* de jogo.

6. Associei as funções aos botões.