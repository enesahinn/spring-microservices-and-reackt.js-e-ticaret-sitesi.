package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.model.Footballer;
import net.javaguides.springboot.model.Team;

public interface FootballerService {

    Footballer createFootballer(Footballer footballer, long teamId);

	List<Footballer> getById(long teamId);

    void deleteFootballers(long teamId);
}
