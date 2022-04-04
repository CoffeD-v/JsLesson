class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // Metódo de Instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    //Meotodo Estatico
    static trocarPilha(){
        console.log(this.volume);
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
console.log(controle)

ControleRemoto.trocarPilha()