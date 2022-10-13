import React from "react";
import { useState, useEffect } from "react";
import './css/Nav.css'
import src from './assets/logo11.png'
import { FaAngleDown, FaBars } from 'react-icons/fa';
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'


const Nav = () => {
    const [vis, setvis] = useState(true)
    const [add, setadd] = useState(false)

    const sideclick = () => {
        if (vis) {
            document.getElementById('menu').style.display = 'none'
            // document.getElementById('menu').style.height='0px'
            // document.getElementById('menu').classList.toggle("classname")   // It could also be used to get the same function
            setvis(false)
        } else {
            document.getElementById('menu').style.display = 'block'
            // document.getElementById('menu').style.height='max-content'
            setvis(true)
        }
    }

    const aboutsidebtnclick = () => {
        if (add) {
            document.getElementById('aboutdd').style.display = 'none'
            document.getElementById('aboutdd').style.visibility = 'hidden'
            setadd(false)
        } else {
            document.getElementById('aboutdd').style.display = 'block'
            document.getElementById('aboutdd').style.visibility = 'visible'
            setadd(true)
        }
    }

    const sersidebtnclick = () => {
        if (add) {
            document.getElementById('serdd').style.display = 'none'
            document.getElementById('serdd').style.visibility = 'hidden'
            setadd(false)
        } else {
            document.getElementById('serdd').style.display = 'block'
            document.getElementById('serdd').style.visibility = 'visible'
            setadd(true)
        }
    }

    const jobsidebtnclick = () => {
        if (add) {
            document.getElementById('jobdd').style.display = 'none'
            document.getElementById('jobdd').style.visibility = 'hidden'
            setadd(false)
        } else {
            document.getElementById('jobdd').style.display = 'block'
            document.getElementById('jobdd').style.visibility = 'visible'
            setadd(true)
        }
    }


    const { pathname } = useLocation();
    useEffect(() => {

        if (window.outerWidth < 990) {

            document.getElementById('jobdd').style.display = 'none'
            document.getElementById('jobdd').style.visibility = 'hidden'

            document.getElementById('serdd').style.display = 'none'
            document.getElementById('serdd').style.visibility = 'hidden'

            document.getElementById('aboutdd').style.display = 'none'
            document.getElementById('aboutdd').style.visibility = 'hidden'

            document.getElementById('menu').style.display = 'none'

        }
    }, [pathname]);



    return (
        <header className="header" >
            <div className="headerin" >
                <div className="imagecontainer" >
                    <Link className="anchorimg" to="/" >
                        <img src={src} alt="NO Image" className="image"
                        />
                    </Link>
                </div>
                <div id="threelinesbtn" className="sidethreelines" onClick={sideclick}><FaBars /></div>
                <div id="menu" className="menu" >
                    <ul role="menubar" className="navul"  >
                        <li role='menuitem' className="linav ">
                            <NavLink to="/" className="anli" ><span className="navspan" >HOME</span></NavLink>
                        </li>
                        <li id="aboutdivof" role='menuitem' className="linav "  >
                            <NavLink to="/about" className="anli" ><span className="navspan" >ABOUT US</span></NavLink>
                            <span className="aboutside" id="aboutsidebtn" onClick={aboutsidebtnclick}><FaAngleDown /></span>
                            <ul id="aboutdd" className="aboutddin ddhiden ddaheight">
                                <li>
                                    <HashLink to="/about/#ourmission" >OUR MISSION</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/about/#ourvision"  >OUR VISION</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/about/#ourvalues" >OUR VALUES</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/about/#ourhistory">OUR HISTORY</HashLink>
                                </li>

                            </ul>
                        </li>
                        <li id="serdivof" role='menuitem' className="linav " >
                            <NavLink to="/services" className="anli" ><span className="navspan" >OUR SERVICES</span></NavLink>
                            <span className="aboutside" id="seraboutbtn" onClick={sersidebtnclick}><FaAngleDown /></span>
                            <ul id="serdd" className="aboutddin ddsheight ddhiden">
                                <li>
                                    <Link to="/regulatoryaffairs" >REGULATORY AFFAIRS</Link>
                                </li>
                                <li>
                                    <Link to="/drug" >DRUG SAFETY / PV</Link>
                                </li>
                                <li>
                                    <Link to="/clinical" >CLINICAL DEVELOPMENT</Link>
                                </li>
                                <li>
                                    <Link to="/sourcing" >SOURCING & RECRUIMENT</Link>
                                </li>
                                <li>
                                    <Link to="/it" >IT</Link>
                                </li>
                            </ul>
                        </li>
                        <li role='menuitem' className="linav " >
                            <NavLink to="/contact" className="anli" ><span className="navspan" >CONTACT US</span></NavLink>
                        </li>
                        <li id="jobdivof" role='menuitem' className="linav " >
                            <NavLink to="/jobs" className="anli" ><span className="navspan" >JOBS</span></NavLink>

                            <span className="aboutside" id="aboutsidebtn" onClick={jobsidebtnclick}><FaAngleDown /></span>
                            <ul id="jobdd" style={{ height: '80px' }} className="aboutddin ddhiden ">
                                {/* //ddaheight */}
                                <li>
                                    <HashLink to="/regcompany" >Register Company for post  job</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/jobupload"  >Job Upload</HashLink>
                                </li>
                                {/* <li>
                                    <HashLink to="/cvupload" >CV Upload</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/userregisteration">Register User</HashLink>
                                </li> */}

                            </ul>

                        </li>
                        <li className="navbtn" >
                            <span className="btnspan" >617-386-3979</span>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
export default Nav