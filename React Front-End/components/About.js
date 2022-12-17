import React, { useEffect } from "react";
import './About.css';

const About = () => {
    useEffect(() => {
        document.title = "About "
    }, [])
    return ( 
        <div className="About">
            <h4>
                Welcome to our platform.
            </h4>
            <p>
                Our platform is the best in industry to upgrade your skills
            </p>
            <p>
                We have all types of tech courses and many are about to get added.
            </p>
            <p>
                Get the skill you want. 
            </p>
            <p>
                Check for regular updates.
            </p>
            <h4>
                Thank you for taking our platform to upgrade your skills!
            </h4>
        </div>
     );
}
 
export default About;