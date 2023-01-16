# Desafio 3

## Proposta

A proposta do desafio 3 é desenvolver um "jogo" em que o usuário pode tomar diferentes decisões ao longo do trajeto, que alteram o caminho a frente. Ou seja, dependendo da resposta dada a uma decisão, a proposta seguinte seria diferente. Para isso derão necessárias estruturas que alteram o fluxo da aplicação, como *if*, *else*, *for* e *while*.

Segue a transcrição do desafio:

> "Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
>
> 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
>
> 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
>
> 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
>
> 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
>
>O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.
>
>Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado."

## Proposta de resolução

Inicalmente, para ter uma visão menos abstrata do projeto final, fiz um fluxograma com as perguntas e possiblidades de resposta de cada etapa. Assim, a estrutra básica poderia ser descrita como:
1. A pergunta 1 tem opções ***a*** ou ***b***.
2. Se escolhida opção ***a*** levaria à pergunta ***2a*** (com opções ***A*** ou ***B***), e opção ***b*** para pergunta ***2b*** (com opções ***X*** ou ***Y***)
3. Todas as respostas das perguntas ***"2"*** levariam à mesma pergunta ***3a***, mas nesse ponto teríamos 4 "perfis" diferentes de jogadores: ***aA***, ***aB***, ***bX*** ou ***bY***. A pergunta ***3a*** (especializar ou seguir para Fullstack), teria as opções ***q*** ou ***r***.
4. As respostas da pergunta anterior levariam todas para a mesma pergunta ***4a*** (se deseja aprender mais alguma tecnologia), com resposta aberta. Nesse ponto, cada resposta deve retornar para a mesma pergunta ***4a***, a não ser que responda "não".
5. Quando o usuário responder com "não" à pergunta ***4a***, o jogo será finalizado, com uma mesngagem apresentando todas as linguagens aprendidas no caminho.

Observando a estrutura do programa inteiro, percebo que cada etapa tem uma estrutura bem semelhante:
1. Uma pergunta é feita ao usuário.
2. Um campo de *input* é exibido para que o usuário responda.
3. A resposta dada é uma linguagem de programação ou tecnologia (exceto na pergunta ***3a***, e quando o usuário responder "Não" ao final do jogo).
4. Uma mensagem personalizada é exibida.
5. Passa para uma nova pergunta.

Tendo em mente os passos acima, penso em criar um função, dentro de uma estrutra de repetição, que armazene o valor da resposta dada dentro de uma *array*, a não ser que o valor seja idêntico a 'Fullstack', 'Seguir se especializando', ou 'Não'.

Para exibir a pergunta e as opções corretas, e a mensagem personalizada corretamente, penso em criar uma array contendo as perguntas para cada etapa, outra para as opções e outra para as mensagens.

O algortimo proposto inicia então na hora do input, com os seguintes passos:
1. Captura do valor do input
2. Se valor diferente de 'Fullstack', 'Seguir se especializando', ou 'Não':

    2.1. Armazenar na lista de Linguagens

    2.2. Buscar mensagem personalizada da lista de mensagens e exibir

    2.3. Buscar próxima pergunta da lista de perguntas e exibir

    2.4. Buscar opção 1 da lista de opções e exibir campo de input

    2.5. Buscar opção 2 da lista de opções e exibir campo de input
3. Se passo 2 retornar false:

    3.1. Se valor indêntico a 'Fullstack' ou 'Seguir se especializando':
    
        3.1.1. Armazenar na variável de opção de carreira
        3.1.2. Buscar mensagem personalizada da lista de mensagens e exibir
        3.1.3. Buscar próxima pergunta da lista de perguntas e exibir
        3.1.4. Buscar opção 1 da lista de opções e exibir campo de input
        3.1.5. Buscar opção 2 da lista de opções e exibir campo de input
    3.2. Se passo 3.1. retornar false (significa que é idêntico a 'Não'):

        3.2.1. Buscar mensagem personalizada de final de jogo na lista de mensagens para exibir.
        3.2.1. Exibir botão de "reiniciar".

## Descrição da resolução final

Após iniciar a composição do HTML e começar com esboço de Javascript, percebi que a resolução proposta inicialmente acabaria deixando quase todo o HTML dentro do código JS. Isso porque cada resposta acionaria um destino diferente e precisaria fazer enxerto de um trecho de html diferente. Nesse caso, o HTML ficaria praticamente só com um parágrafo onde seriam inseridas as perguntas, 2 inputs onde seriam colocadas as opções, e mais um parágrafo para inserção de mensagem customizada. Para evitar isso acabei optando por outra solução, após algumas tentativas e mudanças.

Inicialmente deixei o HTML com praticamente todo o texto, com as perguntas e botões para opções, separando cada etapa em *divs*. Assim, a cada etapa o comando levaria à exibição da div correta para a etapa seguinte (através da inserção e remoção de uma classe "hide").

No arquivo JS, iniciei como planejado criando uma *array* guardar a informação de tecnologias escolhidas pelo usuário ao longo do jogo. Também criei uma variável para guardar a resposta  de área escolhida (Front ou Back-End) e outra para resposta à carreira (Fullstack ou especializando-se na área escolhida).

Depois, para organização do código, armazenei as referências para botoes e divs em variáveis com os nomes adequados.

Em seguida, criei as funções para cada botão e atribuí, usando laços *for*.

>Usei um laço para os primeiros 2 botões (alternativas à primeira pergunta), que levariam à segunda ou terceira *div*, e armazenariam a resposta em "área".

>Um outro laço para os botões da segunda etapa, que levariam à quarta *div*, e armazenariam os valores na lista de linguagens aprendidas. Aqui coloquei uma personalização da mensagem inicial da terceira etapa, incluindo a área escolhida e a linguagem aprendida.

>Na terceira etapa criei mais um laço para função dos dois botões que armazenariam o dado de "carreira" e levariam à quinta *div*, a última etapa.

>Na última etapa cada botão tinha funcionalidades diferentes, por isso criei um função para cada.
>>O primeiro deles era um botão *enviar* com input de texto ao lado, que captura então o valor digitado e adiciona à lista de linguagens. Esse botão também altera o parágrafo logo abaixo alertando que a tecnologia foi adicionada à lista. Ao usar este botão o usuário continua na mesma *div*, com possibilidade de ir adicionando quantas tecnologias quiser.
>
>>O Segundo botão desta etapa foi o botão de finalizar. Quando acionado, o código cria uma string com todas as linguagens aprendidas listadas, para juntar a um texto personalizado exibindo no fim todas as escolhas do usuário, como uma mensagem de parabenização por ter chegado ao fim.

A solução final ficou bastante diferente da proposta inicial, apesar de o algoritmo manter alguns trechos parecidos, como a captura e armazenaento das informações. A parte mais personalizada para cada etapa usando JS foi deixada de lado para evitar a presença de muit código HTML dentro do arquivo JS. Ainda assim, pretendo no futuro criar uma nova versão da solução, seguindo a proposta inicial para poder comparar as duas alternativas.