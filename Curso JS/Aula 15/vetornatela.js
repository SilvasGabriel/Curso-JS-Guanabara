var valores = [8,3,6,7,9,2]
valores.sort()

console.log(valores)
console.log(valores[0])

for(posicao =0;posicao<valores.length;posicao++){
    console.log(`${valores[posicao]}`)
}

for( var posicao in valores ){
    console.log(`${valores[posicao]}`)
}