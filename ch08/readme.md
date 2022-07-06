# AJAX(Asynchronous JavaScript and XML)
* 자바스크립트를 이용해서 비동기식으로 XML을 이용하여 서버와 통신하는 방식
* 최근에는 XML 보다  JSON을 더 많이 사용한다.
* 비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻으로, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미

Ajax의 동작방식
1. 요청 : 브라우저는 서버에 정보를 요청한다.  (브라우저는 Ajax요청을 담당하는 XMLHttpRequest 라는 객체를 구현하고 있다.)
	[ 서버의 동작 : 서버는 응답으로 데이터를 전달한다. (XML, JSON) ]
2. 응답 : 브라우저는 콘텐츠를 처리하여 페이지에 추가한다.

---

## [DOM Load Event](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch08/src/main/webapp/WEB-INF/views/json02.jsp)
 1. load : 모두 다(DOM, CSSOM, img...)
 2. DOMContentLoaded : DOM만 로딩(CSSOM x , img x)