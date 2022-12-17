import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Form, Input, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../API/service";
import { Link } from "react-router-dom";
const AddCourses = () => {
    useEffect(() => {
        document.title = "Add Courses"
    })

    const [course, setCourse] = useState({})
    // form handle function
    const handleform = (e) => {
        console.log(course)
        addCourse(course)
        e.preventDefault()


    }
    //function to post data to server

    const addCourse = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response)
                console.log("response")
            },
            (error) => {
                console.log(error)
                console.log("error")
            }
        )
    }

    return (
        <Fragment>
            <h1 className="text-center ml-2 my-2" >Fill Details</h1>
            <Form className="text-center" onSubmit={handleform}>
                <FormGroup >
                    <label for="Userid">Course Id</label>
                    <Input
                        type="text"
                        placeholder="Enter Here"
                        name="Userid"
                        id="Userid"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup >
                    <label for="title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter Title Here"
                        name="title"
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup >
                    <label for="description">Course Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter Description Here"

                        style={{ height: 110 }}
                        onChange={(e) => {
                            setCourse({ ...course, discription: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="warning" >Add Course </Button>
                    <Link className="btn btn-danger mx-2" to="/">Cancel </Link>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourses;