package com.faizan.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faizan.entities.Course;

public interface CourseDao extends JpaRepository<Course,Long>{

}
