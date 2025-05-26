import React, { useEffect, useState } from "react";
import "./_projects.scss";

// 1. Import all your local images
import spaceNeoImg from "../../assets/space_neo.png";
import weatherAppImg from "../../assets/weather_app.png";
import bestShopAppImg from "../../assets/best_shop.png";
import carSharingAppImg from "../../assets/car_sharing.png";
import defaultImg from "../../assets/project.png"; // Fallback image

import Project from "./Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    // 2. Create mapping between project IDs and your images
    const getLocalImage = (projectId, projectTitle) => {
        // Match by ID first
        switch(projectId) {
            case 0: return spaceNeoImg;    // Use space_neo for project 0
            case 1: return weatherAppImg;
            case 2: return bestShopAppImg;
            case 3: return carSharingAppImg// Use weather_app for project 3
            default: return defaultImg;    // Fallback
        }
    };


    const getProjects = () => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((apiProjects) => {
                // 3. Replace API images with your local ones
                const projectsWithLocalImages = apiProjects.map(project => ({
                    ...project, // Keep all API data
                    img: getLocalImage(project.id, project.title) // Replace image
                }));
                setProjects(projectsWithLocalImages);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="projects row">
            {projects.map((project) => (
                <div className="col-3" key={project.id}>
                    <Project project={project} />
                </div>
            ))}
        </div>
    );
};

export default Projects;