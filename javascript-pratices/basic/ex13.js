/**
 * string primitive type과 (String.prototype.*)
 */

// 배열처럼 접근이 가능하다
const str1 = 'Hello World';
for(let i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
const str2 = 'Hello';
const str3 = 'World';
const str4 = str2 + str3;
console.log(str4);

// 캐스팅
const str5 = 5 + '5';
console.log(str5);

const str6 = 'boolean: ' + true;
console.log(str6);

// 객체 함수
const str7 = 'string1 string2 string 3';

const index = str7.indexOf("string2"); // 8
console.log(index);

const index2 = str7.indexOf("String4"); // -1
console.log(index2);

const str8 = str7.substring(10, 13/* last index-1 */);
console.log(str8);

const a = str7.split(" ");
console.log(a);

const str9 = "abcdef";
const b = str9.split(":");
console.log(b);