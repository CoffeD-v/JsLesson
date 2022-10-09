# Javascript Lesson

## Objetivo 
Este repositório é de cunho educativo e voltado paraq quem está começando a aprender a javascript ou até mesmo começando a programar, por que querendo ou não javascript é uma linguagem muito procurada quando se fala em aprender uma linguagem nova

## Como contribuir?

**Ajudar o outro que está começando**
- Não é algo tão dificil, basta pensar como uma pessoa que está aprendendo, e mostrar de forma coesa o conteúo, pode ser com exemplos em código ou até mesmo dentro de um markdown de um tema em especifico

**Correção**
- Corrigindo sendo um código errado ou uma escrita errada
- Colocando links para suporte caso precise

**Novos módulos**
- Criar algum módulo que tenha haver com o universo de Javascript
- Criar módulos para determinada lingua

**Abrir issues**
- Caso haja necessidade de nova feature nova coloque em uma issue e se for necessária pode criar então o PR com a alteração
- Caso tenha dúvidas
- Caso tenha problemas relacionados com o projeto

**Abrir PR'S**
- Caso for permitido depois de abrir a issue, a PR passará por uma revisão caso for necessária e útil ela será mergiada

**Open-source brooo🤞**

# Controle de Fluxo e Manipulação de Erro

O JavaScript suporta um conjunto compacto de declarações, especificamente de fluxo de controle, que você pode utilizar para atribuir uma grande interatividade a páginas web. 

Veja a Referência do JavaScript para detalhes sobre as declarações mostradas neste capítulo. No código em JavaScript, o caractere ponto e vírgula ( ; ) é utilizado para separar declarações.

Toda expressão também é uma declaração. Veja Expressões e Operadores para informações completas sobre expressões.

##
# Declaração em bloco

#### Uma declaração em bloco é utilizada para agrupar declarações. O bloco é delimitado por um par de chaves:

```
{
   declaracao_1;
   declaracao_2;
   .
   .
   .
   declaracao_n;
}
```

# Exemplo

Declarações em bloco são utilizadas geralmente com declarações de fluxo de controle *(ex. if, for, while)*.

```
while (x < 10) {
  x++; //{ x++; } é a declaração de bloco.
}
```

#### **Importante:** Antes de ECMAScript 6 o JavaScript não possuía escopo de bloco. Variáveis introduzidas dentro de um bloco possuem como escopo a função ou o script em que o bloco está contido, e, definir tais variáveis tem efeito muito além do bloco em si. Em outras palavras, declarações de bloco não introduzem um escopo. Embora blocos "padrão" sejam uma sintaxe válida não utilize-os, em JavaScript, pensando que funcionam como em C ou Java porque eles não funcionam da maneira que você acredita. Por exemplo:

```
var x = 1;
{
  var x = 2;
}
console.log(x); // exibe 2

```

* Este código exibe 2 porque a declaração var x dentro do bloco possui o mesmo escopo que a declaração var x antes do bloco. Em C ou Java, o código equivalente exibiria 1.

##
## Declarações condicionais

Uma declaração condicional é um conjunto de comandos que são executados caso uma condição especificada seja verdadeira. O JavaScript suporta duas declarações condicionais: **if...else** e **switch**.

##

# Declaração if...else
Use a declaração **if** para executar alguma declaração caso a condição lógica for verdadeira. Use a cláusula opcional else para executar alguma declaração caso a condição lógica for falsa. Uma declaração **if** é declarada da seguinte maneira:


```
if (condicao) {
  declaracao_1;
} else {
  declaracao_2;
}
```

onde *condicao* pode ser qualquer expressão que seja avaliada como verdadeira ou falsa. Veja Boolean para uma explicação sobre o que é avaliado como true e false. Se condicao for avaliada como verdadeira, declaracao_1 é executada; caso contrário, declaracao_2 é executada. declaracao_1 e declaracao_2 podem ser qualquer declaração, incluindo declarações if aninhadas.

