# Desafio 5

## Proposta

A proposta deste desafiso é a criação de um aplicativo onde o usuário pode fazer uma lista de compras, separando por tipos, para facilitar sua organização ao ir ao mercado. O programa deve iniciar perguntando ao usuário se deseja adicionar um item à lista de compras, respondendo *sim* ou *não*.

Caso responda sim, o programa pergunta qual item deseja inserir na lista. Depois o programa deverá perguntar em que categoria o item de encaixa, com algumas opções pre-definidas. depois disso o programa volta à pergunta inicial para inserção de mais itens.

Quando o usuário responder não à pergunta inicial, o programa mostra na tela a lista de compras separada por categorias.

## Proposta de resolução

Irei iniciar pelo HTML, criando 3 divs.
1. Pergunta inicial com botões de *sim* e *não*.
2. Campo para inserção de novo item, inputs de tipo *radio* para seleção da categoria do item, e botão de *enviar*. Os inputs *radio* terão o mesmo atributo *name*, e valores correspondentes ao mostrado na própria *label*, que será também o nome da *array* no código JS.
3. Exibição da lista com botões de apagar e fazer nova lista e botão de continuar adicionando itens à lista.

No código JS pretendo começar declarando as variáveis de categorias na forma de *arrays* vazias. Em seguida, criarei as referências para os botões e para os inputs.

Para a resposta da primeira pergunta criarei as funções atribuidas ao botão *sim* e ao *não*. A primeira função com a ação de esconder a *div* de pergunta inicial e mostrar a de descrição do novo item. A segunda com função de esconder a *div* para mostrar a *div* de exibição da lista, e com comando para inserção das listas de cada categoria no HTML.

Depois disso criarei a função do botão *enviar*, com os seguintes passos:
1. Capturar valor de input de *item* em variável separada.
2. Capturar o valor de input *categoria* em variável separada.
3. Atribuir variável de input à array com nome igual à categoria selecionada
4. Esconder *div* atual
5. Mostrar *div* da pergunta inicial

Por fim criarei as funções dos botões recomeçar (resetando todas as variáveis), e de voltar para a *div* de cadastro de *item* sem apagar dados.
## Descrição da resolução final

...