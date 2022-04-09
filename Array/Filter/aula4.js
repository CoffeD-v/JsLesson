//Filter

//Retorne os números maiores que 10

//const numeros = [5,50,80,1,2,3,4,5,8,9,7,11,15,22,27]

//const callFilter = numeros.filter(valor => valor > 10);


///console.log(`os número maiores que 10 são ${callFilter}`)



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as tem com mais de 50 anos 
// retorne as pessoas cujo o nome termina com a letra a

const pessoas = [
    {nome: 'Rennyson', idade: 19},
    {nome: 'Maria', idade: 10},
    {nome: 'Fernada', idade: 34},
    {nome: 'Jose', idade: 76},
    {nome: 'Joao', idade: 54},
    {nome: 'Wallace', idade: 8},
];

const nomeA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeA);