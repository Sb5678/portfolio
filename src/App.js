import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Project from './Project';
import Experience from './Experience';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectDisplay from './ProjectDisplay';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project/>} />
         < Route path="/project/:id" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
