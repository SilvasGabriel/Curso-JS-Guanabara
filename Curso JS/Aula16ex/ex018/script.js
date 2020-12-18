
    let numero = document.querySelector('input#ibox1')
    let lista = document.querySelector('select#quadro')
    let res = document.querySelector('div#res')
    
    let valores = []

function isNum(n) {
        if(Number(n) >= 1 &&  Number(n)<=100){
            return true
        }else{
            return false
        }

}

function isList(n , l) {
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else {
        return false
    }
}

function Adicionar() {
  
    if(isNum(numero.value) && !isList(numero.value,valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()

}

function Finalizar() {
    if(valores.length==0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let posicao in valores) {
            soma += valores[posicao]
            if(valores[posicao] > maior ){
                maior = valores[posicao]
            }
            if(valores[posicao]<menor){
                menor = valores[posicao]
            }
        }

        media = soma/total.toFixed(1)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}.</p>`
    }
}


