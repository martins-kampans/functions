import { fill, reverse, compact, arrayFromPairs, without, unique, isEqual, flatten, chunk } from "./src/Helpers.js";

// const filed = fill(5, "d");
// console.log("fill() - " + filed);


// const reversedArray = reverse([1,2,3,4,5,6,7,8,9,10]);
// console.log("reverse() - " + reversedArray);


// const compactArray = compact([1, null, "", false, 4, undefined, 2]);
// console.log("compact() - " + compactArray);


// const fromPairs = arrayFromPairs([['a', 1], ['b', 2], ['c', 3]]);
// console.log("arrayFromPairs() - ");
// console.log(fromPairs);


const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2));


// const data = [1, 2, 3, 1, 2];
// console.log(unique(data));


// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2));

// const data = [1, 2, [3, 4, [5]]];
// console.log(flatten(data));

// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2));
// console.log(chunk(data, 3));



