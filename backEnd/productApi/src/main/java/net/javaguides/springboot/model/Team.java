package net.javaguides.springboot.model;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "teams")
public class Team {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "teamId", unique = true, nullable = false)
	private long teamId;

	@NotNull
	@Column(name = "teamName")
	private String teamName;

	@NotNull
	@Column(name = "league")
	private String league;

	@NotNull
	@Column(name = "logoUrl")
	private String logoUrl;

	@NotNull
	@Column(name = "city")
	private String city;

	@NotNull
	@Column(name = "founded")
	private String founded;

	@NotNull
	@Column(name = "color")
	private String color;

}
