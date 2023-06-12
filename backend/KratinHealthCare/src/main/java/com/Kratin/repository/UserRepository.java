package com.Kratin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Kratin.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByEmailAndPassword(String email,String password);
}
