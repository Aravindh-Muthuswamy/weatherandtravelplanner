package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name="itenCities")
public class cities {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int itenid;
	private String cityname;
	private Date traveldate;
	private double temp;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getItenid() {
		return itenid;
	}
	public void setItenid(int itenid) {
		this.itenid = itenid;
	}
	public String getCityname() {
		return cityname;
	}
	public void setCityname(String cityname) {
		this.cityname = cityname;
	}
	public Date getTraveldate() {
		return traveldate;
	}
	public void setTraveldate(Date traveldate) {
		this.traveldate = traveldate;
	}
}
