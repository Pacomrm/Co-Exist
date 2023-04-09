import * as React from "react";
import {Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import FilterByODS from '../../services/FilterByODS.js'
import {useDispatch} from "react-redux";
import {loadAllProjects} from "../../features/projects/projectSlice";

export function ProjectNav(){
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
        ods: false,
        location: false,
        needs: false
    });
    let navFilter = '';



    function handleClickFilters(e){
        console.log(e.target.value);
        setFilter({
            ...filter,
            [e.target.name]: true
        })
        if(filter.ods == true){
            console.log("filter");
            navFilter = <FilterByODS/>;
        }
        // if(filter.location == true){
        //     console.log("filter");
        //     navFilter = <FilterByODS/>;
        // }

    }
    function cleanFilters(){
        setFilter({
            ods: false,
            location: false,
            needs: false
        });
        dispatch(loadAllProjects());
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
            {navFilter}
        </section>
    )
}