import * as React from "react";
import './projects_styles.scss';
import {useEffect, useRef, useState} from "react";
import FilterProjects from '../../services/FilterProjects.js'
import {useDispatch} from "react-redux";
import {loadAllProjects} from "../../features/projects/projectSlice";
import {Link} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export function ProjectNav(){
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        ods: false,
        location: false,
        needs: false
    });

    function handleClickFilters(e){

        setFilter({
            ...filter,
            [e.target.name]: true
        })

    }
    function cleanFilters() {
        setFilter({
            ods: false,
            location: false,
            needs: false
        });
        dispatch(loadAllProjects());
    }
    const cleanFromChild = (val) => {
        console.log("llego",val);
        cleanFilters();
    }

    return (
        <div>
            <nav className={"main-nav-projects"}>
                <h6 style={{display: 'inline', marginRight:'auto'}}>Escoge como ver los proyectos</h6>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link name="ods" id="byODS" underline="hover" color="primary" onClick={handleClickFilters}>ODS </Link>
                    <Link name="location" id="location" underline="hover" color="inherit" onClick={handleClickFilters}>Localidad</Link>
                    <Link name="needs" id="needs" underline="hover" color="inherit" onClick={handleClickFilters}>Necesidades</Link>
                    <Link name="clean" id="clean" underline="hover" color="inherit" onClick={cleanFilters}>Empeza de nuevo</Link>
                </Breadcrumbs>
                <FilterProjects type={filter}/>
            </nav>
        </div>

    )
}