import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Alpha.css'
import './css/clinical.css'

const Clinical = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="itmain clinicaldevlower clinicalresminheight" >
            <div className="abouth bb clinicalupperbg" >
                <h1>Alpha Clinical Development</h1>
            </div >
            <div className="initm minheightclinicalpageinner" >

                <div className="ititemscontainer">

                    <div className="ititem itmr " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Protocol Design</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Protocol development assistance and study feasibility assessments.
                                    </li>
                                    <li>
                                    Consultation on study designs. endpoints, objectives, assessments, and statistical analyses, as well as working to identify possible sites and understand the feasibility of conducting the study.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Full Life Cycle Strategy</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Protocol development assistance and study feasibility assessments.
                                    </li>
                                    <li>
                                    Consultation on study designs, endpoints, objectives, assessments and statistical analyses, as well as working to identify possible sites and understand the feasibility of conducting the study.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ititem  " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Study Start-Up</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Protocol development assistance and study feasibility assessments.
                                    </li>
                                    <li>
                                    Consultation on study designs, endpoints, objectives, assessments and statistical analyses, as well as working to identify possible sites and understand the feasibility of conducting the study.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="itinnnermsg" >
                        <h3>Alpha is as passionate about your product as you are, ready to provide support to our esteemed clients at every stage of the product life cycle</h3>
                    </div>
                    <div className="ititem itmr " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Clinical Trial Management</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Provision of project and data management for study conduct.
                                    </li>
                                    <li>
                                    Complete audit-ready clinical study solution which delivers study efficiency, data quality, and patient compliance.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Medical Management and Oversight</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Provision of medical expertise to support study design and conduct.
                                    </li>
                                    <li>
                                    Therapy area and protocol training, development and delivery of medical monitoring solutions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ititem " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Clinical Pharmacology</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Early phase clinical research strategy development.
                                    </li>
                                    <li>
                                    Clinical Pharmacology Strategy development, including design and conduct across the spectrum of early phase studies.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr " >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Publications</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <ul>
                                    <li>
                                    Development of publication and communication strategies.
                                    </li>
                                    <li>
                                    Interpretation of study results, development of publication plans, and execution against those plans to maximize reach of study communications.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Clinical;