import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './css/Regcompany.css'
import './css/Regcompany.css'
import { useNavigate } from "react-router-dom";


const Cvupload = () => {
    const navigate = useNavigate()

    const [cvuploaddata, setcvuploaddata] = useState({
        name: '',
        email: '',
        phone: '',
        letter: '',
        cv: null
    });


    const cvupload = (e) => {

        e.preventDefault()

        axios.post('/uploadthecv', { cvuploaddata: cvuploaddata })
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
        // console.log(sessionStorage.getItem('loggedin'))
        // if (!(sessionStorage.getItem('userdata'))) {
        //     // navigate('/userregisteration')
        //     // console.log(sessionStorage.getItem('datain'))
        // }
    }, [])



    return (
        <div className="">
            <div className="abouth servicesjpg" >
                <h1>Upload CV's</h1>
            </div>
            <div className="jbuploadouter">
                <div className="cprfilenav">
                    <ul className="cprofileul">
                        <li><Link to="/cvupload" className="regnlink">Upload CV</Link></li>
                        {/* <li><NavLink to="editcvpage" className="regnlink">Edit CV</NavLink></li> */}
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
export default Cvupload;