import React, {useEffect, useState} from 'react';
import {ProjectNav} from "./ProjectNav";
import {useDispatch, useSelector} from "react-redux";
import {loadAllProjects,selectAllProjects} from "../../features/projects/projectSlice";
import ProjectsList from "../../views/Projects/ProjectsList";
import './projects_styles.scss';
import {Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";

export function Projects(){
    const allProjects = useSelector(selectAllProjects);
    const dispatch = useDispatch();
    let display = {};
    const [newProjectForm, setNewProjectForm] = useState(false);


    useEffect(()=>{
        dispatch(loadAllProjects());
    },[])

    if(allProjects.length > 1){
        display =  <ProjectsList projects={allProjects}/>;
    }else{
        display = <p>No projects yet</p>;
    }
    function addNewProject(){
        setNewProjectForm(!newProjectForm);
        console.log("ddd",newProjectForm);
    }

    return (
        <div className="projects-container">
            <div className="grid-container">
                <Grid container>
                    <h2 className="project--title">Proyectos</h2>
                    {
                    newProjectForm
                        ?
                        <>
                            <Button className="project--button-success" color="error" variant="outlined" onClick={addNewProject}>Cancelar</Button>
                            <h2> FORM NEW PROJECT</h2>
                        </>
                        :
                        <>
                            <Button className="project--button-success" color="success" variant="outlined" onClick={addNewProject}>Agregar Proyecto</Button>
                            <Grid item xs={12} ><ProjectNav/></Grid>
                            <Grid item xs={12} >{display}</Grid>
                        </>
                    }

                </Grid>
            </div>
        </div>
    )
}