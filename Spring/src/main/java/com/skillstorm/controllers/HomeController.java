package com.skillstorm.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class HomeController {

	@GetMapping("/")
	public String getWelcome() {
		return "Welcome / StormCloud!";
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
