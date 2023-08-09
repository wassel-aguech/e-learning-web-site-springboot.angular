package com.example.cours.back.repository;

import com.example.cours.back.model.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CoursRepo extends JpaRepository <Cours , Long> {

    Optional<Cours> findById( Long id);

}
