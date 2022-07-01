/**
 * Date 객체 메소드 (Date.prototype.*)
 */

// 현재 시간
let now = new Date();
console.log(now);

// 2022-02-22 출력
const d1 = new Date(2022, 1/* month=month-1 */, 22);
console.log(d1);    

// 2022-02-22 22:22:22 출력
const d2 = new Date(2022, 1, 22, 22, 22, 22);
console.log(d2);    

// 객체 함수
console.log(
    "년: " + now.getFullYear() + 
    " 월: " + (now.getMonth()+1) +
    " 일: " + now.getDate() + "\n" +
    " 시 : " + now.getHours() +
    " 분: " + now.getMinutes() +
    " 초: " + now.getSeconds() + 
    " 밀리초: " + now.getMilliseconds()
    );


d2.setFullYear(2024);
console.log(d2);

d2.setMonth(11);
console.log(d2);