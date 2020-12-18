function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()

var minutos= new Date()
var minutos = minutos.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`



if(hora>=0 && hora <12){
    //BOM DIA!!
    img.src = '/Aula12ex/ex014/fotomanhã.png'
    document.body.style.background = '#d0b67d'
}else if (hora>=12 && hora <=18){
    //BOA TARDE!!
    img.src = '/Aula12ex/ex014/fototarde.png'
    document.body.style.background = '#c42603'
}else{
    //BOA NOITE!!
    img.src = '/Aula12ex/ex014/fotonoite.png'
    document.body.style.background = '#332c35'
}

}