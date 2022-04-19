// IIFE -> Immediately Invoked Function expression

(function(idade,peso,altura){
    const nome = 'Marina'
    const sobrenome = ' Oliveira'
    function falaOi(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(falaOi('Marina'))
    }
    falaNome();
    console.log(idade,peso,altura)
})(16,52,1.56)

