package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.Profile;
import com.skillstorm.repositories.ProfileRepository;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = "*")
public class ProfileController {

	@Autowired
	private ProfileRepository repository;

	@GetMapping() // GET METHOD
	public List<Profile> getProfiles() {
		// Here we can add custom response codes using @ApiResponse
		// Maybe you want to log some information to a logger 'log.debug'
		return repository.findAll();
	}

	@PostMapping
	@Transactional
	public ResponseEntity<Profile> save(@RequestBody Profile profile) {
		return new ResponseEntity<>(repository.save(profile), HttpStatus.CREATED); 
	}
	
	// Update findby id
	@GetMapping("/{id}")
	public Optional<Profile> findById(@PathVariable int id) {
		return repository.findById(id); 
		
	}

}
