// Camiseta, caneta;
// Produto -> Aumento, Desconto;
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material;

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        get: function(){
        return estoque;
    },
})
}
const produto = new Produto('Gen',111)
const camiseta = new Camiseta('Regata',7.5, 'Branca')
const caneca = new Caneca('Canecola',14.5,'Vidro')
camiseta.aumento(10);
console.log(camiseta)
console.log(produto)
console.log(caneca)
