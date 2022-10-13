import React from "react";
import './css/Jobcard.css'
import { FaHdd } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobcard = (props) => {
    return(
        <div className="jc" >
           <Link to="/apply" state={{datain : props.datain}} className="jcin" >
               <div className="jcinin" >
                   <h4 className="jchead" >{props.datain.title}</h4>
               </div>
               <div className="jcdown" >
                  <div className="jcdownleft">
                      <div >{props.datain.type ? JSON.parse(props.datain.type)[0].type : ""}</div>
                      <div><FaHdd color="#e99c35"/> {props.datain.location ? JSON.parse(props.datain.location)[0].country : ""} </div>
                  </div>
                  <div className="jcdownright" >
                          More Details
                  </div>
               </div>
           </Link>
        </div>
    )
}
export default Jobcard;