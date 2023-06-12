package com.Kratin.entity;

import java.time.LocalTime;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
//  this class records timetable of taking medicine
public class TimeTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private LocalTime time;
	
	@ManyToOne
	@JoinColumn(name = "fk_dosageId")
	@JsonIgnore
	private Dosage dosage;

	public TimeTable(Integer id, LocalTime time, Dosage dosage) {
		super();
		this.id = id;
		this.time = time;
		this.dosage = dosage;
	}

	public TimeTable() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public Dosage getDosage() {
		return dosage;
	}

	public void setDosage(Dosage dosage) {
		this.dosage = dosage;
	}

	@Override
	public String toString() {
		return "TimeTable [id=" + id + ", time=" + time + ", dosage=" + dosage + "]";
	}
	
	
	

}
