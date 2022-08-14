package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.ServicePlan;

@Repository
public interface ServicePlanRepository extends JpaRepository<ServicePlan, Integer>{
	

}