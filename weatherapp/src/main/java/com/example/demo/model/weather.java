package com.example.demo.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

//"temp": -1.08,
//"feels_like": -1.08,
//"temp_min": -1.08,
//"temp_max": -1.08,
//"pressure": 1022,
//"sea_level": 1022,
//"grnd_level": 998,
//"humidity": 66,
//"temp_kf": 0
//},
//"weather": [
//{
//    "id": 800,
//    "main": "Clear",
//    "description": "clear sky",
//    "icon": "01n"
//}
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
