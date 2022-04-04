// defineProperty -> Getter e Setters

function Produto(nome,preco,estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        configurable: true, //configuravel
        get: function() { 
            return estoque;
        },
        set: function(valor){

        }
    })

}
    const p1 = new Produto('Calça',20,3)
    p1.estoque = 'O valor que eu quero'
    console.log(p1)