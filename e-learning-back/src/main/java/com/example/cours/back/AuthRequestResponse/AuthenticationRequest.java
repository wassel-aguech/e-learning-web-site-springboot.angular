package com.example.cours.back.AuthRequestResponse;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder @Data
public class AuthenticationRequest {

    private String email;
    private String password;

}
