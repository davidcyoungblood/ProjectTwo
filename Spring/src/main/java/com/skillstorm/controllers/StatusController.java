package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.Status;
import com.skillstorm.repositories.StatusRepository;

@RestController
@RequestMapping("/status")
@CrossOrigin(origins = "*")
public class StatusController {
	@Autowired
	private StatusRepository repository; 
	
	@GetMapping()
	public List<Status> getStatuses() {
		return repository.findAll(); 
	}
	
	@GetMapping("/{id}")
	public Optional<Status> findById(@PathVariable int id) {
		return repository.findById(id); 
	}
	
	@PutMapping("/{id}")
	@Transactional
	public Status update(@RequestBody Status status, @PathVariable int id) {
		if(repository.existsById(id)) {
			status.setId(id); 
			return repository.save(status);
		}
		else {
			throw new IllegalArgumentException("Id doesn't exist"); 
		}
		
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		repository.deleteById(id); 
		return ResponseEntity.noContent().header("Custom-header", "abcde").build(); 
	}
	
	
}
