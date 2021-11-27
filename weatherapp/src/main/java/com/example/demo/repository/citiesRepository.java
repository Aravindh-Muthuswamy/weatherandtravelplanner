package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.cities;

public interface citiesRepository extends JpaRepository<cities, Integer> {
	cities findBycityname(String cityname);
	List<cities> findByitenid(int itenid);
}
