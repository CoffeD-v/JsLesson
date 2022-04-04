// Construtora -> Molde (classe)

function Pesooa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pesooa('Rennyson', 'C.')// <- Pessoa = Função construtora
const data = new Date() // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);