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

const index = str7.indexOf("string2");
console.log(index);

const index2 = str7.indexOf("String4");
console.log(index2);