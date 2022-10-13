import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Alpha.css'
import './css/Raffairs.css'

const Raffairs = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    

    return (
        <div className="itmain raffairslowerbg" >
            <div className="abouth bb lowerrfbg" >
                <h1>Alpha Regulatory Affairs</h1>
            </div >
            <div className="initm minheightar" >

                <div className="ititemscontainer">
                    <div className="raffairsfirst" >
                        <p className="raffairsinnerp" >
                            Alpha is as passionate about your product as you are. We understand the art and science of regulatory affairs, and can help you devise an effective strategy to ensure that your product attains complete compliance. We are a team of experienced regulatory professionals who advise and provide regulatory support for products in all stages of development (preclinical to post market). We are operative in over 40 countries with colleagues on-ground to collaborate with clients to bring products to the desired market in the most efficient and cost-effective manner, within an evolving and increasingly challenging regulatory environment including but not limited to the following fields:
                        </p>
                    </div>
                </div>
                <div className="itinnnermsg" >
                    <h3>Alpha Regulatory Affairs Consulting</h3>
                </div>
                <div className="ulinnerra itmr" >
                    <div className="ulinnerrainnder">
                        <ul>
                            <li>Regulatory strategy, GAP analysis and product classifications</li>
                            <li>EMA, FDA, PMDA, China, India, Latin America and ROW</li>
                            <li>US code of federal regulations</li>
                            <li>Regulatory study and planning for submission</li>
                            <li>Label Preparation and Review</li>
                            <li>Regulatory Due diligence</li>
                        </ul>
                    </div>
                </div>
                <div className="ulinnerra itmr" >
                    <div className="ulinnerrainnder">
                        <ul>
                            <li>Vitamins and food supplements</li>
                            <li>Biologics and small molecules</li>
                            <li>Medical Devices</li>
                            <li>Formulation review for potential entry into new International markets</li>
                            <li>Claim Substantiation and Review</li>
                            <li>OTC and consumer healthcare</li>
                        </ul>
                    </div>
                </div>
                <div className="ulinnerra " >
                    <div className="ulinnerrainnder">
                        <ul>
                          <li>Regulatory Intelligence</li>
                          <li>Regulatory Compliance</li>
                          <li>Regulatory CMC and its strategy</li>
                          <li>Regulatory remediation strategy and assistance</li>
                          <li>Scientific Writing</li>
                          <li>Claim Development</li>
                          <li>New product development</li>
                          <li>Launch and post approval activities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Raffairs;