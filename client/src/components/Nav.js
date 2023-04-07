import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Projects} from "../views/Projects/Projects";

function handleClick(e) {
    e.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <BrowserRouter>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        // href="/"
                        to="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        MUI
                    </Link>
                    <Link
                        to="/projects"
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        // href="/material-ui/getting-started/installation/"
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Core
                    </Link>
                    <Routes>
                        <Route path="/" element={<Projects />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </BrowserRouter>
            </Breadcrumbs>
        </div>
    );
}



export function Nav(){
    return (

            <IconBreadcrumbs/>


    )
}