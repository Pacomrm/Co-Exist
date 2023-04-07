import React from 'react';
import Project from "./Project";

export default function ProjectsList({ projects }) {
    return (
        <>
            <h2>Projects</h2>
            <div className="projects-list-container">
                <ul className="project-list-ul">
                    {projects.map((p) => (
                        <Project project={p} key={p.id} />
                    ))}
                </ul>
            </div>
        </>
    );
}