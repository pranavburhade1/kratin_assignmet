package com.Kratin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Kratin.dto.ApiResponse;
import com.Kratin.dto.LogInCred;
import com.Kratin.entity.Disease;
import com.Kratin.entity.User;
import com.Kratin.services.UserServices;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserServices uService;

	// for adding user inside our data base
	@PostMapping("/add")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		User userFromDB = null;

		try {
			userFromDB = uService.addUser(user);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Unable to create User.",e.getMessage()));
			
		}
	    return ResponseEntity.status(HttpStatus.OK).body(userFromDB);
		
	}
	//log in with log in credentials such as email and password
	@PostMapping("/login")
	public ResponseEntity<?> logIn(@RequestBody LogInCred user) {
		User userFromDB = null;

		try {
			userFromDB = uService.logInUser(user.getEmail(), user.getPassword());
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Something went wrong",e.getMessage()));	
		}
		if(user == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse("Invalid Credinals"));	
		}
	    return ResponseEntity.status(HttpStatus.OK).body(userFromDB);
		
	}
	
	// add disease api
	@PostMapping("/addDisease/{userId}")
	public ResponseEntity<?> addDisease(@RequestBody Disease disease, @PathVariable("userId") String userId) {
	
		String msg = uService.addDisease(disease, Integer.parseInt(userId));
		if(msg.equals("disease added sucessfully")) {
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(msg);
		}
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(msg);
		
	}
	
	//get all added dissease specific to user
	@GetMapping("/getDisease")
	public ResponseEntity<?> getUsersAllDisease(@RequestParam Integer userId) {
		System.out.println(userId);
	List<Disease> diseaseList = uService.getAllDisease(userId);
	
	if(diseaseList == null) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
	}
	   return ResponseEntity.status(HttpStatus.OK).body(diseaseList);
	}
}
