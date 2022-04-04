const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }
    set velocidade(valor){
        if(typeof valor !== 'number')return;
        if(valor >= 180 || valor <= 0)return;
    }
    get velocidade(){
        return this[_velocidade]
    }
    acelerar(){
        if(this[_velocidade] >= 180) return;
        this[_velocidade]++
    }
    freiar(){
        if(this.velocidade <= 100) return;
        this[_velocidade] --
    }
}

const carro = new Carro('Citroen C3');

for(let i = 0; i <= 200; i++){
    carro.acelerar()
}
carro.velocidade = 156
console.log(carro.velocidade)