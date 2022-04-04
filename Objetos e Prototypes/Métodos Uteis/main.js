const produto = {
    nome: 'caneco',
    preco: 1.8
}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.preco = 'Outra coisa'
console.log(produto)