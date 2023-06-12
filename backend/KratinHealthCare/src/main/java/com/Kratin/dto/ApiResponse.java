package com.Kratin.dto;

import java.time.LocalDateTime;



// this class is for sending responce to cliend 
public class ApiResponse {
	private String message;
	private String errorDetails;
	private LocalDateTime timeStamp;
	public ApiResponse(String msg) {
		super();
		this.message = msg;
		timeStamp=LocalDateTime.now();
	}
	public ApiResponse(String message, String errorDetails) {
		super();
		this.message = message;
		this.errorDetails = errorDetails;
		timeStamp=LocalDateTime.now();
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getErrorDetails() {
		return errorDetails;
	}
	public void setErrorDetails(String errorDetails) {
		this.errorDetails = errorDetails;
	}
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	
	
	
}

