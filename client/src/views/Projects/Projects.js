import React, {useEffect} from 'react';
import {ProjectNav} from "./ProjectNav";
import {useDispatch, useSelector} from "react-redux";
import {loadAllProjects,selectAllProjects} from "../../features/projects/projectSlice";
import ProjectsList from "../../views/Projects/ProjectsList";
import './projects_styles.scss';

import {Container} from "react-bootstrap";
import {Grid} from "@mui/material";

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
        <div className="projects-container">
            <div className="grid-container">
                <Grid container>
                    <h2>Projects</h2>
                    <Grid item xs={12} ><ProjectNav/></Grid>
                    <Grid item xs={12} >{display}</Grid>
                </Grid>
            </div>
        </div>
    )
}