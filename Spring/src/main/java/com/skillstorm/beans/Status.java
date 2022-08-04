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
	@Column(name = "StatusId")
	private int id;

	@Column(name = "Name")
	private String name;

	// this side of the relationship is JsonIgnored, serialized in ServicePlan
	@OneToMany(mappedBy = "statusId")
	@JsonIgnore
	private List<Profile> statusProfile;

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

	public List<Profile> getStatusProfile() {
		return statusProfile;
	}

	public void setStatusProfile(List<Profile> statusProfile) {
		this.statusProfile = statusProfile;
	}

}
