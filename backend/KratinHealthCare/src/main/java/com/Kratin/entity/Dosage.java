package com.Kratin.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
// this class record medicine dosage record
public class Dosage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String medicineName;
	
	@ManyToOne
	@JoinColumn(name = "fk_diseaseId")
	@JsonIgnore
	private Disease disease;
	
	@OneToMany(mappedBy = "dosage", cascade = CascadeType.ALL, orphanRemoval = true)

	private List<TimeTable> timeTable;

	public Dosage(Integer id, String medicineName, Disease disease, List<TimeTable> timeTable) {
		super();
		this.id = id;
		this.medicineName = medicineName;
		this.disease = disease;
		this.timeTable = timeTable;
	}

	public Dosage() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public Disease getDisease() {
		return disease;
	}

	public void setDisease(Disease disease) {
		this.disease = disease;
	}

	public List<TimeTable> getTimeTable() {
		return timeTable;
	}

	public void setTimeTable(List<TimeTable> timeTable) {
		this.timeTable = timeTable;
	}

	@Override
	public String toString() {
		return "Dosage [id=" + id + ", medicineName=" + medicineName + ", disease=" + disease + ", timeTable="
				+ timeTable + "]";
	}
	
	
}
