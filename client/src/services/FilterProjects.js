import {Nav} from "react-bootstrap";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    loadAllLocations, loadAllNeeds,
    loadAllODSs, loadProjectsByFilterArray, loadProjectsByLocation,
    selectAllLocations, selectAllNeeds,
    selectAllODS
} from "../features/projects/projectSlice";
import {useEffect} from "react";

export default function FilterProjects(filterType){

    const dispatch = useDispatch();
    const allODS = useSelector(selectAllODS);
    const allLocations = useSelector(selectAllLocations);
    const allNeeds = useSelector(selectAllNeeds);
    let allCategories = '';
    let displayAllCategories = [];

    if(filterType.type.ods === true){allCategories = allODS}
    if(filterType.type.location === true){allCategories = allLocations}
    if(filterType.type.needs === true){allCategories = allNeeds}

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
        allCategories.forEach((o,index) => {
            // console.log(index);
            displayAllCategories.push(
                <Nav.Item key={index}>
                    <Nav.Link name={o} id={o} eventKey="link-0" onClick={handleClickODSFilter}>{o}</Nav.Link>
                </Nav.Item>
            )
        })
    }else if(filterType.type !== true){
        return ;
        // <Nav.Item><p>No projects available for this filter</p></Nav.Item>;
    }
    return (
        <Nav className="justify-content-center" activeKey="/home">
            {
                displayAllCategories
            }
        </Nav>
    )
}