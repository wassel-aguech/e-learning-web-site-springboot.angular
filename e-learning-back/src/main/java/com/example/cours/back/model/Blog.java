package com.example.cours.back.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Blog {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String title;
    @Column
    private String imageUrl;
    @Lob
    @Column
    private String content;
    @Column
    private Integer likes;

    @ManyToMany
    private List<User> users;

}
