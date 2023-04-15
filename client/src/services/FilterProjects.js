import {Nav} from "react-bootstrap";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    loadAllLocations, loadAllNeeds,
    loadAllODSs, loadProjectsByFilterArray, loadProjectsByLocation,
    selectAllLocations, selectAllNeeds,
    selectAllODS
} from "../features/projects/projectSlice";
import {useEffect, useState} from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {Link} from "react-router-dom";

export default function FilterProjects(filterType,clean){

    const dispatch = useDispatch();
    const allODS = useSelector(selectAllODS);
    const allLocations = useSelector(selectAllLocations);
    const allNeeds = useSelector(selectAllNeeds);
    const [filterPresent, setFilterPresent] = useState(false);
    let allCategories = {};
    let displayAllCategories = [];

    if(filterType.type.ods === true){allCategories = allODS}
    if(filterType.type.location === true){allCategories = allLocations}
    if(filterType.type.needs === true){allCategories = allNeeds}

    console.log("dentro de filter",filterType.type);
    useEffect(()=>{
        dispatch(loadAllODSs())
        dispatch(loadAllLocations())
        dispatch(loadAllNeeds())

    },[]);

    function handleClickODSFilter(e){
        console.log(e.target.name);
        if(filterType.type.location === true){
            dispatch(loadProjectsByLocation(e.target.name));
            console.log(e.target.name);
        }else{
            dispatch(loadProjectsByFilterArray(e.target.name,filterType.type));
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
        <Breadcrumbs aria-label="breadcrumb">
            {displayAllCategories}
        </Breadcrumbs>
    )
}