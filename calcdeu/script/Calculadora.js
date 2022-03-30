"use strict";

var input = document.getElementById('input'),
    number = document.querySelectorAll('.numbers div'), 
    operator = document.querySelectorAll('.operators div'), 
    result = document.getElementById('result'), 
    clear = document.getElementById('clear'), 
    resultDisplayed = false; 

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {

        // armazena a string de entrada atual e seu último caractere em variáveis ​​- usado posteriormente
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // se o resultado não for exibido, continue adicionando
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            // se o resultado for exibido no momento e o usuário pressionou um operador
            // precisamos continuar adicionando a string para a próxima operação
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {

            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}

// adicionando manipuladores de cliques aos botões numéricos

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {

        // armazena a string de entrada atual e seu último caractere em variáveis ​​- usado posteriormente
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // se o último caractere digitado for um operador, substitua-o pelo atualmente pressionado
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            // se a primeira tecla pressionada for um operador, não faça nada
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }

    });
}

result.addEventListener("click", function() {

    var inputString = input.innerHTML;

    // formando um array de números. por exemplo, para a string acima, será: números = ["10", "26", "33", "56", "34", "23"]

    var numbers = inputString.split(/\+|\-|\×|\÷/g);

    // formando um array de operadores. para a string acima será: operadores = ["+", "+", "-", "*", "/"]
    // primeiro substituímos todos os números e pontos por uma string vazia e depois dividimos
    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");

    // agora estamos percorrendo o array e fazendo uma operação de cada vez.
    // primeiro divide, depois multiplica, depois subtrai e depois adiciona
    // à medida que nos movemos, estamos alterando o array original de números e operadores
    // o elemento final restante no array será a saída

    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        // é necessário usar parseFloat, caso contrário resultará em concatenação de strings :)

        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0]; //exibindo a saída


    resultDisplayed = true; // virando a bandeira se o resultado for exibido

});

// limpando a entrada ao pressionar de limpar

clear.addEventListener("click", function() {
    input.innerHTML = "";
})