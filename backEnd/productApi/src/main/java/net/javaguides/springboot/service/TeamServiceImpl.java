package net.javaguides.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Team;
import net.javaguides.springboot.repository.TeamRepository;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {

	
	@Autowired
	private TeamRepository teamRepository;

	@Override
	public Team updateTeam(Team team) {
		Optional<Team> productDb = this.teamRepository.findById(team.getTeamId());
		
		if(productDb.isPresent()) {
			Team teamUpdate = productDb.get();
			teamUpdate.setTeamId(team.getTeamId());
			teamUpdate.setTeamName(team.getTeamName());
			teamUpdate.setCity(team.getCity());
			teamUpdate.setColor(team.getColor());
			teamUpdate.setFounded(team.getFounded());
			teamUpdate.setLogoUrl(team.getLogoUrl());
			teamUpdate.setLeague(team.getLeague());
			teamRepository.save(teamUpdate);
			return teamUpdate;
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + team.getTeamId());
		}
	}

	@Override
	public List<Team> getAllTeam() {
		return this.teamRepository.findAll();
	}

	@Override
	public void deleteTeam(long teamId) {
		Optional<Team> teamDb = this.teamRepository.findById(teamId);
		
		if(teamDb.isPresent()) {
			this.teamRepository.delete(teamDb.get());
		}else {
			throw new ResourceNotFoundException("Record not found with id : " + teamId);
		}
		
	}

}
