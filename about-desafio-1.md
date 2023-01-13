# Desafio 1

## Proposta

O desafio 1 envolve uma situação comum no uso do Javascript, que são os problemas com tipos de variáveis na hora de comparar valores de duas variáveis entre si.

Dependendo da forma que o código for escrito o Javascript fará um conversão de tipo para um tipo booleano de maneira implicita, como nos exemplos abaixo que sempre retornarão ***true***:

* console.log( false == '0' );
* console.log( null == undefined );
* console.log( " \t\r\n" == 0 );
* console.log( ' ' == 0 );

Dessa forma, o desafio proposto é reescrever o dódigo abaixo de forma que iprima as informações de maneira correta, que faça sentido e sem erros:

>let numeroUm = 1
>
>let stringUm = '1'
>
>let numeroTrinta = 30
>
>let stringTrinta = '30'
>
>let numeroDez = 10
>
>let stringDez = '10'
>

> if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

> if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

> if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

## Proposta de resolução

Iniciarei verificando quais são as afirmações que fazem sentido no código acima, para verificar em cada situação se o retorno deve ser ***true*** ou ***false***.

> Nota: Pelo que me lembro até o momento, para comparar o valor das variáveis usamos o operador ***"=="*** e para comparar valor e tipo usamos ***"==="***.

Como os pares de variáveis (*numeroX* e *stringX*) acima tem o mesmo valor mas tipos diferentes, isso é, contém o mesmo valor *X* mas uma é do tipo *número* e outra é do tipo *string*, devo usar o operador ***"=="*** para obter ***true*** e ***"==="*** para obter ***false*** (se a nota acima estiver correta).

## Descrição da resolução final

Neste desafio a resolução final ficou como a proposta acima.

1. Criei um arquivo js para declarar as variáveis, e criei as funções firstComparison, secondComparison e thirdComparison.
2. Observei que na primeira e terceira comparações o resultado deveria ser ***true*** para que aparecesse a mensagem correta, enquanto na segunda comparação deveria ser ***false***.
3. Para obter o resultado acima usei o operador ***"=="*** na primeira e terceira função, e o operador ***"==="*** na segunda função.
4. Testei as funções no console do navegador para confirmar se o resultado obtido era o esperado.