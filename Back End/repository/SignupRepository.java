package com.charan.fullstack.repository;

import com.charan.fullstack.model.Signupmodel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SignupRepository extends JpaRepository<Signupmodel,Long> {
    Signupmodel findByname(String user);


}
