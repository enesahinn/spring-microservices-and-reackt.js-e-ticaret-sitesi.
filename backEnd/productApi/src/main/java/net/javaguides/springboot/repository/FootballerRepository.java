package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Footballer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FootballerRepository extends JpaRepository<Footballer, Long> {
}
