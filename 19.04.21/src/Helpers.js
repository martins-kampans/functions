export function fill(arraySize, value) {
  return new Array(arraySize).fill(value);
}


export function reverse(array) {
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i -= 1) {
        reversed.push(array[i]);
    }
    return reversed;
}


export function compact(array) {
    return array.filter(x => x);
}


export const arrayFromPairs = (arrry) => 
    arrry.reduce((acc, value) => {
        if(Array.isArray(value)){
            acc[value[0]] = value[1];
        }
        return acc;
    }, 
{});

export function  without(array, ...args){
  // let argArray = new Array(...args);
  let argumentArray = add(...args);
  let concatArray = array.concat(argumentArray);
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  let uniqueArray = concatArray.filter(distinct);
  return uniqueArray;
}
function add(...args){
  let result = [];
  for(let arg of args) result.push(arg);
  return result;
}

export function unique(array){
  let newArray = [];
  array.forEach(element => {
    if(!newArray.includes(element)){
      newArray.push(element)
    }
  });
  return newArray;
  // return array.filter((value, index) => array.indexOf(value) === index);
}


export function isEqual(arrA, arrB){
  return JSON.stringify(arrA) === JSON.stringify(arrB)
}

export function flatten(array){
  let stringified = JSON.stringify(array);
  let newArray = Array.from(stringified);
  let flatArray = newArray.filter((element) => !isNaN(element));
  return flatArray;
}

export function chunk(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};

