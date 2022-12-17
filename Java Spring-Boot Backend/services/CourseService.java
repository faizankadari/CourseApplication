package com.faizan.services;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.faizan.entities.Course;

public interface CourseService {

	public List<Course> getCourses();
	public Course getCourseByid(long courseId);
	public Course addCourse(Course course);
	public Course updateCourse(Course course);
	public void deleteCourse(long parseLong);
}
