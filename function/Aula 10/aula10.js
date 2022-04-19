// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log('SOu um método')
    }
}

const p1 = new Pessoa('Luiz','Amadeu')
const p2 = new Pessoa('Felipe','Amadeu')
p1.metodo();