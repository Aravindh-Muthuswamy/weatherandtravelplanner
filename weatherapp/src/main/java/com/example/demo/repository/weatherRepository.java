package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.weather;

public interface weatherRepository extends JpaRepository<weather, Integer>{
	List<weather> findBycityname(String cityname);
}
