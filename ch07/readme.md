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

