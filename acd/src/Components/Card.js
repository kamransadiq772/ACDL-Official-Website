import React from "react";
import './css/card.css'
import hands from './assets/hands.png'
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="contcard" >
            
            <div className="outer" >
            <Link to="/sourcing">
                <div className="card1 servicesourcingbg" >
                </div>
            </Link>
            </div>
            <div className="outer" >
            <Link to="/it">
                <div className="card1 serviceitbg" >
                </div>
            </Link>
            </div>
            <div className="outer" >
            <Link to="/drug">
                <div className="card1 servicepharmacobg" >
                </div>
            </Link>
            </div>
            <div className="outer" >
            <Link to="/regulatoryaffairs">
                <div className="card1 serviceregulatoryaffairsbg" >
                </div>
            </Link>
            </div>
            <div className="outer" >
            <Link to="/clinical">
                <div className="card1 serviceclinicaldevelopmentbg" >
                </div>
            </Link>
            </div>
         
        </div>
    )
}
export default Card;