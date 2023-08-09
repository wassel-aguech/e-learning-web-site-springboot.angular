package com.example.cours.back.controller;

import com.example.cours.back.model.Cours;
import com.example.cours.back.model.Lesson;
import com.example.cours.back.service.CoursService;
import com.example.cours.back.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lessons")

public class LessonController {

    @Autowired
    private LessonService lessonService;


    @Autowired
    private CoursService coursService;



    @GetMapping("/all")
    public List<Lesson> getall (){

        return lessonService.getAllLesson();
    }
    @GetMapping("/find/{id}")
    public Optional <Lesson> getLessonById(@PathVariable("id") Long id){
        return lessonService.getlessonById(id);
    }

    @PostMapping("/addlesson")
    public Lesson  addLesson (@RequestBody Lesson lesson){
        return lessonService.addLesson(lesson);

    }

    @PutMapping("/update")
    public Lesson updateLesson(@RequestBody Lesson lesson){
        return lessonService.updateLesson(lesson);
    }

    @DeleteMapping("/delete/{id}")
    public  void deleteLesson(@PathVariable("id") Long id){
        lessonService.deleteLesson(id);
    }



}
