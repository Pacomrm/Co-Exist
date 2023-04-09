import React, {useEffect} from 'react';
import {ProjectNav} from "./ProjectNav";
import {useDispatch, useSelector} from "react-redux";
import {loadAllProjects,selectAllProjects} from "../../features/projects/projectSlice";
import ProjectsList from "../../views/Projects/ProjectsList";

import {Container} from "react-bootstrap";

export function Projects(){

    const allProjects = useSelector(selectAllProjects);
    const dispatch = useDispatch();
    let display = {};

    useEffect(()=>{
        dispatch(loadAllProjects());
    },[])

    if(allProjects.length > 1){
        display =  <ProjectsList projects={allProjects}/>;
    }else{
        display = <p>No projects yet</p>;
    }

    return (
        <>
            <Container fluid="md">
                <ProjectNav/>
                <section className="projects-upper-container">
                    {display}
                </section>
            </Container>



            {/*<section className="projects-bottom-container">*/}
            {/*    <h2>Sign in to interact</h2>*/}
            {/*    <p>Form</p>*/}
            {/*    <div className="projects-signin-form">*/}

            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}


// Container for display projects component