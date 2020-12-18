function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')    
    }else{
        res.innerHTML = '<br>Contando: </br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for( i ;i <= f; i += p){
                res.innerHTML += `${i} \u{1F449} `
            } 
        }else{
            //Contagem Regressiva
            for(i; i >= f ; i -= p){
                res.innerHTML += `${i} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`       
    }
}
