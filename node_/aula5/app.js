const path = require('path');
const caminhoArquivo= path.resolve(__dirname, 'teste.json'); // resolve o caminho
//                                   |              |
//                       pasta modules          nome do arquivo que esta sendo criado
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Samuel'},
//     {nome: 'Maria'},
//     {nome: 'Paula'},
// ];
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);
