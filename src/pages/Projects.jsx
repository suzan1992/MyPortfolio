// Projects.jsx
import React from "react";

// Sample data for projects
const projects = [
    {
        title: "3D Portfolio Website",
        description: "A 3D animated portfolio website showcasing web development skills.",
        link: "https://example.com/project1",
    },
    {
        title: "E-commerce Web App",
        description: "A fully functional e-commerce platform for selling products online.",
        link: "https://example.com/project2",
    },
    {
        title: "Personal Blog",
        description: "A personal blog built with React and styled with CSS modules.",
        link: "https://example.com/project3",
    },
];

const Projects = () => {
    return (
        <div className="projects-container" style={{ padding: "20px" }}>
            <h2>My Projects</h2>
            <div className="projects-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{
                            width: "300px",
                            padding: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            textAlign: "center",
                        }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                marginTop: "10px",
                                padding: "8px 16px",
                                background: "#333",
                                color: "#fff",
                                textDecoration: "none",
                                borderRadius: "4px",
                            }}
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
