
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


