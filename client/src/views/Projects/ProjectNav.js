import * as React from "react";
import {Nav} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import FilterProjects from '../../services/FilterProjects.js'
import {useDispatch} from "react-redux";
import {loadAllProjects} from "../../features/projects/projectSlice";

export function ProjectNav(){
    const valueRef = useRef(false);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        ods: false,
        location: false,
        needs: false
    });
    let navFilter = false;

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
        <section className="project-nav">
            {/*<p>Filter projects by your preference</p>*/}
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link name="ods" id="byODS" eventKey="link-0" onClick={handleClickFilters}>by ODS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link name="location" eventKey="link-1" onClick={handleClickFilters}>by Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link name="needs" eventKey="link-2" onClick={handleClickFilters}>by Needs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color:'333333'}} name="clean" eventKey="link-4" onClick={cleanFilters}> / start again</Nav.Link>
                </Nav.Item>
            </Nav>
            <FilterProjects type={filter} valueRef={valueRef}/>

        </section>
    )
}