#### Você pode também combinar declarações utilizando else if para obter várias condições testadas em sequência, como o seguinte:

```
if (condicao) {
  declaracao_1;
} else if (condicao_2) {
  declaracao_2;
} else if (condicao_n) {
  declaracao_n;
} else {
  declaracao_final;
}
```

Para executar várias declarações, agrupe-as em uma declaração em bloco ({ ... }). Em geral, é uma boa prática sempre utilizar declarações em bloco, especialmente ao aninhar declarações if:

```
if (condicao) {
    declaracao_1_executada_se_condicao_for_verdadeira;
    declaracao_2_executada_se_condicao_for_verdadeira;
} else {
    declaracao_3_executada_se_condicao_for_falsa;
    declaracao_4_executada_se_condicao_for_falsa;
}
```

* Recomenda-se não utilizar atribuições simples em uma expressão condicional porque o símbolo de atribuição poderia ser confundido com o de igualdade ao dar uma olhada no código. Por exemplo, não utilize o seguinte código:

```
if (x = y) {
  /* faça a coisa certa */
}
```

Caso tenha que utilizar uma atribuição em uma expressão condicional, uma prática comum é colocar parênteses adicionais em volta da atribuição. Por exemplo:

```
if ((x = y)) {
  /* faça a coisa certa */
}
```

### Valores avaliados como falsos
Os seguintes valores são avaliados como falsos:

* false 
* undefined
* null
* 0
* NaN
* ("")

###

Todos os outros valores, incluindo todos os objetos, são avaliados como verdadeiros quando passados para uma declaração condicional.

Não confunda os valores booleanos primitivos true e false com os valores de true e false do objeto Boolean. Por exemplo:

```
var b = new Boolean(false);
if (b) // esta condição é avaliada como verdadeira
if (b == true) // esta condição é avaliada como falsa 
```



## Exemplo

No exemplo a seguir, a função verifiqueDados retorna verdadeiro se o número de caracteres em um objeto Text for três; caso contrário, exibe um alerta e retorna falso.




```javascript
function verifiqueDados() {
  if (document.form1.tresCaracteres.value.length == 3) {
    return true;
  } else {
    alert("Informe exatamente três caracteres. " +
      document.form1.tresCaracteres.value + " não é válido.");
    return false;
  }
}
```
## 


# Declaração switch
Uma declaração switch permite que um programa avalie uma expressão e tente associar o valor da expressão ao rótulo de um case. Se uma correspondência é encontrada, o programa executa a declaração associada. Uma declaração switch se parece com o seguinte:



```
switch (expressao) {
   case rotulo_1:
      declaracoes_1
      [break;]
   case rotulo_2:
      declaracoes_2
      [break;]
   ...
   default:
      declaracoes_padrao
      [break;]
}
```

O programa primeiramente procura por uma cláusula case com um rótulo que corresponda ao valor da expressão e então transfere o controle para aquela cláusula, executando as declaracoes associadas. 

 Se nenhum rótulo correspondente é encontrado, o programa procura pela cláusula opcional default e, se encontrada, transfere o controle àquela cláusula, executando as declarações associadas.

 Se nenhuma cláusula default é encontrada, o programa continua a execução a partir da declaracao seguinte ao switch. Por convenção, a cláusula default é a última, mas não é necessário que seja assim.

A instrução break associada a cada cláusula case, garante que o programa sairá do switch assim que a declaração correspondente for executada e que continuará a execução a partir da declaração seguinte ao switch. Se a declaração break for omitida, o programa continua a execução a partir da próxima declaração dentro do switch.



## Exemplo

No exemplo a seguir, se tipofruta for avaliada como "Banana", o programa faz a correspondência do valor com case "Banana" e executa a declaração associada. Quando o break é encontrado, o programa termina o switch e executa a declaração seguinte ao condicional. Se o break fosse omitido, a declaração de case "Cereja" também seria executada.




