// Dobre os números

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

//const dobraNum = numeros.map(dobrar => dobrar * 2)
//console.log(dobraNum)



//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do Objeto 
// Adicione uma chave id em cada Objeto

const pessoas = [
    {nome: 'Rennyson', idade: 19},
    {nome: 'Maria', idade: 10},
    {nome: 'Fernada', idade: 34},
    {nome: 'Jose', idade: 76},
    {nome: 'Joao', idade: 54},
    {nome: 'Wallace', idade: 8},
];

//const idadeNome = pessoas.map(obj =>({idade:obj.idade}))
//console.log(idadeNome)
const id = pessoas.map(function(obj,indice){
    const novoObj = {...obj}
    novoObj.id = indice
    return novoObj
})
console.log(id)