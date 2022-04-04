function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)+min)
}

function esperaAi(mensagem,tempo){
    
    return new Promise((resolve,reject)=>{
        if(typeof mensagem !== 'string'){
        reject('Erro')
        return;
        }
        setTimeout(()=>{
            
            resolve(mensagem.toUpperCase() +'- Passei na promise');
            return;
        },tempo);
    })
}

// Async & Await

async function executa(){
    try{
    const fase1 = await esperaAi('Fase 1',1000)
    console.log(fase1)

    setTimeout(function(){
        console.log('Essa promise estava pendente',fase1)
    }, 1100)
    const fase2 = await esperaAi(2,aleatorio())
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3',aleatorio())
    console.log(fase3)

    console.log('Terminamos na fase: ',fase3)
    } catch(e){
        console.log(e)
    }
    
}

executa()
