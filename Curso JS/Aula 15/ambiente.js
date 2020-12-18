var num = [5,2,8,9,3]
num[5] = 7 
num.push(4)
num.sort()

console.log(`Nosso vetor é ${num}\nO vetor tem ${num.length} elementos`)

var pos = num.indexOf(8)
console.log(`O valor 4 está na posição ${pos}.`)
