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

Iniciei com a criação do html atualizando o title, um h1 e um parágrafo para apresentação do programa. Em seguida fiz uma div para as perguntas iniciais e fiz as tags de label e input. Também adicionei botões de "Enviar" para as duas etapas do programa, e criei data-atributes para linkar os elementos necessários no Java. Além disse, criei a classe "hide" para colocar nas divs que ficariam ocultas inicialmente, e para fazer possibilitar a mudança dinamica na página em cada etapa.

Na segunda div, para a resposta do programa, veio o primeiro desafio. Como preparar o html para receber o texto formulado pelo JS. Como ainda não havia aprendido isso fui pesquisar. Ao pesquisar por informações sobre a tag *output*, que ainda não conhecia, acabei descobrindo a possibilidade de mudar o conteúdo de um elemento do html utilizando a propriedade ***".innerHTML"***. Resolvi testá-la. Deixei então a segunda div com um parágrafo em branco e uma input com label em branco também, para preencher com uma função no JS ao clicar no botão submit. O input e label são para a pergunta do desafio opcional. Fiz o mesmo para a última div, da resposta para a segunda pergunta.

Em seguida, iniciei o desenvolvimento do arquivo JS para solução do desafio. Inicialmente me bati um pouco para definir como ajustar a função e o evento de clique no botão desencadeando-a, mas a solução final ficou simples. Comecei criando a função que seria chamada ao clicar no botão da primeira etapa. Esta função começa com a captura dos valores colocados pelo usuário dentro dos inputs e atribuindo às variáveis *nomeDoUsuario*, *idadeDoUsuario* e *linguagemAprendida*. Em seguida altera a propriedade *innerHTML* do parágrafo e da label na segunda div, criando a frase com os valores capturados inseridos nos devidos lugares. Por fim, adiciona a classe "hide" à primeira div e remove-a das div que contem a primeira resposta e segunda pergunta. Ao final inseria função desenvolvida no atributo *onclick* do primeiro botão

Para o código JS do desafio adicional criei outra função, com a condição de que o valor preenchido no input pelo usuário seja idêntico a '1' ou '2'. Sendo o retorno *true*, a condição seguinte foi de que se o valor fosse identico a '1' seria adicionada a frase 1 ao html. Se o retorno da segunda condição fosse *false* (o que nesse caso significa que o valor é idêntico a '2'), adicionaria a frase 2 ao html.

Para finalizar, desenvolvi o código CSS para estilizar a página e definir a classe "hide" com "display = none", para o efeito comentado acima.