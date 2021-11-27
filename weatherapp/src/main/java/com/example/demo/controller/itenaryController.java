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

import com.example.demo.model.itenary;
import com.example.demo.service.itenaryService;

@RestController
@RequestMapping("/itenary")
@CrossOrigin
public class itenaryController {
	@Autowired
	private itenaryService itenaryser;
	
	
	@PostMapping("/add")
	public String add(@RequestBody itenary iten) {
		itenaryser.saveItenary(iten);
		return "New Itenary Added";
	}
	@GetMapping("/getall")
	public List<itenary> getAllItenary(){
		return itenaryser.getAllItenary();
	}
	@GetMapping("/{id}")
	public ResponseEntity<itenary> getItenByID(@PathVariable Integer id){
		try {
			itenary itenar = itenaryser.getItenaryByID(id);
			return new ResponseEntity<itenary>(itenar, HttpStatus.OK);
		}catch(NoSuchElementException e) {
			return new ResponseEntity<itenary>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity<itenary> update(@RequestBody itenary iten, @PathVariable Integer id){
		try {
			itenaryser.saveItenary(iten);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch (NoSuchElementException e) {
			return new ResponseEntity<itenary>(HttpStatus.NOT_FOUND); 
		}
	}
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
		itenaryser.delete(id);
		return "Deleted itenary with id " + id;
	}
	@GetMapping("/name")
	public ResponseEntity<itenary> getItenByName(@RequestParam String itenaryname){
		try {
			
			itenary itenar = itenaryser.getItenaryByName(itenaryname);
			return new ResponseEntity<itenary>(itenar, HttpStatus.OK);
		}catch(NoSuchElementException e) {
			return new ResponseEntity<itenary>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
}
