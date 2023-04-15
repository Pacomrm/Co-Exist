import * as React from "react";
import './projects_styles.scss';
import {useEffect, useRef, useState} from "react";
import FilterProjects from '../../services/FilterProjects.js'
import {useDispatch, useSelector} from "react-redux";
import {
    loadAllLocations, loadAllNeeds,
    loadAllODSs,
    loadAllProjects, loadProjectsByFilterArray, loadProjectsByLocation,
    selectAllLocations,
    selectAllNeeds,
    selectAllODS
} from "../../features/projects/projectSlice";
import {Link} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export function ProjectNav(){
    const dispatch = useDispatch();
    const allODS = useSelector(selectAllODS);
    const allLocations = useSelector(selectAllLocations);
    const allNeeds = useSelector(selectAllNeeds);
    let allCategories = {};
    let displayAllCategories = [];

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

    // Project Nav Basic filters //

    if(filter.ods === true){
        allCategories = allODS;
      
    }
    if(filter.location === true){
        allCategories = allLocations

    }
    if(filter.needs === true){
        allCategories = allNeeds

    }

    console.log("dentro de filter",filter);
    useEffect(()=>{
        dispatch(loadAllODSs())
        dispatch(loadAllLocations())
        dispatch(loadAllNeeds())

    },[]);

    function handleClickODSFilter(e){
        console.log(e.target.name);
        if(filter.location === true){
            dispatch(loadProjectsByLocation(e.target.name));
            console.log(e.target.name);
        }else{
            dispatch(loadProjectsByFilterArray(e.target.name,filter.type));
        }
    }

    if(allCategories.length > 0 ){
        // setFilterPresent(true);
        allCategories.forEach((o,index) => {
            displayAllCategories.push(
                <Link key={index} name={o}
                      id={o}
                      underline="hover"
                      color="inherit"
                      onClick={handleClickODSFilter}
                >{o}</Link>
            )
        })
        allCategories = '';
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
                <Breadcrumbs aria-label="breadcrumb">
                    {displayAllCategories}
                </Breadcrumbs>
                {/*<FilterProjects type={filter} clean={cleanFromChild}/>*/}
            </nav>
        </div>

    )
}