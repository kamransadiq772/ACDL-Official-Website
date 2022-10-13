import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Drug.css'
import ReactDOM from 'react-dom';
import { FaAngleRight } from "react-icons/fa";


const Drug = (props) => {

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
            <div className="abouth drugupperjpg upperheaderindrug" >
                <h1>Drug Safety & Pharmacovigilance</h1>
            </div >
            <div className="drugcontent" >
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
                    <div className="righthead" >
                        <h2>Drug Safety & Pharmacovigilance</h2>
                    </div>
                    <div className="subrighthead">
                        <h3>Comprehensive Pre- and Post-Marketing Drug Safety Services</h3>
                    </div>
                    <div className="rightinnerdata">
                        <p className="rightfirstpara">In today’s pharmaceutical drug development landscape, you cannot afford to miss crucial safety information about your products. From pre-clinical animal studies, clinical trials from phase I to phase III and to post-marketing settings, we have broad-based experience to provide comprehensive drug safety and pharmacovigilance consulting services, to help you address product safety concerns in a confident and proactive manner.</p>
                        <p className="rightfirstpara">A pharmacovigilance and safety expert from Alpha Clinical acts as a direct extension of your team to assist with:</p>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Strategic Pharmacovigilance and Safety Support –</strong>We provide support for early clinical development and late phase compounds for the development of safety management plans, regular and periodic review of safety data as it evolves from the ongoing studies, preparation of safety summaries for the NDA and MAA submissions, advise on safety sections of the clinical study reports. We have in-depth expertise and knowledge for the development of protocols and investigator’s brochure; and development of safety measures for first in human studies.
                            </li>
                        </ul>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Individual Case Safety Reports for Clinical and Marketed Products–</strong>Prepare, review and finalization of serious and non-serious safety reports for clinical and marketed products, analysis of similar events, to ensure full compliance with client-approved operating procedures from initial event capture to submission-ready regulatory forms.
                            </li>
                        </ul>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Aggregate Safety Reports –</strong>Development of all clinical and marketed periodic reports for planned regulatory submissions, including country-specific reports.
                            </li>
                        </ul>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Safety Signal Detection–</strong>We can conduct all or part of your clinical and marketed product’s signal detection and analysis.
                            </li>
                        </ul>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Risk Management–</strong>We can assist our clients with the development of clinical and post-approval strategies for risk management plans. We also provide pharmacovigilance consulting services for the development of safety specifications and risk minimization measures for the RMPS.
                            </li>
                        </ul>
                        <ul className="rightfirstul">
                            <li>
                                <strong>Scientific Literature Surveillance–</strong>Provide outsourced options to support existing client safety organizations.
                            </li>
                        </ul>
                    </div>
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
export default Drug;