/**
 * Array 객체 함수(Array.prototype.*)
 */

var color = ['white', 'blue', 'pink'];
var fruits = ['apple', 'banana', 'mango'];

// concat
console.log("=====concat=====");
var fr1 = fruits.concat(color);
console.log(fr1);

// pop, push: stack 지원 함수
console.log("=====pop=====");
color.pop();
console.log(color);

// join
console.log("=====join=====");
var str = fruits.join(":");
console.log(str);

// reverse
console.log("=====reverse=====");
console.log(fruits);
fruits.reverse();
console.log(fruits);


// shift
console.log("=====shift=====");
var numbers = [1000,3000,2000,5000,4000,8000];
var number = numbers.shift();
console.log(number, numbers);


// slice
console.log("===slice====");
var numbers = numbers.slice(1, 3);
console.log(numbers);

// splice
// index에서 count개를 삭제한 후, 삭제된 요소를 배열로 반환
console.log("===splice(index, count)====");
console.log(fruits);
let fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// index에서 count개를 삭제하고 replace로 대체 한 후, 삭제된 요소를 배열로 반환
console.log("===splice(index, count, replace)====");
let arr1 = [0, 1, 2, 3, 4];
let arr2 = arr1.splice(1, 3, 10);
console.log(arr2, arr1);

// a1.removeAt(1)
console.log("===a1.removeAt(1)====");
let a1 = [0,1,2,3,4];
a1.splice(1, 1);
console.log(a1);

// a2.insertAt(1, 10)
console.log("===a2.insertAt(1, 10)====");
let a2 = [0,1,2,3,4];
a2.splice(1, 0, 10);
console.log(a2);
