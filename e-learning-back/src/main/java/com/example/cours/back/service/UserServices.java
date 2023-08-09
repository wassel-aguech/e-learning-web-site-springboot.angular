package com.example.cours.back.service;

import com.example.cours.back.AuthRequestResponse.AuthenticationRequest;
import com.example.cours.back.AuthRequestResponse.AuthenticationResponse;
import com.example.cours.back.AuthRequestResponse.RegistrationRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface UserServices {
    AuthenticationResponse register(RegistrationRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
}
