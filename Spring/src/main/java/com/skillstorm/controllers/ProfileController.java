package com.skillstorm.controllers;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.aop.AopInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

import com.skillstorm.beans.Intervals;
import com.skillstorm.beans.Profile;
import com.skillstorm.beans.ServicePlan;
import com.skillstorm.beans.Status;
import com.skillstorm.repositories.BillingInfoRepository;
import com.skillstorm.repositories.IntervalRepository;
import com.skillstorm.repositories.ProfileRepository;
import com.skillstorm.repositories.ServicePlanRepository;
import com.skillstorm.repositories.StatusRepository;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = "*") // Spring MVC doesn't allow CORS by default

public class ProfileController {

	@Autowired
	private ProfileRepository profileRepository;

	@Autowired
	private ServicePlanRepository servicePlanRepository;

	@Autowired
	private StatusRepository statusRepository;

	@Autowired
	private IntervalRepository intervalRepository;

	// test
	@Autowired
	private BillingInfoRepository billingInfoRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@GetMapping() // GET METHOD
	public List<Profile> getProfiles() {
		return profileRepository.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Profile> findById(@PathVariable int id) {
		return profileRepository.findById(id);
	}

	@GetMapping("/{email}/{password}")
	public Optional<Profile> getProfileByEmailAndPassword(@PathVariable String email, @PathVariable String password) {
		boolean test = false;
		Profile profile = null;
		try {
			profile = profileRepository.findById(profileRepository.findIdByEmail(email)).get();

			test = passwordEncoder.matches(password, profile.getPassword());

		} catch (AopInvocationException e) {
			// TODO: handle exception
		}
		return (test ? profileRepository.findById(profile.getId()) : Optional.empty());

	}

	@PostMapping
	@Transactional
	public ResponseEntity<Profile> save(@Valid @RequestBody Profile profile) {

		profile.setPassword(passwordEncoder.encode(profile.getPassword()));

		// DEFAULT PROFILE SETTINGS
		Optional<ServicePlan> plan = servicePlanRepository.findById(1);
		Optional<Status> status = statusRepository.findById(1);
		Optional<Intervals> interval = intervalRepository.findById(1);

		if (plan.isPresent() && status.isPresent() && interval.isPresent()) {
			profile.setServicePlanId(plan.get());
			profile.setStatusId(status.get());
			profile.setIntervalId(interval.get());
		}

		return new ResponseEntity<>(profileRepository.save(profile), HttpStatus.CREATED);
	}

//	 PUT update info
	@PutMapping("/{id}")
	@Transactional
	public Profile update(@RequestBody Profile profile, @PathVariable int id) {
		if (profileRepository.existsById(id)) {
			profile.setId(id);

			// LOGIC FOR IF PASSWORD CHANGE
			Profile temp = profileRepository.findById(id).get();
			if (!Objects.equals(temp.getPassword(), profile.getPassword())) {
				profile.setPassword(passwordEncoder.encode(profile.getPassword()));
			}

			return profileRepository.save(profile);
		} else {
			throw new IllegalArgumentException("Id doesn't exist");
		}

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		// test
		//
		profileRepository.deleteById(id);
		return ResponseEntity.noContent().header("Custom-header", "abcde").build();
	}

}
