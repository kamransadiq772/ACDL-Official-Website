import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Alpha.css'
import './css/clinical.css'
import './css/sourcing.css'

const Sourcing = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="itmain sourcinglowerbg sourcingresminheight" >
            <div className="abouth bb sourcingupper" >
                <h1>Alpha Sourcing & Recruitment</h1>
            </div >
            <div className="initm minsourcingheight" >

                <div className="ititemscontainer">

                    <div className="ititem itmr itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Physicians and Pharma experts serving as recruiters</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                Alpha Clinical’s Unique model of “Physicians and Pharmaceutical Experts working as recruiters make it different”- These uniquely talented professionals are deployed throughout our diverse range of service offerings to solve our client’s human capital needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>30 years of Pharma experience/ Exclusive Network</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                We are a team of specialists, with a proven track record of 2 decades in the pharmaceutical industry, working on project management mode, driving our teams towards excellence, Ultimately, our goal is to provide our clients with practical consulting and sourcing solution
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Recruiting expertise in multi-Tx areas</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                Oncology, Nephrology, Rare Disease Hematology infectious Disease etc At the very core of Alpha’s talent acquisition and talent placement business is a robust professional force of highly experienced life sciences industry experts
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="itinnnermsg itemmrbtmofsourcing" >
                        <h3>At Alpha, our talent acquisition professionals do the grunt work for you so that you don’t have to spend time looking for that missing link</h3>
                    </div>
                    <div className="ititem itmr itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Cost effective and time efficient</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                Alpha is committed to identify and provide qualified candidates that fit your objectives and company culture at a market competitive cost effective rate.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Targeted Head-hunting</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                Alpha has designed a program to head hunt for you as per your needs and demands. With the help of our strong relations in the industry and advance IT tools, we are sure that we can fulfil your needs in an effective and efficient way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Targeted Head-hunting</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                Alpha has designed a program to head hunt for you as per your needs and demands. With the help of our strong relations in the industry and advance IT tools, we are sure that we can fulfil your needs in an effective and efficient way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ititem importantnew itemmrbtmofsourcing" >
                        <div className="iteminnerset minheightclinical">
                            <div className="ititemhead" >
                                <h4>Contract hiring</h4>
                            </div>
                            <div className="clinicalinneruldiv" >
                                <p className="sourcingpara" >
                                    There are certain times, certain projects and some times certain budget restrictions, which demand to hire some talent for a temporary period. With over two decades experience in the industry, we understand these situations very well. Our job is to deeply study and understand the needs of your project and find the best possible fits for each and every situation.
                                </p>
                                <p className="sourcingpara pstrongins" ><strong>Solution for all the challenges</strong></p>
                                <p className="sourcingpara pstrongins" ><strong>Limited candidate data</strong></p> 
                                <ul>
                                    <li className="sourcingpara" >Alpha based on its Candidate data pool bank would provide you with peace of mind making it easy for you to choose from</li>
                                </ul>
                                <p className="sourcingpara pstrongins" ><strong>Saves resourcing and time intense activity for our valued clients</strong></p> 
                                <ul>
                                    <li className="sourcingpara" >Alpha’s talent-acquisition and talent-placement is a robust professional force of highly experienced life sciences industry experts providing on time resourcing solution with Excellence</li>
                                </ul>
                                <p className="sourcingpara pstrongins" ><strong>Saves loss of valuable time</strong></p> 
                                <ul>
                                    <li className="sourcingpara" >Data bank and expert eye/selection process would save time, money and energy for you and the right candidate</li>
                                </ul>
                                <p className="sourcingpara pstrongins" ><strong>Lack of understanding of client needs</strong></p> 
                                <ul>
                                    <li className="sourcingpara" >Our Physicians and Pharmaceutical experts would clearly understand and meet client needs as per the required criteria and within the given time</li>
                                </ul>
                                <p className="sourcingpara pstrongins" ><strong>Delays in hiring</strong></p> 
                                <ul className="sourcingparalastpb">
                                    <li className="sourcingpara">All the above challenges would lead to delays in hiring and not helping the organizations meet their strategic Goals – Alpha keeping its promise of Par Excellence would make it easy for our valuable clients and candidates</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Sourcing;