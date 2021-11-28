package com.example.demo.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.weather;
import com.example.demo.service.weatherService;

@RestController
@RequestMapping("/weather")
@CrossOrigin
public class weatherController {
	@Autowired
	private weatherService weatherser;
	
	@PostMapping("/add")
	public String add(@RequestBody weather weath) {
		weatherser.saveWeather(weath);
		return "New Weather data added";
	}
	
	@GetMapping("/getall")
	public List<weather> getAllWeather(){
		return weatherser.getAllWeather();
	}
	
	@PutMapping("/putdata")
	public void updatebyName(@RequestBody weather weath) {
		try {
			weatherser.saveWeather(weath);
			
		}catch(NoSuchElementException e) {
//			return null;
		}
	}
	@GetMapping("/getweather")
	public List<weather> getWeatherByCityName(@RequestParam String cityname){
		try {
			return weatherser.getWeatherByCity(cityname);
		}catch(NoSuchElementException e) {
			return null;
		}
	}
}
