package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Table(name="weatherdata")
public class weather {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String cityname;
	@Column(columnDefinition="TEXT")
	private String dxjson;
	public String getDxjson() {
		return dxjson;
	}
	public void setDxjson(String dxjson) {
		this.dxjson = dxjson;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCityname() {
		return cityname;
	}
	public void setCityname(String cityname) {
		this.cityname = cityname;
	}
	
	
	
}
