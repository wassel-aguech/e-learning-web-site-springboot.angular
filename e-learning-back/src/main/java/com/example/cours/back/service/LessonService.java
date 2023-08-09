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
public class LessonService {


    @Autowired
    private LessonRepo lessonRepo;
    @Autowired
    private CoursRepo coursRepo;

    public List<Lesson> getAllLesson(){
        return lessonRepo.findAll();
    }


    public Optional <Lesson> getlessonById(Long id){
        return lessonRepo.findById(id);
    }
    public Lesson addLesson(Lesson lesson){
        return lessonRepo.save(lesson);
    }

    public Lesson updateLesson(Lesson lesson){
        return lessonRepo.save(lesson);
    }

    public void deleteLesson(Long id){
        if(lessonRepo.findById(id).isPresent()){
            lessonRepo.deleteById(id);

    System.out.println( " la lesson de id " +id + "  est suprime ");
        }  else {
        throw new EntityNotFoundException("La lasson avec l'ID " + id + " n'existe pas.");
    }
    }





}
