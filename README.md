
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

- for
- do...while
- while
- label
- break
- continue
- for...in
- for...of
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
