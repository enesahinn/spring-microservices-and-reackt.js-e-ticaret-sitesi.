package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.model.Team;
import net.javaguides.springboot.service.TeamService;

@CrossOrigin
@RestController
public class TeamController {

	@Autowired
	private TeamService teamService;
	
	@GetMapping("/teams")
	public ResponseEntity<List<Team>> getAllTeam() {
		return ResponseEntity.ok().body(teamService.getAllTeam());
	}
	
	@PutMapping("/team/update/{teamId}")
	public ResponseEntity<Team> updateTeam(@PathVariable long teamId, @RequestBody Team team){
		team.setTeamId(teamId);
		return ResponseEntity.ok().body(this.teamService.updateTeam(team));
	}

	@DeleteMapping("/team/delete/{id}")
	public HttpStatus deleteTeam(@PathVariable long id){
		this.teamService.deleteTeam(id);
		return HttpStatus.OK;
	}
}
