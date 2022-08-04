package com.skillstorm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer>{
	
//	public Profile save(Profile profile);

	
	
}
