import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import './Menu.css';

const Menu = () => {
    return ( 
        <ListGroup className="list">
            <Link className="list-group-item" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item" tag="a" to="addCourse" action>Add Courses</Link>
            <Link className="list-group-item" tag="a" to="/viewCourses" action>All Courses</Link>
            <Link className="list-group-item" tag="a" to="About" action>About</Link>
        </ListGroup>
     );
}
 
export default Menu;