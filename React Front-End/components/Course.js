import axios from "axios";
import React from "react";
import { Card, Container, CardBody, Button, CardText, CardSubtitle } from "reactstrap";
import base_url from "../API/service";
const Course = ({ course }) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                console.log("Deleted")

            },
            (error) => {
                console.log("Error")
            }
        )
    }
    const updateCourse = (data) => {
        axios.put(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response.data)
                console.log("response")
            },
            (error) => {
                console.log(error)
                console.log("error")
            }
        )
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold"> {course.title}</CardSubtitle>
                <CardText >{course.discription}</CardText>
            </CardBody>
            <Container className="text-center">
                <Button color="warning" onClick={() => updateCourse(course.id)}>Update </Button>



                <Button color="danger my-2 ml-2" onClick={
                    () => {
                        deleteCourse(course.id)
                    }
                }>Delete</Button>
            </Container>
        </Card>
    )
}
export default Course