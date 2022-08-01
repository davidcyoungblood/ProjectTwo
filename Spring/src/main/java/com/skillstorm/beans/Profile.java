package com.skillstorm.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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

	@ManyToOne
	@JoinColumn(name = "ServicePlanId")
	@JsonIgnore
	private ServicePlan servicePlanId;

	@OneToMany(mappedBy = "profileId")
	@JsonIgnore
	private List<BillingInformation> billingInformation;

	public Profile() {
		super();
	}

	public Profile(String firstName, String lastName, String username, String email, String password,
			ServicePlan servicePlanId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.servicePlanId = servicePlanId;
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

}
