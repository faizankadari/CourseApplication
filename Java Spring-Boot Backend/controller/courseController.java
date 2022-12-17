package com.faizan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.faizan.entities.Course;
import com.faizan.services.CourseService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class courseController {
	@Autowired
	private CourseService s;

	// Get the courese
	@GetMapping("/courses")
	public List<Course> getCourses() {
		return s.getCourses();
	}

	@GetMapping("/courses/{courseId}")
	public Course getCourseByid(@PathVariable String courseId) {
		return s.getCourseByid(Long.parseLong(courseId));

	}

	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return s.addCourse(course);

	}

	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return s.addCourse(course);

	}

	@DeleteMapping("/courses/{courseId}")
		public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
			try {
				s.deleteCourse(Long.parseLong(courseId));
				return new ResponseEntity<>(HttpStatus.OK);
			}
			catch(Exception e)
			{
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
}
