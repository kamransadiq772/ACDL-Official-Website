import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Drug.css'
import ReactDOM from 'react-dom';
import { FaAngleRight } from "react-icons/fa";
import './css/teams.css'



const Consulting = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    function serarrowclick() {
        if (document.getElementById("serdropdown").style.display == "none") {
            document.getElementById("serdropdown").style.display = "block"
        } else {
            document.getElementById("serdropdown").style.display = "none"
        }
    }
    function aboutarrowclick() {
        if (document.getElementById("aboutdropdown").style.display == "none") {
            document.getElementById("aboutdropdown").style.display = "block"
        } else {
            document.getElementById("aboutdropdown").style.display = "none"
        }
    }




    return (
        <div className="" >
            <div className="abouth consultingsolutions teamsheadingfirst" >
                <h1>Consulting Solutions</h1>
            </div >
            <div className="drugcontent minheightofteams" >
                <div className="divleft">
                    <div className="divleftin">
                        <ul className="innerul" >
                            <li>
                                <a href="#" >
                                    <span className="engin">HOME</span>
                                    <span className="arrowin" ></span>
                                </a>
                            </li>
                            <li>
                                <div className="inliningarrows">
                                    <a href="#" >
                                        <span className="engin">ABOUT US</span>
                                    </a>
                                    <span className="arrowin" id="aboutarrow" onClick={aboutarrowclick}><FaAngleRight color="black" /></span>
                                </div>
                                <ul className="subul" id="aboutdropdown" >
                                    <li>
                                        <a>
                                            OUR MISSION
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            OUR VISSION
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            OUR VALUES
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            OUR HISTORY
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="inliningarrows">
                                    <a href="#" >
                                        <span className="engin">OUR SERVICES</span>
                                    </a>
                                    <span className="arrowin" id="serarrow" onClick={serarrowclick}><FaAngleRight color="black" /></span>
                                </div>
                                <ul className="subul" id="serdropdown" >
                                    <li>
                                        <a>
                                            REGULATORY AFFAIRS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="active">
                                            DRUG SAFETY / PV
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            CLINICAL DEVELOPMENT
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            SOURCING & RECRUITMENT
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            IT
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" >
                                    <span className="engin">CONTACT US</span>
                                    <span className="arrowin" ></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" >
                                    <span className="engin">JOBS</span>
                                    <span className="arrowin" ></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="divright">
                    <div className="subrighthead">
                        <h3>We specialize in provision of following consulting services:</h3>
                    </div>
                    <ul className="teamsrightin" >
                        <li>Regulatory Affairs</li>
                        <li>Drug Safety / Pharmacovigilance</li>
                        <li>Quality Assurance</li>
                        <li>Clinical Operations & Biometrics</li>
                        <li>Alpha FSP Solution</li>
                    </ul>
                </div>
            </div>
            <div className="rightbtnout">
                <div className="rightbtnin">
                    <a href="#" >CONTACT US</a>
                </div>
            </div>

        </div>

    )
}
export default Consulting;