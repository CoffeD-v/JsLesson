exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquerCoisa">
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Ola Mundo!</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};