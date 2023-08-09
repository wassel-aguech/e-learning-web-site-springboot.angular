package com.example.cours.back.repository;

import com.example.cours.back.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlogRepo extends JpaRepository<Blog , Long> {

    Optional<Blog> findBlogById(Long aLong);
}
