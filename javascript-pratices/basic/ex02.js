/*
    변수와 자료형(Data Type)
    - 변수들이 객체로 저장된다.(Variable Table)

    [기본타입 (primitive type)]
    - undefinded
    - number
    - string
    - boolean

    [객체타입]
    - object
    - function
*/

var u = undefined;
var i = 10;
var s = 'hello';
var b = false;

console.log("======================기본 타입(primitive, 원시)=========================");
                                // 결과 값
console.log("u: " + typeof(u)); // u: undefined
console.log("i: " + typeof(i)); // i: number
console.log("s: " + typeof(s)); // s: string
console.log("b: " + typeof(b)); // n: boolean


console.log("=======================객체1[object Type]=========================");
var i2 = new Number(10);
var s2 = new String('hello object');
var b2 = new Boolean(true);

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));


console.log("=======================객체2[function Type]=========================");

function f() {
}

console.log("f: " + typeof(f));





// 원시타입의 메소드가 호출 될 때
//console.log(b.valueOf );          //결과: [Function: valueOf]