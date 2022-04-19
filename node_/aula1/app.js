// Com variaveis e funções
// const mod1 = require('./mod1').falaNome;
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const { nome, sobrenome, falaNome } = require('./mod1'); // AtribuiçãoViaDesestruturação(destructuringAssignment)
// console.log(nome, sobrenome);
// console.log(falaNome());

const path = require('path');  // requerendo modulo do npm (é so citar ele, pois não precisa colocar o local dele)
// Com classes (é a mesma coisa seu jegue)
const { Pessoa } = require('./mod1');// AtribuiçãoViaDesestruturação(destructuringAssignment)

const p1 = new Pessoa('Samuel');
console.log(p1);