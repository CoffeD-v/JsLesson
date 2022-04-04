
    

    document.addEventListener('click',e => {
        const el = e.target;
        const tag = el.tagName.toLocaleLowerCase();

        if(tag == 'a'){
            e.preventDefault();
            carregaPagina(el);
        }
    })

 async function carregaPagina(el){
     
    const href = el.getAttribute('href');
    const response = await fetch(href)
    const html = await response.text();
    carregaResultado(html)
    fetch(href)
    .then(response => {
        if(response.status !== 200) throw new Error('ERRO 404!')
        return response.text()
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e))
    
       
    }
     
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}



