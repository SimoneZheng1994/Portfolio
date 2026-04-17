package com.Simone.java_project.repository;

import com.Simone.java_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> { // JpaRepository provides you with ready-to-use database methods without implementation code
}
