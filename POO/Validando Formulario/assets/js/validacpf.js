class ValidaCPF{
    constructor(cpfenviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable: true,
            configurable:false,
            value: cpfenviado.replace(/\D+/g, '')
        })
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const d1 = this.geraDigito(cpfParcial)
        const d2 = this.geraDigito(cpfParcial + d1)
        this.novoCPF = cpfParcial + d1 + d2;
    }

    geraDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let Numerico of cpfParcial){
            total += reverso * Number(Numerico);
            reverso --;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito):'0'; 
        console.log(total)
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !=='string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf();
        console.log(this.novoCPF)

        return this.novoCPF === this.cpfLimpo
    }
}

