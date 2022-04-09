// Some todos os numeros (reduce)
// Retorne um array com os pares(filter)
// Retorne um array com o dobro dos valores(map)
//const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
///const total = numeros.reduce(function (acumulador,valor) {
//    acumulador.push(valor*2)
    return acumulador;
//},[])

//console.log(total)

const pessoas = [
    {nome: 'Rennyson', idade: 19},
    {nome: 'Maria', idade: 10},
    {nome: 'Fernada', idade: 34},
    {nome: 'Jose', idade: 76},
    {nome: 'Joao', idade: 54},
    {nome: 'Wallace', idade: 8},
];

const velha = pessoas.reduce(function(acumulador,valor) {
    if(acumulador.idade > valor.idade)return acumulador;
    return valor;
});

console.log(velha)