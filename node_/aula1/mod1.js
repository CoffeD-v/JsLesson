// const nome = 'Samuel';
// const sobrenome = 'Monteiro';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// // cosnole.log(module.exports);

// nome do exports / nome do que eu quero exportar
//          |        |
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// nome do exports / nome do que eu quero exportar
//        |           |
exports.Pessoa = Pessoa;

// se eu quisesse exportar tudo (não acho que seja bom usalo!)
// module.exports = {
//     nome, sobrenome, Pessoa
// };