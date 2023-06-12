package com.Kratin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Kratin.entity.Disease;
import com.Kratin.entity.User;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {

	
	public List<Disease> findByUser(User user);
}
