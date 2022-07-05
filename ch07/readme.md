## [jQuery 사용하는 방법](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch07/src/main/webapp/ex01.html)
- 압축버전(애플리케이션 서비스 서버 호스팅) 
    - compressed, production
    - ```<script src="jquery/jquery-3.6.0.min.js"></script>```
- 소스버전(애플리케이션 서비스 서버 호스팅)
    - uncompressed, development
    - ```<script src='jquery/jquery-3.6.0.js'></script>```

- 압축버전(CDN)
    - compressed, production 
    - ```<script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>```

- 소스버전(CDN)
    - uncompressed, development
    - ```<script src='https://code.jquery.com/jquery-3.6.0.js'></script>```

> **jQuery는 DOM 엘리먼트를 선택하는 작업을 보통 먼저 하기 때문에
> DOM 로딩이 완료된 후에 작성한다.**   

[이동하기](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch07/src/main/webapp/ex02.html)
   
```javascript
	// 1. DOM이 완료된 시점: DOM API 사용
	window.addEventListener("load", function(){
		var $obj = $("#header");
		console.log($obj.length); // 결과 => 1
	});

	// 2. DOM이 완료된 시점: jQuery를 사용하는 방법1
	$(document).ready(function(){
		var $obj = $("#header");
		console.log($obj.length); // 결과 => 1
	});

	// 3. DOM이 완료된 시점: jQuery를 사용하는 방법2: 추천
	$(function() {
		
		// 반환되는 jQuery Object는 절대 null이거나 undefined가 될 수 없다.
		var $obj = $("#none");
		console.log($obj !== null, $obj !== undefined)
		// => 결과 : true true

		// 반환되는 jQuery Object는 유사 배열이다.
		var $obj = $("ul li");
		console.log($obj.length, $obj[0], $obj instanceof Array); // 결과 => 4 <li>​…​</li>​::marker​"텍스트 텍스트 텍스트 텍스트"</li>​ false

	});
```

## [Simple jQuery 만들기](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch07/src/main/webapp/jquery/jquery-simple.js)

[**Simple-jQuery 사용**](https://github.com/Ahhhhhhyeong/frontend-dev-basics/blob/main/ch07/src/main/webapp/ex03-3.html)
```javascript
$(function() {
   var $obj = $(".par");

   console.log($obj.length); // 2
   console.log(typeof($obj)+":"+$obj instanceof Array); // 유사배열
   console.log($obj[0]);      // HTMLElement 객체에 접근 가능

   $obj.css("color", "red");
   $obj.click(function() {
		// 이벤트 핸들러에서의 this는 jQuery Object
		console.log(this);

		// 만약, 핸들러 안에서 이벤트 대상이 되는 this(HTMLElement)의 CSS나 DOM 조작을 해야 하는 경우,
		// 다시 jQuery($)의 파라미터로 전달해서 jQuery Object Wrapping 한다.
		// this.style.color = "blue";
		$(this).css("color", "blue");

		//jQuery Object의 거의 모든 API 함수(travese API제외)는 호출한 jQuery Object를 다시 반환한다.
		//따라서 함수 chain이 가능하다.
		$(this).css("text-decoration", "underline").text("클릭!!!");
   });
});
```