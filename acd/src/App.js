import logo from './logo.svg';
import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Card from './Components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Jobs from './Components/Jobs';
import Alphait from './Components/Alphait';
import Drug from './Components/Drug';
import { Link, NavLink } from "react-router-dom";
import Apply from './Components/Apply';
import Raffairs from './Components/Raffairs';
import Clinical from './Components/Clinical';
import Sourcing from './Components/Sourcing';
import Teams from './Components/Teams';
import Candidate from './Components/Candidate';
import Consulting from './Components/Consulting';
import Resourcing from './Components/Resourcing';
import axios from 'axios';
import Regcompany from './Components/Regcompaney';
import Jobupload from './Components/Jobupload';
import Cvupload from './Components/Cvupload';
import Registrationcompany from './Components/Registrationcompany';
import JobUploadPage from './Components/JobUploadPage';
import EditJobPage from './Components/EditJobPage';
import DeleteJobPage from './Components/DeleteJobPage';
import EditComProfile from './Components/EditComProfile';
import Editcvpage from './Components/Editcvpage';
import Uploadcvpage from './Components/Uploadcvpage';
import UserRegisteration from './Components/UserRegisteration';
import Registertheuser from './Components/Registertheuser';

const UserContext = createContext()

function App() {


  // useEffect(() => {
  //   getjobsdata();
  // },[])





  return (
    <div className='bodyflexing'>

      <BrowserRouter>
        <Nav />
        <Routes style={{position:'relative'}}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='it' element={<Alphait />} />
          <Route path='drug' element={<Drug />} />
          <Route path='apply' element={<Apply />} />
          <Route path='regulatoryaffairs' element={<Raffairs />} />
          <Route path='clinical' element={<Clinical />} />
          <Route path='sourcing' element={<Sourcing />} />
          <Route path='teams' element={<Teams />} />
          <Route path='candidate' element={<Candidate />} />
          <Route path='consulting' element={<Consulting />} />
          <Route path='resourcing' element={<Resourcing />} />
          <Route path='regcompany' element={<Regcompany />} />
          <Route path='jobupload' element={<Jobupload />}>
            <Route index element={<JobUploadPage />} />
            <Route path='editjobpage' element={<EditJobPage />} />
            <Route path='deletejobpage' element={<DeleteJobPage />} />
            <Route path='editcompanyprofile' element={<EditComProfile />} />
          </Route>
          <Route path='cvupload' element={<Cvupload />} >
            <Route index element={<Uploadcvpage />} />
            <Route path='editcvpage' element={<Editcvpage />} />
          </Route>
          <Route path='registrationcompany' element={<Registrationcompany />} />
          <Route path='userregisteration' element={<UserRegisteration />} />
          <Route path='registertheuser' element={<Registertheuser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
