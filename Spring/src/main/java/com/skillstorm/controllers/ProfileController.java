package com.skillstorm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.Profile;
import com.skillstorm.repositories.ProfileRepository;

@RestController
@RequestMapping("/profiles")
//@CrossOrigin(origins = "*")
public class ProfileController {
	
	@Autowired
	private ProfileRepository repository;
	
	@GetMapping // GET METHOD
	public List<Profile> getProfiles() {
		// Here we can add custom response codes using @ApiResponse
		// Maybe you want to log some information to a logger 'log.debug'
		return repository.findAll();
	}
	
	

}
