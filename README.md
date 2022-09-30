
# Coffeloper Javascript Lesson

[:brazil: Clique aqui para acessar a versão em português.](./README.pt-br.md)

# Flow Control and Error Handling

JavaScript supports a compact set of declarations, specifically control flow, that you can use to assign great interactivity to web pages.

See the JavaScript Reference for details on the declarations shown in this chapter. In JavaScript code, the semicolon character ( ; ) is used to separate declarations.

Every expression is also a declaration. See Expressions and Operators for complete information about expressions.

##
# Block declaration

#### A block declaration is used to group declarations. The block is delimited by a pair of braces

```
{
 declaration_1;
 declaration_2;
.
.
.
 declaration_n;
}
```

# Example

Block statements are generally used with control flow statements *(eg if, for, while)*.

```
while (x < 10) {
  x++; //{ x++; } is the block declaration.
}
```

#### **Important:** Prior to ECMAScript 6 JavaScript was not block scoped. Variables introduced within a block are scoped to the function or script in which the block is contained, and defining such variables has an effect far beyond the block itself. In other words, block declarations do not introduce a scope. Although "standard" blocks are valid syntax, don't use them in JavaScript, thinking they work like C or Java because they don't work the way you think. For example

```
var x = 1;
{
  var x = 2;
}
console.log(x); // display 2

```

* This code displays 2 because the var x declaration inside the block has the same scope as the var x declaration before the block. In C or Java, the equivalent code would display 1.

##
## Conditional statements

A conditional statement is a set of statements that are executed if a specified condition is true. JavaScript supports two conditional statements: **if...else** and **switch**.

##

# if...else statement
Use the **if** statement to execute some statement if the logical condition is true. Use the optional else clause to execute some statement if the logical condition is false. An **if** statement is declared as follows:


```
if (condition) {
  declaration_1;
} else {
  declaration_2;
}
```

where *condition* can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including nested if statements.

#### You can also combine statements using else if to get multiple conditions tested in sequence, like the following:

```
if (condition) {
  declaration_1;
} else if (condition_2) {
  declaration_2;
} else if (condition_n) {
  declaration_n;
} else {
  final_statement;
}
```

To execute multiple statements, group them into a block statement ({ ... }). In general, it is good practice to always use block statements, especially when nesting if statements:

```
if (condition) {
    declaration_1_executed_se_condition_for_true;
…```
if ((x = y)) {
  /* do the right thing */
}
```

### Values ​​evaluated as false

The following values ​​evaluate to false:

* false 
* undefined
* null
* 0
* NaN
* ("")

###

All other values, including all objects, evaluate to true when passed to a conditional statement.

Do not confuse the Boolean primitive values ​​true and false with the Boolean object's true and false values. For example:

```
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```
## Example

In the following example, the checkData function returns true if the number of characters in a Text object is three; otherwise, displays an alert and returns false.




```javascript
function checkData() {
  if (document.form1.tresCharacters.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
      document.form1.tresCharacters.value + " not valid.");
    return false;
  }
}
```

##


# Switch statement
A switch statement allows a program to evaluate an expression and attempt to associate the expression's value with a case label. If a match is found, the program executes the associated statement. A switch statement looks like the following:



```
switch(expression) {
   case label_1:
      declarations_1
      [break;]
   case label_2:
      declarations_2
      [break;]
   ...
   default:
      standard_declarations
      [break;]
}
```

The program first looks for a case clause with a label that matches the value of the expression and then transfers control to that clause, executing the associated statements.

 If no matching label is found, the program looks for the optional default clause and, if found, transfers control to that clause, executing the associated statements.

If no default clause is found, the program continues execution from the statement following the switch. By convention, the default clause is last, but it doesn't have to be.

The break statement associated with each case clause guarantees that the program will exit the switch as soon as the corresponding statement is executed and that it will continue execution from the statement following the switch. If the break statement is omitted, the program continues execution from the next statement within the switch.

## Example

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
