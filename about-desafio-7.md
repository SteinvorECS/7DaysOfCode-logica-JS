# Desafio 7

## Proposta

A proposta do desafio 7 tem o intuito de levar a praticar a organização melhor do código. A idéia é criar uma calculadora, como forma de praticar criar pequenos blocos de código separados. Logo, cada função da calculadora deve ser uma função diferente.

Foi proposto que a ordem dos eventos deve ser a seguinte:
1. A pessoa escolhe uma opção de operação mostrada pelo programa na tela
2. A pessoa insere os dois valores que deseja utilizar
3. O programa imprime o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

## Proposta de resolução

#### - HTML

Para o HTML neste caso usarei três *div*. A primeira com a introdução e perguntando ao usuário qual a operação que deseja realizar, com os 5 botões ao final (soma, subtração, multiplicação, divisão, e sair).

Na segunda *div* após a mensagem pedindo para o usuário inserir os dois números que gostaria de utilizar na operação, serão apresentados dois campos de input para números, separados pelo sinal associado à operação escolhida. Abaixo disso o botão de "calcular" e o botão "Voltar". 

A terceira *div* apresentará os resultados das operações realizadas, com botão "apagar histórico".

#### - JS

Iniciarei o código JS com constantes de referência para as *div*, espaço para exibição dos resultados, e botões. Em seguida a declaração das variáveis de operação, primeiro e segundo números, e resultado.

Para as funções, criarei primeiro as funções de esconder e mostrar *divs*. Em seguida, criarei as funções para cada operação, e a função de cálculo. A função de cálculo iniciará com a captura das variáveis de número, e em seguida associando-as à função da operação escolhida.

Por último atribuirei as funções aos botões.

## Descrição da resolução final

...