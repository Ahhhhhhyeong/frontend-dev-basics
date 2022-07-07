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
$(function(){
	$("#create").click(function(){
		var vo = {
			name: "둘리",
			email: "dooly@gmail.com",
			password: "1234",
			gender: "male"
		};
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user",
			type: "post",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		});
	});
	
	$("#read").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: "get",
			dataType: "json",
			success: function(response){
				console.log(response);
			}
		});
	});
	
	$("#update").click(function(){
		var vo = {
			name: "둘리2",
			password: "12345",
			gender: "female"
		};
		$.ajax({
			url: "${pageContext.request.contextPath }/api/user/10",
			type: "put",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX test: Restful API</h1>
	
	<button id="create">Create(POST)</button>
	<br/><br/>
	<button id="read">Read(POST)</button>
	<br/><br/>
	<button id="update">Update(POST)</button>
	<br/><br/>
	<button id="delete">Delete(POST)</button>
	<br/><br/>
	<div id = "data"></div>
</body>
</html>