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
	private Timestamp datetimeincity;
	private double temp;
	private double feels;
	private double min;
	private double max;
	private double humidity;
	private String condition;
	private String description;
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
	public Timestamp getDatetimeincity() {
		return datetimeincity;
	}
	public void setDatetimeincity(Timestamp datetimeincity) {
		this.datetimeincity = datetimeincity;
	}
	public double getTemp() {
		return temp;
	}
	public void setTemp(double temp) {
		this.temp = temp;
	}
	public double getFeels() {
		return feels;
	}
	public void setFeels(double feels) {
		this.feels = feels;
	}
	public double getMin() {
		return min;
	}
	public void setMin(double min) {
		this.min = min;
	}
	public double getMax() {
		return max;
	}
	public void setMax(double max) {
		this.max = max;
	}
	public double getHumidity() {
		return humidity;
	}
	public void setHumidity(double humidity) {
		this.humidity = humidity;
	}
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
