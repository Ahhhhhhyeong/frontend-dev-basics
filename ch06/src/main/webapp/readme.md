# Browse Programming I
- DOM
- BOM
- XmlHttpRequest

=>API(Native Programming, Pure JavaScript, Vanila Script)

--- 

# JS Library
### jQuery
![image](https://user-images.githubusercontent.com/50813232/177063705-c972c7f2-dc94-4d1e-b366-009e4ebc696d.png)   
![image](https://user-images.githubusercontent.com/50813232/177063794-e8735754-a652-4335-86ec-721a091e7d70.png)   
**node = JS 엔진**   
---
### brower-detect
```javascript
var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
    ...
}
```
=> 브라우저 서치하는 함수
=> bloolean 타입으로 번질 수 있다. 

---
# [용어정리](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch06/src/main/webapp/ex05.html)

### 1. 태그(tag)
1. HTML 문서 안에서 TEXT나 Contents 정의할 때 사용하는 마크업

### 2. 문서객체(Document Object, DOM)
1. DOM(Document Object Model)
2. 구현 Tree의 구성 노드는 HTMLElement Object
3. JavaScript에서 접근하여 순회 및 조작을 한다.

### 3. 노드	
1. DOM Tree의 각각의 요소

---
# [DOM Event 종류](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch06/src/main/webapp/ex10.html)
1. 마우스
	- mouseover, mouseout
	- mousedown -> mouseup -> click
	- mousedown -> mouseup -> click --- mousedown -> mouseup -> click -> dblclick
2. 키보드
	- keydown -> keyup -> keypress
3. form
	- submit
4. input
	- focus, blur, change
5. touch (모바일)
	
# [DOM Event 용어 정리](#)
1. Event Name
	- load, Click, mouseDown, submit, blur

2. Event Attribute
	- DOM Event Model Level0
	- onclick, onload, onmousedown, onsubmit, ...

3. Event Listener
	- DOM Event Model Level2
	- function(){...}

4. DOM Event Model
	- DOM HTML Element의 Event Handler를 설정하는 방법에 대한 표준 
	- DOM Event Model Level0
		1. inline
			- 태그안에 Event Attribute(ex. onclick)에 JavaScript 코드를 설정하는 방식
			- onclick='js코드' 
			- 웹표준 위배함 

		2. basic
			- 고전적인 이벤트 처리 방식
			- element.onclick = function(){...}
			- 문제점은 Event Handler를 하나 밖에 설정 못하는 것
	- DOM Event Model Level2
		1. Observer 패턴을 적용해서 Listener(함수, Event Handler)를 등록하는 방식
		2. 다중 Event Handler를 등록할 수 있다.
		3. Listener를 등록/제거 할 수 있는 함수(DOM API)를 제공해야 한다.
			- MS Internet Explorer(<=8): attachEvent/detachEvent
			- others(표준브라우저): addEventListener/removeEventListener
---
# [기본 이벤트 동작 막기](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch06/src/main/webapp/ex11.html)

1. anchor: 버튼이나 메뉴로 사용할 때(click event)
2. form: validation (submit event)