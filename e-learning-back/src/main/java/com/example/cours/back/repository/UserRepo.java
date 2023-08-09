package com.example.cours.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.cours.back.model.User;

import java.util.Optional;
@Repository
public interface UserRepo extends JpaRepository <User, Long> {

    Optional<User> findById(Long id);


    Optional<User> findByEmail(String email);

}
