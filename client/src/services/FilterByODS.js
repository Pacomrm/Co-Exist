import {Nav} from "react-bootstrap";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAllODSs, loadProjectsByODS, selectAllODS} from "../features/projects/projectSlice";
import {useEffect} from "react";

export default function filterByODS(){

    const dispatch = useDispatch();
    const allODSs = useSelector(selectAllODS);
    let displayODS = [];

    useEffect(()=>{
        dispatch(loadAllODSs())
    },[]);

    function handleClickODSFilter(e){
        console.log("inside filter",e.target.name);
        dispatch(loadProjectsByODS(e.target.name));
    }
    if(allODSs.length > 1){
        allODSs.forEach((o,index) => {
            // console.log(index);
            displayODS.push(
                <Nav.Item key={index}>
                    <Nav.Link name={o} id={o} eventKey="link-0" onClick={handleClickODSFilter}>{o}</Nav.Link>
                </Nav.Item>
            )
        })
    }else{
        return <Nav.Item><p>No filters available</p></Nav.Item>;
    }
    return (
        <Nav className="justify-content-center" activeKey="/home">
            {
                displayODS
            }
        </Nav>
    )
}