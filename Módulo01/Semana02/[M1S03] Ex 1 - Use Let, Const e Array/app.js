// [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
// []
// [1]
// [1, -1]
// null
// [-2,-2,-2,-2] 
// [20,10, 30]  
let array = [];
searchMinMax(array);



function searchMinMax(array) {
    if (array.length == 0) {
      return "Não é possível encontrar";
    }
  
    let min = array[0];
    let max = array[0];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
  
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    console.log(`Menor valor: ${min}`);
    console.log(`Maior valor: ${max}`);
  }