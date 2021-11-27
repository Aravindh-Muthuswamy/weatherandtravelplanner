package com.example.demo.service;

import java.util.List;

import com.example.demo.model.itenary;

public interface itenaryService {
	public itenary saveItenary(itenary iten);
	public List<itenary> getAllItenary();
	public itenary getItenaryByID(Integer id);
	public void delete(Integer id);
	public itenary getItenaryByName(String itenaryname);
}
