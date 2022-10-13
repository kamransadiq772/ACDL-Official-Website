import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Routes, useNavigate, Route, Outlet } from 'react-router-dom';
import './css/Regcompany.css'
import JobUploadPage from "./JobUploadPage";
import EditComProfile from "./EditComProfile";
import EditJobPage from "./EditJobPage";
import DeleteJobPage from "./DeleteJobPage";
import { Link } from "react-router-dom";

const Jobupload = () => {

    const [jupladdata, setjupladdata] = useState({
        title: '',
        category: '',
        type: '',
        location: '',
        summary: '',
        skills: '',
        cname: ''
    });

    const navigate = useNavigate()
    const loggedin = sessionStorage.getItem('loggedin');

    const uploadjob = (e) => {
        e.preventDefault()

        axios.post('/uploadthejob', { jupladdata: jupladdata })
            .then((res) => {
                if (res.data.status == 200) {
                    alert("Uploaded Sucessfully")
                    document.getElementById('apform').reset()
                } else {
                    alert("failed")
                }
            }, (err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (!(sessionStorage.getItem('datain'))) {
            navigate('/regcompany')
        }
    })

    return (
        <div className="">
            <div className="abouth servicesjpg" >
                <h1>JOB's</h1>
            </div>
            <div className="jbuploadouter">
                <div className="cprfilenav">
                    <ul className="cprofileul">
                        <li><Link to="/jobupload" className="regnlink">Upload Job</Link></li>
                        {/* <li><Link to="editjobpage" className="regnlink">Edit Jobs</Link></li> */}
                        <li><Link to="editcompanyprofile" className="regnlink">Edit Profile</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
export default Jobupload;