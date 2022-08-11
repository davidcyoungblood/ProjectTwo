package com.skillstorm.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class HomeController {

	@GetMapping("/")
	public void getWelcome() {
		System.out.println( "Welcome / StormCloud!");
//		return "Welcome / StormCloud!";
	}

	@GetMapping("/user")
	public String getUser() {
		return "Welcome /user StormCloud!";
	}

	@GetMapping("/admin")
	public String getAdmin() {
		return "Welcome /admin StormCloud!";
	}

}
