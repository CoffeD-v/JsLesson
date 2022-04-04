class eletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + 'Dispositivo Ligado')
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'Dispositivo Desligado')
            return;
        }
        this.ligado = false;
    }
}
class Tablet extends eletronico{
    constructor(nome,wifi){
        super(nome);
        this.wifi = wifi;
    }
    ligar(){
        console.log('Olha você alterou o método ligar!')
    }
}


class Smartphone extends eletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
    
}



const s1 = new Smartphone('iPhone','Black','iPhone 11');
console.log(s1)

const t1 =  new Tablet('iPad',true);
t1.ligar()
