package com.example.cours.back.service;

import com.example.cours.back.AuthRequestResponse.AuthenticationRequest;
import com.example.cours.back.AuthRequestResponse.AuthenticationResponse;
import com.example.cours.back.AuthRequestResponse.RegistrationRequest;
import com.example.cours.back.configsecurity.JwtUtils;
import com.example.cours.back.model.Token;
import com.example.cours.back.model.TokenType;
import com.example.cours.back.model.User;
import com.example.cours.back.model.UserRole;
import com.example.cours.back.repository.UserRepo;
import com.example.cours.back.repository.tokenRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements  UserServices{
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    tokenRepo tokenRepository;

    @Override
    public AuthenticationResponse register(RegistrationRequest request) {

        var user = User.builder()
                .fullname(request.getFullname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .confirmpassword(request.getConfirmpassword())
                .numtel(request.getNumtel())
                .role(UserRole.USER)
                .country(request.getCountry())
                .build();
        var savedUser = userRepo.save(user);
        String token = jwtUtils.generateToken(savedUser);
        saveUserToken(savedUser, token);
// generate a JWT token
        return AuthenticationResponse.builder()
                .accessToken(token)
                .build();
    }
    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword())
        );
        var user =  userRepo.findByEmail(request.getEmail()).orElseThrow();
        // generate a JWT token
        var token = jwtUtils.generateToken((UserDetails) user);
        return AuthenticationResponse.builder()
                .accessToken(token)
                .build();
    }

    @Override

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtUtils.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.userRepo.findByEmail(userEmail)
                    .orElseThrow();
            if (jwtUtils.isTokenValid(refreshToken, (UserDetails) user)) {
                var accessToken = jwtUtils.generateToken((UserDetails) user);
                revokeAllUserTokens((User) user);
                saveUserToken((User) user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
}
