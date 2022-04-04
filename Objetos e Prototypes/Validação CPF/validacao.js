(function (){
    const cpf = '111.716.704-60'
    let cpfClean = cpf.replace(/\D+/g, '')
    let cpfClean2 = cpfClean.slice(0, -2)
    let cpfArray = Array.from(cpfClean2)
    let contador10 = 10
    let contador11 = 11
 
    function verifica(array){
        return digito = array.reduce((ac, digito) => {
            
            if(array.length === 9){    
                ac += Number(digito) * contador10
                contador10--
                return ac    
            }
            if(array.length === 10){
                ac += Number(digito) * contador11
                contador11--
                return ac    
            }
        }, 0)
    }
    
    let d1 = (11 - (verifica(cpfArray)) % 11)
    if(d1 >= 10) d1 = '0'
    cpfArray.push(d1)
    let d2 = (11 - (verifica(cpfArray)) % 11)
    if(d2 >= 10) d2 = '0'
    cpfArray.push(d2)
 
    cpfFinal = cpfArray.toString().replace(/,/g, '')
 
    if(cpfClean === cpfFinal) return console.log('CPF Válido');
    if(cpfClean !== cpfFinal) return console.log('CPF Inválido');
})()