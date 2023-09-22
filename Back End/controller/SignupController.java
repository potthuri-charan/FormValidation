package com.charan.fullstack.controller;

import com.charan.fullstack.model.Signupmodel;
import com.charan.fullstack.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/signup")
public class SignupController {
    @Autowired
    SignupRepository signupRepository;

    @PostMapping("/Signup")
    public String savelog(@RequestBody Signupmodel s){
        String user=s.getName();
        Signupmodel s1=signupRepository.findByname(user);
        if(s1==null)
        {
            signupRepository.save(s);
            return "added";
        }
        else {
            return "Exist user";
        }
    }
}
