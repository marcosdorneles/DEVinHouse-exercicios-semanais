
let contadorPrimos = 0;

for (var i = 0; i <= 1000; i++){
   if(isPrime(i)){
    console.log(i)
    contadorPrimos++
   }
}


function isPrime(number) {
    if (number <= 1) {
      return false
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true;
  }
