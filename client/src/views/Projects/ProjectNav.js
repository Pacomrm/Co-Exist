import * as React from "react";
import './projects_styles.scss';
import {useEffect, useRef, useState} from "react";
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
import {Button} from "@mui/material";

export function ProjectNav(){
    const dispatch = useDispatch();
    const allODS = useSelector(selectAllODS);
    const allLocations = useSelector(selectAllLocations);
    const allNeeds = useSelector(selectAllNeeds);
    const [subFilter, setSubFilter] = useState([]);
    let displayAllCategories = [];
    const [filter, setFilter] = useState({
        ods: false,
        location: false,
        needs: false
    });

    useEffect(()=>{
        dispatch(loadAllODSs())
        dispatch(loadAllLocations())
        dispatch(loadAllNeeds())
    },[]);

    /* Handle main filters separately */
    function handleClickODS(e){
        setFilter({ods: true, location: false, needs: false});
        setSubFilter(allODS);
    }
    function handleClickLocation(e){
        setFilter({ods: false, location: true, needs: false});
        setSubFilter(allLocations);
    }
    function handleClickNeeds(e){
        setFilter({ods: false, location: false, needs: true});
        setSubFilter(allNeeds);
    }
    function cleanFilters() {
        setFilter({
            ods: false,
            location: false,
            needs: false
        });
        setSubFilter([]);
        dispatch(loadAllProjects());
    }

    // Project Nav Sub filters //

    function handleClickSubFilter(e){
        console.log(e.target.name);
        if(filter.location === true){
            dispatch(loadProjectsByLocation(e.target.name));
            console.log(e.target.name);
        }else{
            dispatch(loadProjectsByFilterArray(e.target.name,filter.type));
        }
    }

    if(subFilter.length > 0 ){
        subFilter.forEach((o,index) => {
            displayAllCategories.push(
                <Link key={index} name={o}
                      id={o}
                      underline="hover"
                      color="inherit"
                      onClick={handleClickSubFilter}
                >{o}</Link>
            )
        })
    }

    return (
        <div>
            <nav className="main-nav-projects">
                <h5 style={{display: 'inline', marginRight:'auto'}}>Escoge como ver los proyectos</h5>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link name="ods" id="byODS" underline="hover" color="primary" onClick={handleClickODS}>ODS</Link>
                    <Link name="location" id="location" underline="hover" color="inherit" onClick={handleClickLocation}>Localidad</Link>
                    <Link name="needs" id="needs" underline="hover" color="inherit" onClick={handleClickNeeds}>Necesidades</Link>
                    <Link name="clean" id="clean" underline="hover" color="inherit" onClick={cleanFilters}><Button color="error" variant="outlined">Empieza de nuevo</Button></Link>
                </Breadcrumbs>
            </nav>
            <nav className="subFilter-nav-projects">
                <Breadcrumbs aria-label="breadcrumb">
                    {displayAllCategories}
                </Breadcrumbs>
            </nav>
        </div>

    )
}