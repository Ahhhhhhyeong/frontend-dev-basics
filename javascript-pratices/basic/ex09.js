/*
자바스크립트 객체IV: prototype 기반의 상속과 오버라이딩 : 자바스크립트 객체지향 프로그래밍 
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'douzone';
MyObject.prototype.course = '신입사원교육';
MyObject.prototype.info = function() {
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course);
};

// MyObject 객체 생성
var o = new MyObject('마이콜', 30);
o.school = 'BIPA';
o.info();






// MyObject 객체 생성2
var o2 = new MyObject('둘리', 10);
o2.info = function() {
    console.log('쉿!');
}
o2.info();
