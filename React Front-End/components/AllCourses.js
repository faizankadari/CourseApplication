import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../API/service";
import './allcourses.css';

import axios from "axios";
const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses"
    }, [])

    const [initail, updated] = useState([])

    const getallcourses = () => {

        axios.get(`${base_url}/courses`).then(
            (response) => {
                updated(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect(() => {

        getallcourses()
    })


    return (
        <div>
        <div className="allcourses">
            <h2>All Courses</h2>
            </div>
            <div>
            {
                initail.length > 0 ?
                    initail.map((item) => (<Course key={item.id} course={item} />
                    )) : "No Courses"

            }
            </div>
        </div>
    );
}

export default AllCourses;