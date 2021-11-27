package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.*;
@Entity
public class itenary {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String itenaryname;
	public itenary() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItenaryname() {
		return itenaryname;
	}
	public void setItenaryname(String itenaryname) {
		this.itenaryname = itenaryname;
	}
}
