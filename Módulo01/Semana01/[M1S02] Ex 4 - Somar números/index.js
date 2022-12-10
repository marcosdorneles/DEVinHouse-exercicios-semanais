let sum = 0;
let number = 0;


while (number !== '-1') {
  number = prompt("Digite um número e digite -1 para exibir a soma:");

  sum += parseInt(number);
}

alert("The sum of the numbers is " + sum);