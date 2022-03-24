// IIFE -> Immediately Invoked Function expression

(function(idade, peso, altura) {
    const nome = 'Luiz Felipe'
    const sobrenome = 'Amadeu'

    function falaOi(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(falaOi('Luiz Felipe'))
    }
    falaNome();
    console.log(idade, peso, altura)
})(15, 90, 1.93)