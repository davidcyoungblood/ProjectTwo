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

import com.skillstorm.beans.BillingInformation;
import com.skillstorm.repositories.BillingInfoRepository;


@RestController
@RequestMapping("/billing")
@CrossOrigin(origins = "*")
public class BillingInformationController {
	@Autowired
	private BillingInfoRepository repository;

	@GetMapping()
	public List<BillingInformation> getBillingInfo() {
		return repository.findAll();
	}

	/*
	 * @GetMapping("/{id}") public Optional<BillingInformation>
	 * findById(@PathVariable int id) { return repository.findById(id); }
	 */

	@GetMapping("/{id}")
	public List<BillingInformation> findByProfile(@PathVariable int id) {
		return repository.findByProfileId(id);
	}

	@PutMapping("/{id}")
	@Transactional
	public BillingInformation update(@RequestBody BillingInformation billinginfo, @PathVariable int id) {
		if (repository.existsById(id)) {
			billinginfo.setId(id);
			return repository.save(billinginfo);
		} else {
			throw new IllegalArgumentException("Id doesn't exist");
		}

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().header("Custom-header", "abcde").build();
	}
}
