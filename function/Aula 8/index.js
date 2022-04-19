// Factory Functio(Função Fabrica);
function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },
        fala(assunto) {
            return `${this.nome} esta ${assunto}.`
        },
        altura: altura,
        peso: peso,
       get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz','Amadeu',1.95,92);
p1.nomeCompleto = 'Luiz Felipe Warmling Amadeu';
console.log(p1.nomeCompleto)
