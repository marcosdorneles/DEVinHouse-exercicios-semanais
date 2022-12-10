
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