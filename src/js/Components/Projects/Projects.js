import React, {useEffect, useState} from "react";
import "./_projects.scss";

import img from "../../assets/project.png";
import Project from "./Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const getProjects = () => {
        console.log("Getting projects");
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((result) => setProjects(result))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getProjects();
    }, []);
    const project = {
        title: "Project title",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack: HTML , JavaScript, SASS, React",
        link: { href: "#", title: "Live Preview",},
        code: { href: "#", title: "View code", },
        img: img,
    };

    return (
        <div className="projects row">
            {projects.map((project, i) => (
                <div className="col-3" key={i}>
                    <Project  project={project}/>
                </div>
            ))}
        </div>
    )
}

export default Projects;