package com.example.cours.back.service;

import com.example.cours.back.model.Cours;
import com.example.cours.back.model.Lesson;
import com.example.cours.back.repository.CoursRepo;
import com.example.cours.back.repository.LessonRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoursService {

    @Autowired
    private CoursRepo coursRepo;
    @Autowired
    private LessonRepo lessonRepo;


    public List <Cours> getallcours (){
        return coursRepo.findAll();
    }
    public  Cours findCoursById(Long id){
        return coursRepo.findById(id).orElseThrow();
    }

    public Cours addCours (Cours cours){
        return coursRepo.save(cours);
    }

    public Cours updatecours ( Long id ,Cours cours){
        return coursRepo.save(cours);
    }

    public void  deleteCours(Long id){
        coursRepo.deleteById(id);
    }



    public void affectLessonToCours(Long lessonId, Long coursId) {

        Cours cours = coursRepo.findById(coursId).get();
        Lesson lesson = lessonRepo.findById(lessonId).get();
        lesson.setCours(cours);

        coursRepo.save(cours);

    }





}
