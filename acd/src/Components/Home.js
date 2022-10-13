import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './css/Home.css';
import Card from './Card';
import scope from './assets/scope.jpg';
import serimg from './assets/serimg.png'
import { FaArrowCircleLeft, FaArrowCircleRight, FaReadme, FaOdnoklassniki } from 'react-icons/fa';
import first from './assets/climg/first.png'
import second from './assets/climg/second.png'
import third from './assets/climg/third.png'
import four from './assets/climg/four.png'
import five from './assets/climg/five.png'
import six from './assets/climg/six.png'
import seven from './assets/climg/seven.png'
import eight from './assets/climg/eight.png'
import nine from './assets/climg/nine.png'
import ten from './assets/climg/ten.png'
import eleven from './assets/climg/eleven.png'
import twelve from './assets/climg/twelve.png'
import thirteen from './assets/climg/thirteen.png'
import fourteen from './assets/climg/fourteen.png'
import Counter from "./Counter";





const Home = () => {

    const [countriesnum, setcountriesnum] = useState(0);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    function toleft() {
        document.getElementById("hrlistid").scrollBy(-430, 0)
    }
    function toright() {
        document.getElementById("hrlistid").scrollBy(430, 0)
    }
    function serleft() {
        document.getElementById("listservice").scrollBy(-400, 0)
    }
    function serright() {
        document.getElementById("listservice").scrollBy(400, 0)
    }
    // window.setInterval(serright,2000);
    // window.setInterval(toright, 3000);

    return (
        <div className="homeoutercontainer">
            <div className=" fcontainer " >
                <div className="inner " >

                    <div className="innerflexone">
                        <h1 className="tit" >Welcome To Alpha Clinical</h1>
                        <h3 className="txt" >A Boutique recruitment and resourcing company run by physicians and pharmaceutical experts, your partner in hiring solutions</h3>

                    </div>

                </div>


            </div>
            <div className="spart" >
                <div className="scont" >
                    <div className="simgcont" >
                        <img src={scope} alt='no img' className="simg" />
                    </div>
                    <div>
                        <h1 className="shead" >Alpha Clinical Development</h1>
                        <div className="spara" >
                            The foundation of our company is built upon a unique blend of diversity and exclusivity, which gives us the capability to gather talent from across the world from different countries and cultures. This gives us immense strength to achieve our goals efficiently and effectively. Providing technical consulting services / strategic candidate headhunting, within niche skill-sets, for both freelance and permanent staff is the lifeline of our business. We believe that people are at the core of our business and they are the most effective tool to achieve company’s goal. This is the very reason which ensured our continuous and sustainable growth in all our markets.
                        </div>
                    </div>

                </div>

            </div>
            <div className="sercontain" >
                <div className="sercontaininmaxwidth">
                    <div className="serdata" >
                        <h1>Our Services</h1>
                        <div className="serpara">We recognize that each client and candidate is unique. Therefore, we strive to truly understand each business and its Scientific needs. By doing so, this allows us to utilize our knowledge and experience within the market, in order to advise and consult accordingly, in turn creating valued and long-term partnerships.</div>
                    </div>
                    <Card />
                </div>
            </div>
            <Counter />
            <div className="jobs" >
                <div className="jobsinformaxwidth">
                    <div className="jobh" >
                        <h2  >Jobs</h2>
                    </div>
                    <div className="hrview" >
                        <button className="btnleft" onClick={toleft}><FaArrowCircleLeft color="#333333" /></button>
                        <div className="hrlist" id="hrlistid">
                            <div className="hrlistinner" >
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Associate Director/ Senior Manager / Manager – Global Patient Safety Scientist </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Director / Senior Director, Clinical Development leader Oncology </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Associate Director/ Senior Manager / Manager – Global Patient Safety Scientist </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Medical Director Hematology </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Global Safety Lead, Senior Safety Physician  </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >Senior Director / Director / Associate Director – DRUG SAFETY PHYSICIAN  </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>
                                <div className="hrlistelement" >
                                    <Link to="/jobs" className="anchorinner" >
                                        <h3 className="listelementhead" >DIRECTOR SAFETY SCIENCES </h3>
                                        <div className="seconline" ><FaOdnoklassniki />asad ali <FaReadme /> January 3, 2022</div>
                                        <br />
                                        <div className="thirdline" >January 3, 2022</div>
                                    </Link>
                                </div>

                            </div>

                        </div>
                        <button className="btnleft" onClick={toright}><FaArrowCircleRight color="#333333" /></button>

                    </div>
                </div>

            </div>
            <div className="phrase" >
                <div className="icon">
                    <h1  >""</h1>
                </div>
                <h2 className="jobhead" >What Clients Think About Us</h2>
                <div className="ptxt" >
                    Perfection comes from specialization and practice. The insight gained from exclusively supporting Pharmaceutical, Biotech, and Medical Device organizations enables us to “be in the shoes” of our clients, understanding their unique priorities and challenges. Likewise, serving the Life Sciences industry over many years has allowed us to nurture a network of leading experts from across the country.
                </div>
            </div>
            <div className="lser" >
                <div className="lserin">
                    <h2>Our Clients</h2>
                    <div className="servicesflexdisplay" >
                        <button className="btnleft" onClick={serleft}><FaArrowCircleLeft color="#333333" /></button>
                        <div className="hrlist" id="listservice">
                            <div className="hrlistinner">
                                <img src={first} />
                                <img src={second} />
                                <img src={third} />
                                <img src={four} />
                                <img src={five} />
                                <img src={six} />
                                <img src={seven} />
                                <img src={eight} />
                                <img src={nine} />
                                <img src={ten} />
                                <img src={eleven} />
                                <img src={twelve} />
                                <img src={thirteen} />
                                <img src={fourteen} />                                
                            </div>
                        </div>
                        <button className="btnleft" onClick={serright}><FaArrowCircleRight color="#333333" /></button>
                    </div>
                    <p className="serparalast">Clients listed, either were provided Sourcing or Consultancy services</p>
                </div>
            </div>
        </div>

    )
}
export default Home;