package com.skillstorm.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "BillingInformation")
public class BillingInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BillingInformationId")
	private int id;

	@Column(name = "BilledOnDate")
	private String billedOnDate;

	// this side of the relationship is serialized, ignoring in Profile
	@ManyToOne
	@JoinColumn(name = "ProfileId")
	private Profile profileId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBilledOnDate() {
		return billedOnDate;
	}

	public void setBilledOnDate(String billedOnDate) {
		this.billedOnDate = billedOnDate;
	}

	public Profile getProfileId() {
		return profileId;
	}

	public void setProfileId(Profile profileId) {
		this.profileId = profileId;
	}

}
