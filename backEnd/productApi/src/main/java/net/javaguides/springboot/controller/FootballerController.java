package net.javaguides.springboot.controller;

import java.util.List;

import net.javaguides.springboot.model.Footballer;
import net.javaguides.springboot.service.FootballerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.model.Team;
import net.javaguides.springboot.service.TeamService;

@CrossOrigin
@RestController
public class FootballerController {

    @Autowired
    private FootballerService footballerService;

	@GetMapping(value = "/footballers/{teamId}")
	public List<Footballer> getById(@PathVariable long teamId){
		return footballerService.getById(teamId);
	}

	@DeleteMapping("/footballers/delete/{teamId}")
    public HttpStatus deleteFootballers(@PathVariable long teamId){
        this.footballerService.deleteFootballers(teamId);
        return HttpStatus.OK;
    }

    @PostMapping("/footballers/add/{teamId}")
    public ResponseEntity<Footballer> createFootballer(@PathVariable long teamId, @RequestBody Footballer footballer){
        return ResponseEntity.ok().body(this.footballerService.createFootballer(footballer, teamId));
    }

}
