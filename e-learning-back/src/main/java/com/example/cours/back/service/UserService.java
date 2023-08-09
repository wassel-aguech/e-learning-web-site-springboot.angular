package com.example.cours.back.service;

import com.example.cours.back.AuthRequestResponse.AuthenticationRequest;
import com.example.cours.back.AuthRequestResponse.AuthenticationResponse;
import com.example.cours.back.AuthRequestResponse.RegistrationRequest;
import com.example.cours.back.configsecurity.JwtUtils;
import com.example.cours.back.model.Lesson;
import com.example.cours.back.model.User;
import com.example.cours.back.model.UserRole;
import com.example.cours.back.repository.UserRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUser(){
        return userRepo.findAll();
    }

    public Optional <User> getUserById(Long id){
        return userRepo.findById(id);
    }

    public User addUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setConfirmpassword(passwordEncoder.encode(user.getConfirmpassword()));   // encode the password
        user.setRole(UserRole.USER);
        return userRepo.save(user);
    }
    public User updateUser(User user){
        return userRepo.save(user);
    }



    public void deleteUser(Long id){
        if(userRepo.findById(id).isPresent()){
            userRepo.deleteById(id);

            System.out.println( " le user de id " +id + "  est suprime ");
        }  else {
            throw new EntityNotFoundException("Le user avec l'ID " + id + " n'existe pas.");
        }
    }}
