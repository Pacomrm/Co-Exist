import * as React from "react";
import {Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import FilterByODS from '../../services/FilterByODS.js'

export function ProjectNav(){
    const [filter, setFilter] = useState({
        ods: false,
        location: false,
        needs: false
    });
    let odsNavFilter = '';

    if(filter.ods == true){
        console.log("filter");
        odsNavFilter = <FilterByODS/>;
    }

    function handleClickFilters(e){
        console.log(e.target.value);
        setFilter({
            ...filter,
            [e.target.name]: true
        })
    }
    function cleanFilters(){
        setFilter({
            ods: false,
            location: false,
            needs: false
        });
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
            {odsNavFilter}
        </section>
    )
}