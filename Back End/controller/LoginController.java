package com.charan.fullstack.controller;

import com.charan.fullstack.model.Signupmodel;
import com.charan.fullstack.repository.LoginRepostirory;
import com.charan.fullstack.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/login")
public class LoginController {
    @Autowired
    SignupRepository signupRepository;
    @Autowired
    LoginRepostirory repo;
    @PostMapping("/login/{name}/{password}")
    public String login(@PathVariable String name,@PathVariable String password){
        Signupmodel s=signupRepository.findByname(name);
        if(s==null){
            return "Username not found";
        }
        else{
            if(s.getPassword().equals(password)){
                return "Success";
            }
            else{
                return "Invalid password";
            }
        }
    }
    @GetMapping("/data/{name}")
    List<Signupmodel> getd(@PathVariable String name){
        List<Signupmodel> ll=repo.findByname(name);
        return ll;
    }
}