```javascript
switch (tipofruta) {
   case "Laranja":
      console.log("O quilo da laranja está R$0,59.<br>");
      break;
   case "Maçã":
      console.log("O quilo da maçã está R$0,32.<br>");
      break;
   case "Banana":
      console.log("O quilo da banana está R$0,48.<br>");
      break;
   case "Cereja":
      console.log("O quilo da cereja está R$3,00.<br>");
      break;
   case "Manga":
      console.log("O quilo da manga está R$0,56.<br>");
       break;
   case "Mamão":
      console.log("O quilo do mamão está R$2,23.<br>");
      break;
   default:
      console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");
```
## 

# Laços e iterações

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

```javascript
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}
```

## 
Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes).  Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.

Os possíveis laços de repetição em JavaScript:

- ### for
- ### do...while
- ### while
- ### label
- ### break
- ### continue
- ### for...in
- ### for...of
##
# Declaração for

Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. 
- Uma declaração for é feita da seguinte maneira:


```javascript
for ([expressaoInicial]; [condicao]; [incremento])
  declaracao
}
```



## Quando um for é executado, ocorre o seguinte:

* A expressão expressao Inicial é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.
* A expressão condicao é avaliada. caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará. Se a expressão condicao é omitida, a condicao é assumida como verdadeira.
* A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupá-las.
* A atualização da expressão incremento, se houver, executa, e retorna o controle para o passo 2.


## Exemplo

A função a seguir contém uma declaração for que contará o número de opções selecionadas em uma lista (um elemento *<select>* permite várias seleções). Dentro do for é declarado uma váriavel i inicializada com zero. A declaração for verifica se i é menor que o número de opções no elemento *<select>*, executa sucessivas declaração  if, e incrementa i de um em um a cada passagem pelo laço.


```javascript
<form name="selectForm">
  <p>
    <label for="tipoMusica">Escolha alguns tipos de música, em seguida, clique no botão abaixo:</label>
    <select id="tipoMusica" name="tipoMusica" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classico</option>
      <option>Ópera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="Quantos foram selecionados?" /></p>
</form>

<script>
function howMany(selectObject) {
  var numeroSelecionadas = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numeroSelecionadas++;
    }
  }
  return numeroSelecionadas;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
});
</script>

```
  
##
# Declaração do...while
A instrução do...while repetirá até que a condição especificada seja falsa.


```javascript
do
  declaracao
while (condicao);
}
```



##

A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco *({ ... })* para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

##
No exemplo a seguir, o laço é executado pelo menos uma vez e irá executar até que i seja menor que 5.


```javascript
do {
  i += 1;
  console.log(i);
} while (i < 5);
```
##                
                
# Declaração while
Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while: 


```javascript
while (condicao)
  declaracao
```
##
Se a condição se tornar falsa,  a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.

O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.

Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupar essas declarações.

```javascript
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

# Primeiro exemplo
#### O while a seguir executará enquanto n for menor que três:
```javascript
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

#### A cada iteração, o laço incrementa n e adiciona este valor para x. Portanto, x e n recebem os seguintes valores:





* Depois de executar pela primeira vez: n = 1 e x = 1
* Depois da segunda vez: n = 2 e x = 3
* Depois da terceira vez: n = 3 e x = 6

##### Depois de executar pela terceira vez, a condição n < 3 não será mais verdadeira, então o laço encerrará.

# Segundo exemplo

Evite laços infinitos. Tenha certeza que a condição do laço eventualmente será falsa; caso contrário, o laço nunca terminará. O while a seguir executará para sempre pois sua condição nunca será falsa:

```javascript
while (true) {
  console.log("Olá, mundo");
}
```
##
  
# Declaração label
Um label provê um identificador que permite que este seja referenciado em outro lugar no seu programa. Por exemplo, você pode usar uma label para identificar um laço, e então usar *break* ou *continue* para indicar quando o programa deverá interromper o laço ou continuar sua execução.

Segue a sintaxe da instrução label:



```javascript
label : declaracao
```
Um label pode usar qualquer idenficador que não seja uma palavra reservada do JavaScript. Você pode identificar qualquer instrução com um label.




