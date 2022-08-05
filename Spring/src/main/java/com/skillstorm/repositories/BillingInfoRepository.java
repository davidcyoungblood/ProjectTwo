package com.skillstorm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.BillingInformation;

@Repository
public interface BillingInfoRepository extends JpaRepository<BillingInformation, Integer>{

	@Query("FROM BillingInformation billing inner join billing.profileId p where p.id = ?1")
	public List<BillingInformation> findByProfileId(int id); 
	
}
