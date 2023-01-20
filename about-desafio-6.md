# Desafio 6

## Proposta

A proposta do desafio 6 é adicionar mais uma funcionalidade ao programa do desafio 5: a exclusão de itens da lista.

    "Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de 'você deseja adicionar uma comida na lista de compras'?
    
    A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
    
    Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
    
    Por fim, ele voltará para o ciclo inicial de perguntas.
    
    Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
    
    Por exemplo: 'Não foi possível encontrar o item dentro da lista!'
    
    Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras."

## Proposta de resolução

Vou começar atualizando o *html* do projeto anterior com duas novas *divs*. A primeira para função de remoção do item, e a segunda com a exibição da confirmação de que o item foi removido.
Em seguida adicionarei os botões ao *html*: botão de "remover item da lista" na *div* inicial, botao de "enviar" e botão de "voltar" na *div* de remoção, e botão de "continuar" na *div* de confirmação da remoção. Também adicionarei o campo de input para digitar o item a ser removido. 

No código JS, iniciarei pelo referenciamento dos botões, e depois criando as funções de ir para página de remoção exibindo a lista com os itens adicionados até o momento, e a função de remoção em si.

Para a função de remoção, os passos serão os seguintes:
1. Capturar o valor fornecido pelo usuário no input. 
2. Comparar com a lista registrada
3. Se o valor de input fornecido não estiver na lista - exibir alerta
4. Se a condição acima retornar *false*:

    4.1. Remover o item da lista;

    4.2. Esconder a *div* de remoção;
    
    4.3. Criar a mensagem personalizada confirmando a remoção;
    
    4.4. Exibir a *div* de confirmação com a mensagem formada;


## Descrição da resolução final

A resolução deste desafio ficou como a descrita acima, sem alterações significativas.