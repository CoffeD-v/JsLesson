class ValidaCPF {
    constructor(cpfEnviado) {
      // Clean the input CPF and store it in cpfLimpo
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, ''),
      });
    }
  
    sequencia() {
      // Check if all digits are the same (invalid CPF sequence)
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      // Generate new CPF by calculating verification digits
      const cpfParcial = this.cpfLimpo.slice(0, -2);
      const d1 = this.geraDigito(cpfParcial);
      const d2 = this.geraDigito(cpfParcial + d1);
      this.novoCPF = cpfParcial + d1 + d2;
    }
  
    geraDigito(cpfParcial) {
      // Calculate verification digit using Luhn algorithm
      let total = 0;
      let reverso = cpfParcial.length + 1;
  
      for (let numero of cpfParcial) {
        total += reverso * Number(numero);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.sequencia()) return false;
      this.geraNovoCpf();
      return this.novoCPF === this.cpfLimpo;
    }
  }