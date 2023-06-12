package com.Kratin.services;

import java.util.List;

import com.Kratin.entity.Disease;
import com.Kratin.entity.User;

public interface UserServices {
	
	public User addUser(User user);
	
	public User logInUser(String email, String password);
	
	public String addDisease(Disease disease, Integer userId);
	
	public List<Disease> getAllDisease(Integer userId);

}
