package com.example.cours.back.controller;


import com.example.cours.back.model.Cours;
import com.example.cours.back.model.Lesson;
import com.example.cours.back.service.CoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Set;

@EnableAutoConfiguration
@RestController

@RequestMapping("/cours")

public class CoursController {


    @Autowired
    private CoursService coursService;


    @GetMapping("/all")
    public List<Cours>  getallCours (){
        return coursService.getallcours();
    }

    @GetMapping("/find/{id}")
    public  Cours getCoursById(@PathVariable("id") Long id){
        return coursService.findCoursById(id);
    }

    @PostMapping("/add")
    public Cours  addCours (@RequestBody Cours cours){
        return coursService.addCours(cours);
    }

    @PutMapping("/update/{id}")
    public Cours updateCours(@PathVariable("id") Long id , @RequestBody Cours cours){
        return coursService.updatecours(id,cours);
    }

    @DeleteMapping("/delete/{id}")
    public  void deleteCours(@PathVariable("id") Long id){
        coursService.deleteCours(id);
    }


// affecter une lesson a un cours
    @PutMapping("/affectation/{lessonId}/{coursId}")
    @ResponseBody
    public void affectation ( @PathVariable Long coursId,
        @PathVariable Long lessonId){
        coursService.affectLessonToCours(lessonId,coursId);

    }

// methode pour afficher la liste de lesson accocier a un cour avec son id
    @GetMapping("/find/{courseId}/lessons")
    public List<Lesson> getLessonByCoursId (@PathVariable Long courseId) {
        Cours course = coursService.findCoursById(courseId);
        if (course != null) {
            return course.getLessons();
        }else {
            return Collections.emptyList();
        }
    }
}
