import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Drug.css'
import ReactDOM from 'react-dom';
import { FaAngleRight } from "react-icons/fa";
import './css/teams.css'


const Resourcing = () => {

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
            <div className="abouth drugupperjpg teamsheadingfirst" >
                <h1>Resourcing Solutions</h1>
            </div >
            <div className="drugcontent minheightofteams " >
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
                   <p className="teamsrightin" >Looking to hire the best talent for your organization but not sure where to turn? Need help finding the highly skilled personnel for your next project? Let us help you! Any organization can move forward by acquiring efficient and smart human resource, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions.</p>
                   <p className="teamsrightin" >Alpha is committed to identify and provide qualified candidates that fit your objectives and company culture. At the very core of Alpha’s talent-acquisition and talent-placement business is a robust professional force of highly experienced life sciences industry experts. These uniquely talented professionals are deployed throughout our diverse range of service offerings to solve our client’s human capital needs.</p>
                   <p className="teamsrightin" >Whether you are a start-up or a shining star from fortune 500; within public or private sector, we match world class talent with exceptional opportunities. We have an excellent reputation spanning over 7 years, for being a reliable recruitment agency</p>
                   <p className="teamsrightin" >We provide every type of solution to our clients as per their requirements. You may be looking for a permanent direct hire, engage temporarily and hire later or may just want to continue a contractual relationship, we have solution to every specific situation.</p>
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
export default Resourcing;