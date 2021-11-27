package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.weather;
import com.example.demo.repository.weatherRepository;
@Service
public class weatherServiceImpl implements weatherService {

	@Autowired
	private weatherRepository weatherrepo;
	
	@Override
	public weather saveWeather(weather weath) {
		// TODO Auto-generated method stub
		return weatherrepo.save(weath);
	}

	@Override
	public List<weather> getAllWeather() {
		// TODO Auto-generated method stub
		return weatherrepo.findAll();
	}

	@Override
	public weather getWeatherByID(Integer id) {
		// TODO Auto-generated method stub
		return weatherrepo.findById(id).get();
	}

	@Override
	public void deleteByID(Integer id) {
		// TODO Auto-generated method stub
		weatherrepo.deleteById(id);
	}

	@Override
	public List<weather> getWeatherByCity(String cityname) {
		// TODO Auto-generated method stub
		return weatherrepo.findBycityname(cityname);
	}
	
}
