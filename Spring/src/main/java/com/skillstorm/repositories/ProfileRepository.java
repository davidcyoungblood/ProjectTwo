package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer> {

	// treat the query as native one not according to JPA specification
	@Query(value = "SELECT ProfileId FROM Profile p WHERE p.Email = ?1 AND p.Password = ?2", nativeQuery = true)
	public int findIdByEmailAndPassword(String email, String password);

	
	@Query(value = "SELECT ProfileId FROM Profile p WHERE p.Email = ?1", nativeQuery = true)
	public int findIdByEmail(String email);
	
}
