let i = 0
while(i <= 10){
    console.log(i)
    i++
}

console.log('===== OUTRA QUESTÃO =====')

let x = 0
do{
    console.log(x)
    x++
} while (x <= 10)

console.log('===== OUTRA QUESTÃO =====')

for(let i = 0; i <= 7; i++){
    console.log(i)
}

console.log('===== OUTRA QUESTÃO =====')

const numberArray = [1, 2, 3, 4, 5, 6, 7]
const newArray = []
for(let i = 0; i < numberArray.length; i++){
    newArray.push(numberArray[i])
    console.log(newArray)
}

console.log('===== OUTRA QUESTÃO =====')

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

console.log('===== OUTRA QUESTÃO =====')

for(let i= 0; i <= 10; i++){
console.log(`${i}  ${i * i}  ${i * i * i}`)
}

console.log('===== OUTRA QUESTÃO =====')

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

console.log('===== OUTRA QUESTÃO =====')

for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

/*console.log('===== OUTRA QUESTÃO =====')

function numeroPrimo(num){
for(let divisor = 2; divisor < num; divisor++){
    if( num % divisor == 0) return false;   
    return true
}
}

let limite = 100;

for( let i = 2; i < limite; i++){
    if(numeroPrimo(i)){
        console.log(i)
    }
} */ // incompleto

console.log('===== OUTRA QUESTÃO =====')

function soma(s){
   return s * (s +1) / 2;
}
console.log(soma(100))

console.log('===== OUTRA QUESTÃO =====')

