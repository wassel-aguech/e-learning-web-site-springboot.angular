package com.example.cours.back.controller;

import com.example.cours.back.model.Blog;
import com.example.cours.back.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")

public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/all")
    public List<Blog> getallblogs(){
        return blogService.getAllBlogs();
    }

    @GetMapping("/find/{id}")
    public Blog getBlogById (@PathVariable("id") Long id){
        return blogService.getBologById(id);
    }

    @PostMapping("/add")
    public Blog addBlog(@RequestBody Blog blog){
        return blogService.addBlog(blog);
    }

    @PutMapping("/update/{id}")
    public Blog updateBlog(@PathVariable("id") long id, @RequestBody Blog blog){
        return blogService.updateBlog(id,blog);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBlog(@PathVariable("id") Long id){
        blogService.deleteBlogById(id);
    }


}
