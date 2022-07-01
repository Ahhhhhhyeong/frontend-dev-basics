/**
 * 자바스크립트 객체III: 확장
 */

var o = {
    name: 'Amy',
    age: 10
};

var f = function(){
    console.log('Hello World');
}

console.log(o);
f();

console.log("========확장===========");
o.another = {
    name:'Eric',
    age:30
}

console.log(o);

console.log("=====기본 타입(primitive type)은 확장 되지 않는다=======");
var i1 = 10;
var i2 = new Number(10);
i2.another = {
    name:'마이콜',
    age:30
}

console.log(i2);

i1.another = {};            // 유사 객체로 실행 : new Number(i1).another={}
console.log(i1.another);    // 유사 객체로 실행 : console.log(new Number(i1).another)