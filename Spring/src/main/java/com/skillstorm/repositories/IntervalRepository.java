package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.beans.Intervals;

@Repository
public interface IntervalRepository extends JpaRepository<Intervals, Integer>{

}
