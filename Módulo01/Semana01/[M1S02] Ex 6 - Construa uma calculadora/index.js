// let operacao = window.prompt("Digite o tipo de operação a ser realizada (+, -, *, /)")

// let valor1 = window.prompt("Enter the first value:");

// // Convert the first value string to a number
// valor1 = parseFloat(valor1);

// // Get the second value from the third prompt
// let valor2 = window.prompt("Enter the second value:");

// // Convert the second value string to a number
// valor2 = parseFloat(valor2);

// // Initialize a variable for the resultado
// let resultado;


// switch (operacao) {
//   case "+":
//     resultado = valor1 + valor2;
//     break;
//   case "-":
//     resultado = valor1 - valor2;
//     break;
//   case "*":
//     resultado = valor1 * valor2;
//     break;
//   case "/":
//     resultado = valor1 / valor2;
//     break;
//   default:
//     // Display an error message if the operacao type is invalid
//     alert("Invalid operacao type.");
//     return;
// }

// // Display the resultado of the operacao through an alert
// alert(`The resultado of your operacao is: ${resultado}`);
let operacao = window.prompt("Digite o tipo de operação a ser realizada (+, -, *, /)")

let primeiroValor = parseInt(window.prompt("Digite um número"))

let segundoValor = parseInt(window.prompt("Digite outro número"))

let resultado

switch (operacao) {
    case "+":
        resultado = primeiroValor+segundoValor
        break;
    case "-":
        resultado=primeiroValor-segundoValor
        break;
    case"*":
        resultado=primeiroValor*segundoValor
        break;
    case"/":
        resultado=primeiroValor/segundoValor
    default:
        alert("operação inválida")
        break;
}

alert(`O resultado da operação é ${resultado}`)