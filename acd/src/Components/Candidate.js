import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Drug.css'
import ReactDOM from 'react-dom';
import { FaAngleRight } from "react-icons/fa";
import './css/teams.css'


const Candidate = () => {

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
            <div className="abouth candidateupperjpg teamsheadingfirst" >
                <h1>Candidate Solutions</h1>
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
                        <h3>Personalized and professional support for your career!</h3>
                    </div>
                    <p className="teamsrightin" >If you are a well trained professional or just starting your career, you have reached to the right place. We specialize in matching the right candidates with the right jobs. We are continuously looking for keen candidates to fill in strategic vacancies in our client’s organisations. Give us a quick call to find out how we can help you to get your dream job!</p>
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
export default Candidate;