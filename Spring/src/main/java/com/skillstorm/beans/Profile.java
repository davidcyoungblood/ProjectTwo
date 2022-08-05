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
@Table(name = "Profile")
public class Profile {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ProfileId")
	private int id;

	@Column(name = "FirstName")
	private String firstName;

	@Column(name = "LastName")
	private String lastName;

	@Column(name = "Username")
	private String username;

	@Column(name = "Email")
	private String email;

	@Column(name = "Password")
	private String password;

	@Column(name = "StartDate")
	private String startDate;

	@Column(name = "NextBillDate")
	private String nextBillDate;

	@Column(name = "EndDate")
	private String endDate;

	// this side of the relationship is serialized, ignoring in ServicePlan
	@ManyToOne
	@JoinColumn(name = "ServicePlanId")
	private ServicePlan servicePlanId;

	// this side of the relationship is JsonIgnored, serialized in
	// BillingInformation
	@OneToMany(mappedBy = "profileId")
	@JsonIgnore
	private List<BillingInformation> billingInformation;

	// this side of the relationship is serialized, ignoring in Status
	@ManyToOne
	@JoinColumn(name = "StatusId")
	private Status statusId;

	// this side of the relationship is serialized, ignoring in Intervals
	@ManyToOne
	@JoinColumn(name = "IntervalsId")
	private Intervals intervalId;

	public Profile() {
		super();
	}

	public Profile(String firstName, String lastName, String username, String email, String password, String startDate,
			String nextBillDate, String endDate, ServicePlan servicePlanId, Status statusId, Intervals intervalId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.startDate = startDate;
		this.nextBillDate = nextBillDate;
		this.endDate = endDate;
		this.servicePlanId = servicePlanId;
		this.statusId = statusId;
		this.intervalId = intervalId;
	}

	public Profile(String firstName, String lastName, String username, String email, String password, String startDate,
			String nextBillDate, String endDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.startDate = startDate;
		this.nextBillDate = nextBillDate;
		this.endDate = endDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public ServicePlan getServicePlanId() {
		return servicePlanId;
	}

	public void setServicePlanId(ServicePlan servicePlanId) {
		this.servicePlanId = servicePlanId;
	}

	public List<BillingInformation> getBillingInformation() {
		return billingInformation;
	}

	public void setBillingInformation(List<BillingInformation> billingInformation) {
		this.billingInformation = billingInformation;
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

}
