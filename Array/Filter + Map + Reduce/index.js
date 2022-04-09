//Retorne a somo do dobro de todos os pares
// -> Filtrar Pares
// -> Dobrar os valores
// -> Reduzir(Somar Tudo)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const numPar = numeros.filter(valor => valor % 2 === 0);
const Dobrar = numeros.map(valor => valor * 2);
console.log(numPar)
console.log(Dobrar)