package com.douzone.ch08.controller.api;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.dto.JSONResult;
import com.douzone.ch08.vo.GuestBookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>Ajax 연습</h1><p>html 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JSONResult json() {
		GuestBookVo vo = new GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("둘리가 쓴 글");
		vo.setRegdate("2022-07-06");
		
		return JSONResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public JSONResult post01(GuestBookVo vo) {
		System.out.println(vo);		
		// service -> repository: DB insert 성공 후
		vo.setNo(1L);
		
		return JSONResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public JSONResult post02(@RequestBody GuestBookVo vo) {
		System.out.println(vo);		
		// service -> repository: DB insert 성공 후
		vo.setNo(2L);
		
		return JSONResult.success(vo);
	}
	
}