// Factory functions / Constructor functions / Classes

function criaPessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
}
// {} <- this -> this
const p1 = new criaPessoa('Rennyson', 'Cavalcante')
console.log(p1)

