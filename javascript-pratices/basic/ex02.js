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
        1. new 생성자함수 () 사용해서 생성
            Number() => obejct 타입 객체
            String() => obejct 타입 객체
            Boolean() => obejct 타입 객체
            Object() => obejct 타입 객체
            Array() => obejct 타입 객체
            Date() => obejct 타입 객체
            Funtion() => function 타입 객체
            RegExp() => obejct 타입 객체
        2. {} 객체 리터럴, javascript object anotaction]
        3. [] 배열 리터럴
        4. null 
    - function
        1. function f() {...}
        2. var f = function() {... }
        3. var f = new Function(...);
*/

/**
 * 자바 스크립트 객체를 분류 하는 또 다른 방법
 * 1. 내장(Built-in, Native, Engine) 객체
 *      자바스크립트 엔진에 미리 내장되어 있는 객체
 *      Number, Boolean, Date, RegExp, ... : 생성자 함수
 *      parseInt, setTimeout, setInterval, eval, ... : 일반 함수
 * 2. 호스트 객체
 *      - 호스트 환경이 브라우저: document, location, XmlHttpRequest, window, ...
 *      - 호스트 환경이 Node: os, http, fs, path, ...
 * 3. 사용자 객체
 *      자바스크립트 엔진이 실행되면서 생성되는 객체들
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
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

var o2 = {};
// var o2 = {  // 객체를 표현하는 표현식(리터럴 형식)
//     name: "aaaa",
//     email: "aaaa@mail.com"
// };
var a2 = [];
var n = null;

console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("o2:" + typeof(o2));
console.log("a:" + typeof(a));
console.log("a2:" + typeof(a));
console.log("d:" + typeof(d));
console.log("n:" + typeof(n));



console.log("=======================객체2[function Type]=========================");

function f(a, b) {
    return a+b;
}

var f2 = function(a, b){
    return a + b;
}

var f3 = new Function("a", "b", "return a + b");

console.log(f(10, 20), f2(10, 20), f3(10, 20));




// 원시타입의 메소드가 호출 될 때
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다: 유사 객체
console.log("=================원시 타입도 메소드 호출이 가능하다====================");
console.log(b.valueOf());          //결과: [Function: valueOf]       // new Boolean(b).valueOf();
console.log(b2.valueOf());
