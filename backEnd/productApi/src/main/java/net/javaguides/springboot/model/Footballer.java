package net.javaguides.springboot.model;

import lombok.Data;
import lombok.Value;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "footballers")
public class Footballer {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "footballerId", unique = true, nullable = false)
    private long footballerId;

    @NotNull
    @Column(name = "footballerName")
    private String footballerName;

    @NotNull
    @Column(name = "footballerSurname")
    private String footballerSurname;

    @NotNull
    @Column(name = "position")
    private String position;

    @NotNull
    @Column(name = "nationality")
    private String nationality;

    @NotNull
    @Column(name = "jerseyNumber")
    private int jerseyNumber;

    @NotNull
    @Column(name = "teamId")
    private long teamId;
}
