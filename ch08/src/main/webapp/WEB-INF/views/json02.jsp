<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>
<script>
	window.addEventListener("DOMContentLoaded", function(){
		document
			.getElementsByTagName("button")[0]
			.addEventListener("click", function(){
				var xhr = null;
				
				if(window.ActiveXObject){ // <= IE9
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				} else if(window.XMLHttpRequest) { // Standard Browser
					xhr = new XMLHttpRequest();
				} else {
					console.log('AJAX 기능을 사용할 수 없습니다.');
					return;
				}

				xhr.addEventListener("readystatechange", function(){
					if(this.readyState == XMLHttpRequest.UNSENT){
						//Request가 초기화 되기 이전
						console.log("State: UNSENT");
					}else if(this.readyState == XMLHttpRequest.OPENED){
						// 서버와 연결이 성공
						console.log("State: OPENED");
					}else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){
						// 서버가 request success 
						console.log("State: HEADERS_RECEIVED");
					}else if(this.readyState == XMLHttpRequest.LOADING){
						// response를 받아 처리
						console.log("State: LOADING");
					}else if(this.readyState == XMLHttpRequest.DONE){
						// response 처리가 끝남
						console.log("State: DONE");
						
						if(this.status != 200){
							console.error("error: " + status);
							return;
						}

						//console.log(this.responseText, typeof(this.responseText));
						var response = JSON.parse(this.responseText);
						//console.log(response, typeof(response));
					
						if(response.result === 'fail') {
							console.error(response.message);
							return;
						} 
							
						var vo = response.data;
						var htmls = "";
						htmls += ("<h3>" + vo.no + "</h3>");
						htmls += ("<h4>" + vo.name + "</h4>");
						htmls += ("<h5>" + vo.message + "</h5>");
						
						document
							.getElementById("data")
							.innerHTML = htmls;
						
					}
				});

				xhr.open("get", "${pageContext.request.contextPath }/api/json ", true);
				xhr.send();
		});

	});
</script>
</head>
<body>
	<h1>AJAX test: JSON format Data $.ajax() 함수 사용하기</h1>
	
	<button>데이터 가져오기</button>
	<div id = "data">		
	</div>
</body>
</html>