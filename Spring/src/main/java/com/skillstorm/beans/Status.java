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
@Table(name = "Status")
public class Status {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="StatusId")
	private int id;

	@Column(name = "Name")
	private String name;

	@OneToMany(mappedBy = "statusId")
	@JsonIgnore
	private List<ServicePlan> statusServicePlan;

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

	public List<ServicePlan> getStatusServicePlan() {
		return statusServicePlan;
	}

	public void setStatusServicePlan(List<ServicePlan> statusServicePlan) {
		this.statusServicePlan = statusServicePlan;
	}

	

}
