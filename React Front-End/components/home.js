import React, { useEffect } from "react";
import './Home.css';

const Home = () => {
    useEffect (()=>{
        document.title="Home for Courses"
    },[])

    return (
        <div className="trt">
        <div >
            <br/>
                <h3 >Full Stack Developer</h3>
                <p>Welcome to the demo application</p>
                <hr/>
                <p>Frontend is built using React JS</p>
                <p>Backend is built using Spring-Boot(Rest-API)</p>
              

        </div>
        </div>
    )
}
export default Home