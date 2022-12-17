package com.faizan.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faizan.Dao.CourseDao;
import com.faizan.entities.Course;
@Service
public class CourseServiceImpl implements CourseService{

	
	@Autowired
	private CourseDao crd;

	@Override
	public List<Course> getCourses() {
		return crd.findAll();
	}
	@Override
	public Course getCourseByid(long courseId) {
		return (Course) crd.findById(courseId).get();
	}
	@Override
	public Course addCourse(Course course) {
		crd.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course) {
		crd.save(course);
		return course;
	}
	public void deleteCourse(long parseLong ) {
		Course en=	crd.getOne(parseLong);
		crd.delete(en);
	}

}