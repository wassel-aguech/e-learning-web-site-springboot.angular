package com.example.cours.back.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    private String title;
    private String description;
    private String urlLesson;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "cours_id")
    private Cours cours;



    public Cours getCours() {
        return cours;
    }
   // public void setCours(Cours cours) {
     //   this.cours = cours;
    //}


}
