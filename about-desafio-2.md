# Desafio 2

## Proposta

Neste desafio a ideia é praticar a captura e armazenamento de valores dentro de variáveis.

Para isso foi proposto o desenvolvimento de um programa com customização de acordo com dados fornecidos pelo usuário. O programa deve inicialmente fazer as seguintes 3 perguntas ao usuário:

* Qual o seu nome?
* Quantos anos você tem?
* Qual linguagem de programação você está estudando?

Ao obter as 3 respostas o sistema deve exibir a mensagem seguinte ao usuário, preenchendo com os dados fornecidos:

> "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

## Proposta adicional opcional

Foi proposto também como complementação a ideia de fazer uma nova pergunta após a exibição da mensagem anterior, que seria "Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO."

Então a partir da nova resposta exibir uma nova mensagem:

>1 > Muito bom! Continue estudando e você terá muito sucesso.

>2 > Ahh que pena... Já tentou aprender outras linguagens?

## Proposta de resolução

Com base nos conhecimentos que tenho até agora de base de html, JS e CSS decidi desenvolver o programa em forma de página web. Para focar na resolução do desafio em JS resolvi iniciar pelo desenvolvimento do código HTML simples, depois o JS e por fim o CSS para tornar minimamente apresentável o site. O foco aqui é o JS.

Para o HTML a ideia é criar algo simples, com um título para o programa, seguido dos inputs de texto com suas label para as perguntas. Ao final um botão de submit vai desencadear o processo de captura e armazenamento dos valores dentro das variáveis, para então exibir o primeiro texto com a customização e a pergunta seguinte, do desafio opcional.

Para fazer o desafio opcional penso em colocar um botão de submit para a resposta que irá desencadear uma função se o valor for igual a 1 ou igual a 2 (para evitar erro ao preencher o campo com valores diferentes disso). Dentro dessa função poderia criar uma condição em que se o valor for igual a 1 exibe a primeira mensagem, e do contrário seja exibida a segunda mensagem.

## Descrição da resolução final
