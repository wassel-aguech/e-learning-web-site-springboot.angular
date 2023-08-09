package com.example.cours.back.AuthRequestResponse;

import com.example.cours.back.model.User;
import jakarta.persistence.Entity;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistrationRequest {
    private String fullname;
    private String email;
    private  String password;
    private String confirmpassword;
    private Integer numtel;
    private String country;
    public static User toEntity(RegistrationRequest request) {
        return User.builder()
                .fullname(request.getFullname())
                .email(request.getEmail())
                .password(request.getPassword())
                .confirmpassword(request.getConfirmpassword())
                .numtel(request.getNumtel())
                .country(request.getCountry())
                .build();
    }
}

