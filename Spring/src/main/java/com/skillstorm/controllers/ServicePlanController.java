package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.beans.Profile;
import com.skillstorm.beans.ServicePlan;
import com.skillstorm.repositories.ServicePlanRepository;

@RestController
@RequestMapping("/plan")
@CrossOrigin(origins = "*")
public class ServicePlanController {

	@Autowired
	private ServicePlanRepository repository;

	
	@GetMapping() // GET METHOD
	public List<ServicePlan> getServicePlans() {
		return repository.findAll();
	}
	

	@GetMapping("/{id}")
	public Optional<ServicePlan> findById(@PathVariable int id) {
		return repository.findById(id);

	}

}
