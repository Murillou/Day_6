for (let i = 0; i < 10; i++){
    console.log(i)
} // estruturas de loops, tudo que for repetitivo é bom utilizar loops 

for(let i = 0.; i <= 7; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const frutas = ['Banana', 'Morango', 'Acerola', 'Goiaba']
const novoArray = []
for(let i = 0; i < frutas.length; i++){
   novoArray.push(frutas[i].toUpperCase())
   novoArray.sort()
} // criando outro array com os mesmos valores que o outro
console.log(novoArray)

const numeros = [1, 2, 3, 4 ,5 ,6]
let soma = 0
for(let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i]
} // somando todos os indices do array
console.log(soma)

const numerosTwo = [1, 2, 3, 4, 5, 6]
const novoArrayTwo = []
let somaTwo = 0
for (let i = 0; i < numerosTwo.length; i++){
    novoArrayTwo.push(numerosTwo[i] ** 2)
} // criando novo array
console.log(novoArrayTwo)

console.log('===========')


//while loops

let i = 0
while (i <= 5){
    console.log(i)
    i++
}

console.log('===========')


// do while loop
let iTwo = 0
do {
    console.log(iTwo)
    iTwo++
} while (iTwo <= 5)

console.log('===========')

// for of loop
const numbers = [1, 2, 3, 4]

for (const num of numbers){
    console.log(num)
}

const numerosExtenso = ['Um', 'Dois', 'Três', 'Quatro']
for(const num of numerosExtenso){
    console.log(num[0])
} // mostrar a primeira letra de cada valor do array

// break

for(let i = 0; i <= 10; i++){
    if (i == 7){
        break // quebra o processo, interrompe onde o valor for encontrado
    }
    console.log(i)
}

//continue

for(let i = 0; i <= 10; i++){
    if( i == 7){
        continue // pula o valor desejado
    }
    console.log(i)
}