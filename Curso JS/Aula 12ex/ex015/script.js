function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<12){
                //Kid
                img.setAttribute('src','menino.png')
            }else if(idade < 21){
                //Teen
                img.setAttribute('src','jovemmenino.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src','homemvelho.png')
            }
        }else{
            genero = 'Mulher'
            if(idade>=0 && idade<12){
                //Kid
                img.setAttribute('src','menina.png')
            }else if(idade < 21){
                //Teen
                img.setAttribute('src','jovemmenina.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src','mulhervelha.png')
            }
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}