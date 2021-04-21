import _ from 'lodash';

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


//without
export function  without(array, ...args){
  let argArray = new Array(...args);
  let result = array.filter(function(val) {
    return argArray.indexOf(val) == -1;
  });
  return result;
}

//Unique
export function unique(array){
  let newArray = [];
  array.forEach(element => {
    if(!newArray.includes(element)){
      newArray.push(element)
    }
  });
  return newArray;
  // return newArray.filter((value, index) => array.indexOf(value) === index);
}


//isEqual
export function isEqual(arrA, arrB){
  return JSON.stringify(arrA) === JSON.stringify(arrB)
}
// export function isEqual(arrA, arrB){
//   const equal = _.isEqual(arrA, arrB);
//   return equal;
// }


//Flatten
export function flatten(array){
  let stringified = JSON.stringify(array);
  let newArray = Array.from(stringified);
  let flatArray = newArray.filter((element) => !isNaN(element));
  return flatArray;
}

//Chunk
export function chunk(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};
// export function chunk(array, size) {
//   const chunks = _.chunk(array, size);
//   return chunks;
// };


//Intersection
export const intersection = (...arrays) => {
  const uniqueValues = _.intersection(...arrays);
  return uniqueValues;
};

