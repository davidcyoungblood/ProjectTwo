package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Status;
@Repository
public interface StatusRepository extends JpaRepository<Status, Integer>{
	
}
