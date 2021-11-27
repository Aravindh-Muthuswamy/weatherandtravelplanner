package com.example.demo.service;

import java.util.List;

import com.example.demo.model.cities;

public interface cityService {
	public cities saveCity(cities city);
	public List<cities> getAllCities();
	public cities getCityByID(Integer id);
	public void delete(Integer id);
	public cities getCityByName(String cityname);
	public List<cities> getCityByItenID(int itenid);
}
