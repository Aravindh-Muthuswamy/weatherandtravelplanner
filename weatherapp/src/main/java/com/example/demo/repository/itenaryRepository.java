package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.itenary;

public interface itenaryRepository extends JpaRepository<itenary, Integer> {
	itenary findByitenaryname(String iternaryname);
}
