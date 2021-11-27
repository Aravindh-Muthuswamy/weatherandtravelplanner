package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.cities;
import com.example.demo.repository.citiesRepository;

@Service
public class cityServiceimpl implements cityService {
	@Autowired
	private citiesRepository citiesrepo;

	@Override
	public cities saveCity(cities city) {
		// TODO Auto-generated method stub
		return citiesrepo.save(city);
	}

	@Override
	public List<cities> getAllCities() {
		// TODO Auto-generated method stub
		return citiesrepo.findAll();
	}

	@Override
	public cities getCityByID(Integer id) {
		// TODO Auto-generated method stub
		return citiesrepo.findById(id).get();
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		citiesrepo.deleteById(id);
	}

	@Override
	public cities getCityByName(String cityname) {
		// TODO Auto-generated method stub
		return citiesrepo.findBycityname(cityname);
	}

	@Override
	public List<cities> getCityByItenID(int itenid) {
		// TODO Auto-generated method stub
		return citiesrepo.findByitenid(itenid);
	}
	
	
	
	
}
