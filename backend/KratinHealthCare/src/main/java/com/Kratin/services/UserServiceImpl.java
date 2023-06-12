package com.Kratin.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Kratin.entity.Disease;
import com.Kratin.entity.Dosage;
import com.Kratin.entity.TimeTable;
import com.Kratin.entity.User;
import com.Kratin.repository.DiseaseRepository;
import com.Kratin.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserServices {
	
	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	private DiseaseRepository dRepo;

	@Override
	public User addUser(User user) {
		
		return uRepo.save(user);
	}

	@Override
	public User logInUser(String email, String password) {
		
		return uRepo.findByEmailAndPassword(email, password);
	}

	@Override
	public String addDisease(Disease disease, Integer userId) {
		User user =  uRepo.findById(userId).orElseThrow();
		if(user == null) {
			return "no user with that id";
		}
		Disease diseaseFromDb = null;
		disease.setUser(user);
	
		
		for(int i = 0; i < disease.getDosage().size();i++) {
			Dosage dosage = disease.getDosage().get(i);
			dosage.setDisease(disease);
			for(int j = 0; j < dosage.getTimeTable().size(); j++) {
				TimeTable tmTable = dosage.getTimeTable().get(j);
				tmTable.setDosage(dosage);
			}
		}
		
		if(user.getDisease() == null) {
			user.setDisease(new ArrayList<Disease>());
		}
		user.getDisease().add(disease);
	
		
//		System.out.println(disease);
		try {
		diseaseFromDb = dRepo.save(disease);
		}
		catch(Exception e) {
			return e.getLocalizedMessage();
		}
		if(diseaseFromDb == null) {
			return "invalid data";
		}
		return "disease added sucessfully";
	}

	@Override
	public List<Disease> getAllDisease(Integer userId) {
		User user = uRepo.findById(userId).orElseThrow();
		if(user == null) {
			return null;
		}
		if(user.getDisease() == null) {
			return new ArrayList<>();
		}

		return user.getDisease();
	}

}
