const pessoas = [{
        id: 3,
        nome: 'Rennyson'
    },
    {
        id: 2,
        nome: 'Cavalcante'
    },
    {
        id: 1,
        nome: 'Teste1'
    },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {
        id
    } = pessoa;
    novasPessoas.set(id, {
        ...pessoa
    });
}

for (const [identifier, {
        id,
        nome
    }] of novasPessoas) {
    console.log(identifier, id, nome);
}