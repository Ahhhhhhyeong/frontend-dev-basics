/**
 * Array 확장 (prototype 기반의 확장)
 * List 함수 추가
 */

Array.prototype.remove = function (index) {
    this.splice(index, 1);
}

Array.prototype.insert = function (index, value) {
    if (value instanceof Array) {
     /*    for (var i = 0; i < value.length; i++) {
            this.splice(index++, 0, value[i]);
        } */

        // ERROR!!!!
        // 콜백 안의 this는 어휘상의 this와 일치하지 않는다
        /* value.forEach(function(e){
            //this.splice(index++, 0, e);
            console.log(this);
        }); */
        
        // 해결방법 1
      /*   var _this = this;
        value.forEach(function(e){
            _this.splice(index++, 0, e);
        }); */

        // 해결방법 2 : Function.prototype.bind()로 함수 실행 때의 this를 세팅해 줄 수 있다
        value.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this));
        
    } else {
        this.splice(index, 0, value);

    }
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a','b','c']);
console.log(a);