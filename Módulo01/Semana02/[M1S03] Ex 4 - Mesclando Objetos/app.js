const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const mergedObj = mergeObjects(obj1, obj2);

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
  }


  