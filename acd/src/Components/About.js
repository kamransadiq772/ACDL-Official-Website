import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/About.css'
import './css/Home.css'
import val from './assets/val.jpg'
import his from './assets/history.png'
import mobval from './assets/mobvalues.png'

const About = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className=" " >
            <div className="abouth aboutjpg" >
                <h1>About Us</h1>
            </div >
            <div id="ourvision" className="ov">
                <div className="serdata">
                    <h1>Our Vision</h1>
                    <div className="serpara">To be relied upon, by our clients, as a strategic partner for success on a global level, and to become a key partner in drug development at every stage of product life cycle. We will achieve this by delivering the highest quality services and innovative solutions in an efficient, cost effective and timely manner. We take pride in ourselves in building a strong relationship with our partners.</div></div>
            </div>
            <div id="ourmission" className="ov bgcolor">
                <div className="serdata">
                    <h1>Our Mission</h1>
                    <div className="serpara">To provide high quality strategical and operational consulting services and skilled human resource to the pharmaceutical and bio-tech companies in the fields of clinical drug development, pharmacovigilance and regulatory affairs in a fully compliant global pharmacovigilance system with the ultimate goal to safeguard patient’s and consumer’s well-being in particular and improving the well-being of the whole mankind in general.
                    </div></div>
            </div>
            <div id="ourvalues" className="ov">
                <div className="serdata">
                    <h1>Our Values</h1>
                    <img src={val} className="imgval fullimg"/>
                    <img src={mobval} className="imgval mobileimg"/>
                    </div>
            </div>
            <div id="ourhistory" className="ov bgcolor">
                <div className="serdata">
                    <h1>Who We Are</h1>
                    <img src={his} className="imgval"/>
                    </div>
            </div> 
            <div className="ov">
                <div className="serdata">
                    <div className="serpara">We are a team of specialists, with a proven track record in the pharmaceutical industry, working on a project management mode, driving our teams towards excellence. Our staff is highly qualified in their respective functional area. Ultimately, our goal is to provide our clients with practical consulting solutions which properly address the situation at hand. Whether you need added expertise for specialized tasks, or a team to assist with larger more diverse projects, Alpha Clinical can supply you with the experienced consulting services you require.</div>
                    <br />
                    <div className="serpara">Our customers expect a high level of professionalism and require us to bring a significant knowledge of the pharmaceutical and medical industries to solve the recruitment challenges they have. We therefore will only invite well qualified, experienced and professional individualsto join our team. The Management Team at Alpha Clinical encompasses a vast amount of experience in the industry.</div>
                    <br />
                    <div className="serpara">We know how important it is to get the right people for your project, so we provide individual biographies of our consultants, giving an overview and details of all our team mates before your work with us starts. Alpha’s commitment to delivering high impact, quality services dedicated to the life sciences industry is founded on the vision of our leadership team. We understand that service excellence only comes from knowing that services are experienced and not just purchased.</div>
                    
                </div>
            </div>
            
            
        </div>
    )
}
export default About;