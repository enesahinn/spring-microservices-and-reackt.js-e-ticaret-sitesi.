package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

}
