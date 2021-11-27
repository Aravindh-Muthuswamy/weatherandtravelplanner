package com.example.demo.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.cities;
import com.example.demo.service.cityService;

@RestController
@RequestMapping("/cities")
@CrossOrigin
public class citiesController {
	@Autowired
	private cityService cityser;
	
	@PostMapping("/add")
	public String add(@RequestBody cities city) {
		cityser.saveCity(city);
		return "New City Added";
	}
	@GetMapping("/getall")
	public List<cities> getAllCities(){
		return cityser.getAllCities();
	}
	@GetMapping("/{id}")
	public ResponseEntity<cities> getCityByID(@PathVariable Integer id){
		try {
			cities city = cityser.getCityByID(id);
			return new ResponseEntity<cities>(city,HttpStatus.OK);
		}catch(NoSuchElementException e) {
			return new ResponseEntity<cities>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity<cities> update(@RequestBody cities city, @PathVariable Integer id){
		try {
			cityser.saveCity(city);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(NoSuchElementException e) {
			return new ResponseEntity<cities>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
		cityser.delete(id);
		return "Deleted city with id " + id;
	}
	@GetMapping("/name")
	public ResponseEntity<cities> getcityByName(@RequestParam String cityname){
		try {
			
			cities city = cityser.getCityByName(cityname);
			return new ResponseEntity<cities>(city, HttpStatus.OK);
		}catch(NoSuchElementException e) {
			return new ResponseEntity<cities>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/itenid")
	public List<cities> getByItenID(@RequestParam int id){
		try {
			return cityser.getCityByItenID(id);
		}catch(NoSuchElementException e) {
			return null;
		}
	}
}
