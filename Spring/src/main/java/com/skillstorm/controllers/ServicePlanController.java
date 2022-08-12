package com.skillstorm.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@PutMapping("/{id}")
	@Transactional
	public ServicePlan update(@RequestBody ServicePlan servicePlan, @PathVariable int id) {
		if (repository.existsById(id)) {
			servicePlan.setId(id);
			return repository.save(servicePlan);
		} else {
			throw new IllegalArgumentException("Id doesn't exist");
		}

	}

}
