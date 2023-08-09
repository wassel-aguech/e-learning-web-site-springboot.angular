package com.example.cours.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.cours.back.model.Lesson;



@Repository
public interface LessonRepo  extends JpaRepository<Lesson , Long> {
}
