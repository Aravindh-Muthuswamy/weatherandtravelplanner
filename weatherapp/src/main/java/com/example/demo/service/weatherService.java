package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.weather;


public interface weatherService {
	public weather saveWeather(weather weath);
	public List<weather> getAllWeather();
	public weather getWeatherByID(Integer id);
	public void deleteByID(Integer id);
	public List<weather> getWeatherByCity(String cityname);
}
