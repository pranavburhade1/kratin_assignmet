package com.Kratin.entity;

import java.util.List;

import com.Kratin.enums.Gender;
import com.Kratin.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;



@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(nullable = false)
	private String fullName;
	
	@Column(nullable = false)
	private int age;
	
	@Column(unique = true)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	private String addressLine1;
	
	@Column(nullable = false)
	private String city;
	
	private Gender gender;
	
	private Role role;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Disease> disease;

	public User(Integer id, String fullName, int age, String email, String password, String addressLine1, String city,
			Gender gender, Role role, List<Disease> disease) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.age = age;
		this.email = email;
		this.password = password;
		this.addressLine1 = addressLine1;
		this.city = city;
		this.gender = gender;
		this.role = role;
		this.disease = disease;
	}

	public User() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
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

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<Disease> getDisease() {
		return disease;
	}

	public void setDisease(List<Disease> disease) {
		this.disease = disease;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", age=" + age + ", email=" + email + ", password="
				+ password + ", addressLine1=" + addressLine1 + ", city=" + city + ", gender=" + gender + ", role="
				+ role + ", disease=" + disease + "]";
	}
	
	
	
	
	
	

}
