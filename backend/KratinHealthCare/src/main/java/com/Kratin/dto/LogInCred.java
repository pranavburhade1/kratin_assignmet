package com.Kratin.dto;

import lombok.Data;

// this class is for taking log in credintial from client
public class LogInCred {
	
	private String email;
	
	private String password;

	public LogInCred(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public LogInCred() {
		super();
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

	@Override
	public String toString() {
		return "LogInCred [email=" + email + ", password=" + password + "]";
	}
	
	
	
	

}
