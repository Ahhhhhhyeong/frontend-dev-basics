/**
 * unamed export
 * 
 * 1. exports.name = ....: commonJS(require)와 유사하다.
 * 2. 이 모듈을 import 할 때에는 destructinb이 가능하다.
 */

const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const divide = function(a, b){
    return a / b;
}

const multiply = function(a, b){
    return a * b;
}

export{add, subtract}
export default {divide, multiply}