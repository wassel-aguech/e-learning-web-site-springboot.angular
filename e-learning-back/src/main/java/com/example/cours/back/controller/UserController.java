package com.example.cours.back.controller;


import com.example.cours.back.AuthRequestResponse.AuthenticationResponse;
import com.example.cours.back.AuthRequestResponse.RegistrationRequest;
import com.example.cours.back.model.Lesson;
import com.example.cours.back.model.User;
import com.example.cours.back.service.UserService;
import com.example.cours.back.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@EnableAutoConfiguration
@RestController
@RequestMapping("/users")

public class UserController {


    @Autowired
    private UserService userService;
    @Autowired
    private UserServices userServices;



    @GetMapping("/all")
    public List<User> getall (){

        return userService.getAllUser();
    }
    @GetMapping("/find/{id}")
    public Optional<User> getUserById(@PathVariable("id") Long id){
        return userService.getUserById(id);
    }

    @PostMapping("/adduser")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegistrationRequest request
    ) {
        return ResponseEntity.ok(userServices.register(request));
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public  void deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
    }

}
