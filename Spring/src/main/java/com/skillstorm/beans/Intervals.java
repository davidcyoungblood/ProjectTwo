package com.skillstorm.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Intervals")
public class Intervals {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="IntervalsId")
	private int id;

	@Column(name = "Name")
	private String name;

	@Column(name = "Duration")
	private String duration;

	// this side of the relationship is JsonIgnored, serialized in ServicePlan
	@OneToMany(mappedBy = "intervalId")
	@JsonIgnore
	private List<ServicePlan> intervalServicePlan;

	public Intervals() {
		super();
	}

	public Intervals(String name, String duration) {
		super();
		this.name = name;
		this.duration = duration;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public List<ServicePlan> getIntervalServicePlan() {
		return intervalServicePlan;
	}

	public void setIntervalServicePlan(List<ServicePlan> intervalServicePlan) {
		this.intervalServicePlan = intervalServicePlan;
	}

	

}
