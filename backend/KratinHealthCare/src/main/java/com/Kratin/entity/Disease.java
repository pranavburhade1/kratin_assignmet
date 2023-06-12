package com.Kratin.entity;

import java.util.List;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
//this class records disease details
public class Disease {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private  String diseaseName;
	
	@OneToMany(mappedBy = "disease", cascade = CascadeType.ALL, orphanRemoval = true)

	private List<Dosage> dosage;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "fk_userId")
	@JsonIgnore
	private User user;

	public Disease(Integer id, String diseaseName, List<Dosage> dosage, User user) {
		super();
		this.id = id;
		this.diseaseName = diseaseName;
		this.dosage = dosage;
		this.user = user;
	}

	public Disease() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDiseaseName() {
		return diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public List<Dosage> getDosage() {
		return dosage;
	}

	public void setDosage(List<Dosage> dosage) {
		this.dosage = dosage;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Disease [id=" + id + ", diseaseName=" + diseaseName + ", dosage=" + dosage + ", user=" + user + "]";
	}
	
	

}
