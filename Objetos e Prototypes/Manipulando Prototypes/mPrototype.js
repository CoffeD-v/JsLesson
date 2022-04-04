//new Object -> Object.prototype
//const objA = {
    //chaveA: 'A'
    //__proto__: Object.prototype
//};

//new Object -> Object.prototype
//const objB = {
  //  chaveB: 'B'
    //__proto__: Object.prototype
//};

//Object.setPrototypeOf(objB, objA);
//console.log(objB.chaveA)

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual / 100))
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco + (this.preco *(percentual / 100))
}

const p1 = new Produto('Camiseta',50)
const p2 = {
    nome: 'caneca',
    preco: 15
}

Object.setPrototypeOf(p2,Produto.prototype)
p2.aumento(10)

const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 156
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
})

p3.aumento(10)

console.log(p3)