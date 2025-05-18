import React from "react";
import "./_projects.scss";

import img from "../../assets/project.png";
import Project from "./Project/Project";

const Projects = () => {

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
            <div className="col-3">
                <Project project={project}/>
            </div>
            <div className="col-3">
                <Project project={project}/>
            </div>
            <div className="col-3">
                <Project project={project}/>
            </div>
            <div className="col-3">
                <Project project={project}/>
            </div>
            <div className="col-3">
                <Project project={project}/>
            </div>
            <div className="col-3">
                <Project project={project}/>
            </div>
        </div>
    )
}

export default Projects;