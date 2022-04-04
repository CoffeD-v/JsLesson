// DefineProperty - defineProperties

function Produto(nome,preco,estoque) {
    

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true //configuravel
    })

    Object.defineProperties(this, {
        nome:{
        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: true, // pode alterar
        configurable: true //configuravel
        },
        preco: {
        enumerable: true, // mostra a chave
        value: preco, // valor
        writable: false, // pode alterar
        configurable: true //configuravel
        },
    })
}
    


const p1 = new Produto('Calça',20,3)
p1.estoque = 5000000
delete p1.estoque
console.log(p1)