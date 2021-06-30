package net.javaguides.springboot.service;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Footballer;
import net.javaguides.springboot.repository.FootballerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class FootballerServiceImpl implements FootballerService {

    @Autowired
    private FootballerRepository footballerRepository;

    @Override
    public Footballer createFootballer(Footballer footballer, long teamId) {

        int foreignCount = 0;
        int goalkeeperCount = 0;


        List<Footballer> wwe = new ArrayList<>();
        List<Footballer> footballersDb = this.footballerRepository.findAll();
        for (final Footballer room : footballersDb) {
            if (room.getTeamId() == teamId) {
                if (room.getNationality().equals("yabancı")) {
                    foreignCount++;
                }
                if (room.getPosition().equals("kaleci")) {
                    goalkeeperCount++;
                }
                wwe.add(room);
            }
        }

        if (wwe.size() >= 18) {
            throw new ResourceNotFoundException("maximum number of footballer  :  (team)  " + teamId);
        }
        else if(foreignCount >= 6 && footballer.getNationality().equals("yabancı")){
            throw new ResourceNotFoundException("maximum number of foreign footballer  : (team) " + teamId);
        }
        else if(goalkeeperCount >= 2 && footballer.getPosition().equals("kaleci")){
            throw new ResourceNotFoundException("maximum number of goalkeeper  : (team) " + teamId);
        }
        else {
            footballer.setTeamId(teamId);
            return footballerRepository.save(footballer);
        }

    }

    @Override
    public List<Footballer> getById(long teamId) {
        List<Footballer> ww = new ArrayList<>();
        List<Footballer> footballersDb = this.footballerRepository.findAll();
        for (final Footballer room : footballersDb) {
            if (room.getTeamId() == teamId) {
                ww.add(room);
            }
        }
        return ww;
    }

    @Override
    public void deleteFootballers(long teamId) {

        List<Footballer> footballersDb = this.footballerRepository.findAll();
        for (final Footballer room : footballersDb) {
            if (room.getTeamId() == teamId) {
                this.footballerRepository.delete(room);
            }
        }
    }

}
