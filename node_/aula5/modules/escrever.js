const fs = require('fs').promises;
 
module.exports = (caminho, dados) => {
    // flag: w apaga e reescreve 
    // flag: a adiciona o texto no que ja existe (sem fazer quebra de linha) ai tu teria que colocar \n no conteudo para quebrar linha ex 'Frase 1\n'
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8'});
};
