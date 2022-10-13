import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import second from './css/Footer.css'
import src from './assets/footer.png'
import link from './assets/linkedin.png'
import email from './assets/email.png'
import { NavLink, Link } from "react-router-dom";


const Footer = () => {


    return (
        <div  >
        <footer className="containeri" >
            <div className="containerin" >
                <div className="containerinin" >
                    <div>
                        <section className="section1" >
                            <div className="s1div" >
                                <Link to="/" >
                                    <img src={src} alt="NO Image" className="simage" />
                                </Link>
                                <p className="para" >"A boutique recruitment agency for Permanent Contract hiring run by Physicians and Pharmaceutical Experts"</p>
                            </div>
                            <div ></div>
                        </section>
                        <section className="section2" >
                            <div className="s2div" >
                                <div className="s2divdiv" >
                                    <a className="link" href="#" >in</a>
                                    <a className="email" href="#" >@:</a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
                <div className="support" >
                    <h4 className="heading" >Services</h4>
                    <div className="" >
                        <div className="supportcontainer" >
                        <ul className="ulinmenu" >
                                <li className="liin" ><Link to="/candidate">Candidate Solutions</Link></li>
                                <li className="liin" ><Link to='/consulting' >Consulting Solutions</Link></li> 
                                <li className="liin" ><Link to="/resourcing" >Resourcing Solutions</Link></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="support" >
                    <h4 className="heading" >Menu</h4>
                    <div className="" >
                        <div className="supportcontainer" >
                            <ul className="ulinmenu" >
                                <li className="liin" ><NavLink to="/" >Home</NavLink></li>
                                <li className="liin" ><NavLink to='/about' >About Us</NavLink></li> 
                                <li className="liin" ><NavLink to="/teams" >Team</NavLink></li> 
                                <li className="liin" ><NavLink to="/services" >Services</NavLink></li> 
                                <li className="liin" ><NavLink to="/jobs" >Jobs</NavLink></li> 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="support" >
                    <h4 className="heading" >Support</h4>
                    <div className="" >
                        <div className="supportcontainer" >
                        617-386-3979
                        <br/>
                        info@acdlimited.com
                        <br />
                        1 Broadway, Kendall Square Cambridge, MA 02142 USA
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="cop" >©2021 by Alpha Clinical Developments.</div>
        </div>
    )

}
export default Footer;