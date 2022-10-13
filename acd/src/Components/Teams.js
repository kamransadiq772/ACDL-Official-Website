import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Drug.css'
import ReactDOM from 'react-dom';
import { FaAngleRight } from "react-icons/fa";
import './css/teams.css'


const Teams = () => {

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
            <div className="abouth teamupperjpg teamsheadingfirst" >
                <h1>Our Team</h1>
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
                   <p className="teamsrightin" >We are a team of specialists, with a proven track record in the pharmaceutical industry, working on a project management mode, driving our teams towards excellence. Our staff is highly qualified in their respective functional area. Ultimately, our goal is to provide our clients with practical consulting solutions which properly address the situation at hand. Whether you need added expertise for specialized tasks, or a team to assist with larger more diverse projects, Alpha Clinical can supply you with the experienced consulting services you require. Our customers expect a high level of professionalism and require us to bring a significant knowledge of the pharmaceutical and medical industries to solve the recruitment challenges they have. We therefore will only invite well qualified, experienced and professional individuals to join our team. The Management Team at Alpha Clinical encompasses a vast amount of experience in the industry. We know how important it is to get the right people for your project, so we provide individual biographies of our consultants, giving an overview and details of all our team mates before your work with us starts. Alpha’s commitment to delivering high impact, quality services dedicated to the life sciences industry is founded on the vision of our leadership team. We understand that service excellence only comes from knowing that services are experienced and not just purchased.</p>
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
export default Teams;