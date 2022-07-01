/**
 * URL 다루기
 */

const url1 = "http://www.mysite.com/user?name=둘리&no=10"; 

// 1. escape: URL 전부 encoding
const url2 = escape(url1); 
console.log(url2); //결과: http%3A//www.mysite.com/user%3Fname%3D%uB458%uB9AC%26no%3D10

// 2. encodeURI: parameter만 encoding
const url3 = encodeURI(url1);
console.log(url3); // 결과: http://www.mysite.com/user?name=%EB%91%98%EB%A6%AC&no=10

// 3. encodeURIComponent: 값만 encoding해야하는 경우 사용
const url4 = encodeURIComponent(url1); // 잘못 사용한 경우
console.log(url4); // 결과 : http%3A%2F%2Fwww.mysite.com%2Fuser%3Fname%3D%EB%91%98%EB%A6%AC%26no%3D10

// 4. 
const url = "http://www.mysite.com/user";
let params = {
    name: '둘리',
    no: 10
};

const toQueryString = function(o) { 
    let qs = [];
    for(prop in o){
        qs.push(prop + "=" + o[prop]);
    }

    return qs.join('&');
}
const url5 = url + "?" + toQueryString(params);
console.log(url5);