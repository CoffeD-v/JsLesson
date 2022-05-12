// Dobre os números

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const dobraNum = numeros.map(dobrar => dobrar * 2)
console.log(dobraNum)



//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do Objeto 
// Adicione uma chave id em cada Objeto

const pessoas = [
    {nome: 'Luiz', idade: 16},
    {nome: 'Maria', idade: 16},
    {nome: 'Ronaldo', idade: 34},
    {nome: 'Joseph', idade: 18},
    {nome: 'Joao Carlos', idade: 54},
    {nome: 'Wagner', idade: 38},
];

//const idadeNome = pessoas.map(obj =>({idade:obj.idade}))
//console.log(idadeNome)
const id = pessoas.map(function(obj,indice){
    const novoObj = {...obj}
    novoObj.id = indice
    return novoObj
})
console.log(id)
