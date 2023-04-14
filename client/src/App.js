import React from 'react';
import './App.scss';
import {Projects} from './views/Projects/Projects';
import {Link, BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from "./views/Home/Home";


function App() {

  return (
          <div>
              <BrowserRouter>
                  <nav style={{padding:20}} >
                      <div >
                          <Link to="/" >Home</Link>
                          <Link to="/projects" >Projects</Link>
                      </div>
                  </nav>
                  <div className="container mt-5">
                      <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/projects" element={<Projects />} />
                          {/*<Route path="/create" element={} />*/}
                      </Routes>
                  </div>
              </BrowserRouter>
          </div>

  );
}

export default App;

