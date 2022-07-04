# 0704 JS 정리
Browse Programming I
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