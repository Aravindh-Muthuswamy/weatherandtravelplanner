package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.itenary;
import com.example.demo.repository.itenaryRepository;

@Service
public class itenaryServiceImpl implements itenaryService{
	@Autowired
	private itenaryRepository itenaryrepo;
	
	@Override
	public itenary saveItenary(itenary iten) {
		// TODO Auto-generated method stub
		return itenaryrepo.save(iten);
	}

	@Override
	public List<itenary> getAllItenary() {
		// TODO Auto-generated method stub
		return itenaryrepo.findAll();
	}

	@Override
	public itenary getItenaryByID(Integer id) {
		// TODO Auto-generated method stub
		return itenaryrepo.findById(id).get();
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		itenaryrepo.deleteById(id);
	}

	@Override
	public itenary getItenaryByName( String itenaryname) {
		// TODO Auto-generated method stub
		return itenaryrepo.findByitenaryname(itenaryname);
	}
	
	
}
