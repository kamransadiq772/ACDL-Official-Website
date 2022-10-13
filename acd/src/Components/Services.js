import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/About.css'
import Card from "./Card";
import './css/Home.css'


const Services = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="" >
            <div className="abouth servicesjpg" >
                <h1>Services</h1>
            </div >
            <div>
                <div className="sercontain" >
                    <div className="sercontaininmaxwidth">
                        <div className="serdata" >
                            <h1>Our Services</h1>
                            <div className="serpara">We recognize that each client and candidate is unique. Therefore, we strive to truly understand each business and its Scientific needs. By doing so, this allows us to utilize our knowledge and experience within the market, in order to advise and consult accordingly, in turn creating valued and long-term partnerships.</div>
                        </div>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;