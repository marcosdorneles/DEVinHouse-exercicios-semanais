let num = window.prompt("Digite um número")

num = parseInt(num)

let impares = 0
let pares = 0

for(i=0; i<num; i++){
    if(i % 2 == 0){
        pares++
    } else{
        impares++
    }
}

alert(`Existem ${impares} números ímpares e ${pares} numeros pares`)
