import React from 'react';
import './App.scss';
import {Projects} from './views/Projects/Projects';
import {Link, BrowserRouter, Route, Routes,} from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Home from "./views/Home/Home";


function App() {

    return (
        <BrowserRouter>
            <nav className="main-nav">
              <Breadcrumbs aria-label="breadcrumb" >
                  <Link underline="hover" color="inherit" to="/">Home </Link>
                  <Link underline="hover" color="inherit" to="/projects">Projects</Link>
              </Breadcrumbs>
            </nav>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/projects" element={<Projects />} />
                  </Routes>

          </BrowserRouter>
  );
}

export default App;

