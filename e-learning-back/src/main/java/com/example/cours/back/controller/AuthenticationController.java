package com.example.cours.back.controller;
import com.example.cours.back.AuthRequestResponse.AuthenticationRequest;
import com.example.cours.back.AuthRequestResponse.AuthenticationResponse;
import com.example.cours.back.AuthRequestResponse.RegistrationRequest;
import com.example.cours.back.service.UserService;
import com.example.cours.back.service.UserServiceImpl;
import com.example.cours.back.service.UserServices;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/auth")

@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    UserServiceImpl userServices;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegistrationRequest request
    ) {
        return ResponseEntity.ok(userServices.register(request));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(userServices.authenticate(request));
    }
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        userServices.refreshToken(request, response);
    }

}


