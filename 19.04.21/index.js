import { fill, reverse, compact, arrayFromPairs, without, unique, isEqual, flatten, chunk, intersection } from "./src/Helpers.js";

// const filed = fill(5, "d");
// console.log("fill() - " + filed);


// const reversedArray = reverse([1,2,3,4,5,6,7,8,9,10]);
// console.log("reverse() - " + reversedArray);


// const compactArray = compact([1, null, "", false, 4, undefined, 2]);
// console.log("compact() - " + compactArray);


// const fromPairs = arrayFromPairs([['a', 1], ['b', 2], ['c', 3]]);
// console.log("arrayFromPairs() - ");
// console.log(fromPairs);

// 
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


// const arr1 = [1, 2];
// const arr2 = [2, 3];

// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];

// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];

// console.log(intersection(arr1, arr2));
// console.log(intersection(arr3, arr4, arr5));
// console.log(intersection(arr6, arr7, arr8));

