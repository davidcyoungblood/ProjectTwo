package com.skillstorm.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ServicePlan")
public class ServicePlan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ServicePlanId")
	private int id;

	@Column(name = "Name")
	private String name;

	@Column(name = "StartDate")
	private String startDate;

	@Column(name = "NextBillDate")
	private String nextBillDate;

	@Column(name = "EndDate")
	private String endDate;

	@Column(name = "Price")
	private String price;

	// this side of the relationship is serialized, ignoring in Status
	@ManyToOne
	@JoinColumn(name = "StatusId")
	private Status statusId;

	// this side of the relationship is serialized, ignoring in Intervals
	@ManyToOne
	@JoinColumn(name = "IntervalsId")
	private Intervals intervalId;

	// this side of the relationship is JsonIgnored, serialized in Profile
	@OneToMany(mappedBy = "servicePlanId")
	@JsonIgnore
	private List<Profile> profile;

	public ServicePlan() {
		super();
	}

	public ServicePlan(String name, String startDate, String nextBillDate, String endDate, String price,
			Status statusId, Intervals intervalId) {
		super();
		this.name = name;
		this.startDate = startDate;
		this.nextBillDate = nextBillDate;
		this.endDate = endDate;
		this.price = price;
		this.statusId = statusId;
		this.intervalId = intervalId;
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

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getNextBillDate() {
		return nextBillDate;
	}

	public void setNextBillDate(String nextBillDate) {
		this.nextBillDate = nextBillDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Status getStatusId() {
		return statusId;
	}

	public void setStatusId(Status statusId) {
		this.statusId = statusId;
	}

	public Intervals getIntervalId() {
		return intervalId;
	}

	public void setIntervalId(Intervals intervalId) {
		this.intervalId = intervalId;
	}

	public List<Profile> getProfile() {
		return profile;
	}

	public void setProfile(List<Profile> profile) {
		this.profile = profile;
	}

}
