package com.example.cours.back.service;

import com.example.cours.back.model.Blog;
import com.example.cours.back.repository.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    private BlogRepo blogRepo;
    public List<Blog> getAllBlogs (){
        return blogRepo.findAll();
    }
    public Blog getBologById(Long id){
        return blogRepo.findBlogById(id).orElseThrow();
    }
    public Blog addBlog(Blog blog){
        return blogRepo.save(blog);
    }

    public Blog updateBlog(Long id , Blog blog){
        return blogRepo.save(blog);
    }
    public void deleteBlogById(Long id){
        blogRepo.deleteById(id);
    }


}
