// const Cachorro = require('./Z/mod2');

// const c1 = new Cachorro('Dog');
// c1.latir();

// ./ sai do arquivo mas continua na mesma pasta
// ../ sai do arquivo e sai da pasta

// const path = require('path');
// console.log(path.resolve(__dirname, '..', '..', 'Professor', 'calc'));

const Cachorro = require('./Z/mod2.js');

const c1 = new Cachorro('Dog');

c1.latir();

// console.log(__filename); // c:\Curso JS\node\aula2\app.js
// console.log(__dirname);  // c:\Curso JS\node\aula2