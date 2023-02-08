// Crie uma função chamada sleep, que recebe como argumento um  valor qualquer.

// Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.

function sleep ( valor ) {
    return new Promise ( (res, rej) => {
       setTimeout(() =>{
        resolve(valor)
       },3000)
    })
  }
  