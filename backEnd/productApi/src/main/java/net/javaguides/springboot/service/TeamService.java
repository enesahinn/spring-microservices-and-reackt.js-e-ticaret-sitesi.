package net.javaguides.springboot.service;

import java.util.List;

import net.javaguides.springboot.model.Team;

public interface TeamService {

	Team updateTeam(Team team);

	List<Team> getAllTeam();

	void deleteTeam(long id);
}
