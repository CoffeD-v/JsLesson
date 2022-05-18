//Filter

//Retorne os números maiores que 10

const numeros = [5,50,80,1,2,3,4,5,8,9,7,11,15,22,27]

const callFilter = numeros.filter(valor => valor > 10);


console.log(`os número maiores que 10 são ${callFilter}`)




// Retorne as pessoas cujo o nome termina com a letra a
// Retorne as pessoas cujo o nome começa com a letra A

const pessoas = [
    {nome: 'Luiz', idade: 19},
    {nome: 'João', idade: 10},
    {nome: 'Arnaldo', idade: 34},
    {nome: 'Maria', idade: 76},
    {nome: 'Ana', idade: 54},
    {nome: 'Fernanda', idade: 8},
];

const nomeA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
const nomeB = pessoas.filter(obj => obj.nome.toLocaleUpperCase().startsWith('A'));
console.log(nomeA);
console.log(nomeB);
