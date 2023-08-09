package com.example.cours.back.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Data
@AllArgsConstructor@NoArgsConstructor
@Getter@Setter
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private long id;

    private String title;
    private String imageUrl;
    private String description;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "cours")
    private List<Lesson> lessons ;

    public List<Lesson> getLessons(){
    return this.lessons;
}


@ManyToMany
    private List<User> users;

}