# Exemplo
#### Neste exemplo, o label markLoop idenfica um laço while.
```javascript
markLoop:
while (theMark == true) {
   facaAlgo();
}
```
## 
  
# Declaração break

Use break para terminar laços, *switch*, ou um conjunto que utiliza label.


* Quando você utiliza *break* sem um label, ele encerrará imediatamente o laço mais interno *while*, *do-while*, *for*, ou *switch* e transferirá o controle para a próxima instrução.

* Quando você utiliza break com um label, ele encerrará o label específico.

#### Segue a sintaxe do break:

 - break;
 - break label;

 Na primeira opção será encerrado o laço de repetição mais interno ou switch. Já na segunda opção será encerrada o bloco de código referente a label.
  
  
## Primeiro exemplo

O exemplo a seguir percorre os elementos de um array até que ele encontre o índice do elemento que possui o valor contido em theValue:


```javascript
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```


## Segundo exemplo

```javascript
var x = 0;
var z = 0
labelCancelaLaco: while (true) {
  console.log("Laço exterior: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Laço interior: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelaLaco;
    } else if (z === 10) {
      break;
    }
  }
}
```
## 


# Declaração continue
A declaração continue pode ser usada para reiniciar uma instrução while, do-while, for, ou label.

* Quando você utiliza continue sem uma label, ele encerrará a iteração atual mais interna de uma instrução while, do-while, ou for e continuará a execução do laço a partir da próxima iteração. Ao contrário da instrução break, continue não encerra a execução completa do laço. Em um laço while, ele voltará para a condição. Em um laço for, ele pulará para a expressão de incrementação.

* Quando você utiliza continue com uma label, o continue será aplicado ao laço identificado por esta label. 

#### Segue a sintaxe do break:

 #### 1. break;
 #### 2. continue label;

## 
                         
## Primeiro exemplo

O exemplo a seguir mostra um laço while utlizando continue que executará quando o valor de i for igual a 3. Desta forma, n recebe os valores um, três, sete, e doze.



```javascript
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

```


## Segundo exemplo

Uma instrução label checkiandj contém uma instrução label checkj. Se o continue for executado, o programa terminará a iteração atual de checkj e começará a próxima iteração. Toda vez que o continue for executado, checkj recomeçará até que a condição do while for falsa. Quando isto ocorrer checkiandj executará até que sua condição seja falsa.

* Se o continue estivesse referenciando checkiandj, o programa deveria continuar do topo de checkiandj.

```javascript
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + " é estranho.");
      }
      console.log("i = " + i);
      console.log("j = " + j);
  }
```
## 


# Declaração for...in
A declaração *for...in* executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto.

Para cada propriedade distinta, o JavaScript executará uma iteração. Segue a sintaxe:
```
for (variavel in objeto) {
  declaracoes
}
```


## Exemplo

A função a seguir recebe em seu argumento um objeto e o nome deste objeto. Então executará uma iteração para cada elemento e retornará uma lista de string, que irá conter o nome da propriedade e seu valor.



```javascript
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

```
#### Para um objeto chamado car com propriedades make e model, o resultado será:

```
car.make = Ford
car.model = Mustang

```
### Arrays

Embora seja tentador usar esta forma para interagir com os elementos de um Array, a declaração for...in irá retornar o nome pré-definido da propriedade ao invés do seu index numérico. Assim é melhor usar o tradicional for com index numérico quando interagir com arrays, pois o for...in interage com as propriedades definidas pelo programador ao invés dos elementos do array.

## 


# Declaração for...of
 A declaração *for...of* cria uma laço com objetos interativos ((incluindo, Array, Map, Set, assim por conseguinte ), executando uma iteração para o valor de cada propriedade distinta.

```
for (variavel of objeto) {
  declaracoes
}
```

O exemplo a seguir mostra a diferença entre o for...of e o for...in. Enquanto o for...in interage com o nome das propriedades, o for...of interage com o valor das propriedades.



## Exemplo




```javascript
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```
##                          


