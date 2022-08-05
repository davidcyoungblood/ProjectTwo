package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.Profile;
import com.skillstorm.repositories.BillingInfoRepository;
import com.skillstorm.repositories.ProfileRepository;
import com.skillstorm.repositories.ServicePlanRepository;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = "*")
public class ProfileController {

	@Autowired
	private ProfileRepository repository;

	@Autowired
	private ServicePlanRepository repo2;
	
	//test
	@Autowired
	private BillingInfoRepository repo3;

	@GetMapping() // GET METHOD
	public List<Profile> getProfiles() {
		return repository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Profile> findById(@PathVariable int id) {
		return repository.findById(id);
	}

	@PostMapping
	@Transactional
	public ResponseEntity<Profile> save(@RequestBody Profile profile) {
//		ServicePlan plan = repo2.findById(1).get();
//		if (profile.getServicePlanId() == null) {
//			ServicePlan plan = repo2.findById(1).get();
//			profile.setServicePlanId(plan);
//		}

		return new ResponseEntity<>(repository.save(profile), HttpStatus.CREATED);
	}

	// PUT update info
	@PutMapping("/{id}")
	@Transactional
	public Profile update(@RequestBody Profile profile, @PathVariable int id) {
		if(repository.existsById(id)) {
			profile.setId(id); 
			return repository.save(profile);
		}
		else {
			throw new IllegalArgumentException("Id doesn't exist"); 
		}
		
	}
	//axios call from ProfileDetails
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		repository.deleteById(id); 
		return ResponseEntity.noContent().header("Custom-header", "abcde").build(); 
	}
	

}
