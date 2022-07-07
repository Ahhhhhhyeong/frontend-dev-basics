package com.douzone.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.ch08.dto.JSONResult;
import com.douzone.ch08.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
	
	@PostMapping("")
	public JSONResult create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
				
		return JSONResult.success(vo);
	}
	
	@GetMapping("/{no}")
	public JSONResult read(@PathVariable("no") Long no) {
		UserVo vo = new UserVo();
		vo.setNo(no);
		vo.setName("둘리");
		vo.setEmail("dooly@gmail.com");
		vo.setGender("male");
		
		return JSONResult.success(vo);
	}
	
	@GetMapping("/")
	public JSONResult read() {
		List<UserVo> list = new ArrayList<UserVo>();
		UserVo vo1 = new UserVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		vo1.setEmail("dooly@gmail.com");
		vo1.setGender("male");
		list.add(vo1);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		vo2.setEmail("michol@gmail.com");
		vo2.setGender("male");
		list.add(vo2);
		
		return JSONResult.success(list);
	}
	
	@PutMapping("/{no}")
	public JSONResult update(@PathVariable("no") Long no, 
							 @RequestBody UserVo vo) {
		System.out.println("no: " + no);
		System.out.println("uservo: " + vo);
		//업데이트 치고나서
		vo.setNo(no);
		//보여주기전에 패스워드 비워두기
		vo.setPassword("");		
		return JSONResult.success(vo);
	}
}
