import React from "react";
import { useState, useEffect } from "react";
import './css/Regcompany.css'
import axios from "axios";
// import { useHistory } from "react-router-dom";
//npm i emailjs-com
import emailjs from 'emailjs-com'
import { Link, useNavigate } from "react-router-dom";

const Regcompany = () => {


    const navigate = useNavigate()



    const [clogin, setclogin] = useState({
        cemail:'',
        cpass:''
    })

    

    const comlogin = (e) => {

       e.preventDefault()

       axios.post('/companylogin',{clogin:clogin})
         .then((res)=>{
              if(res.data.status==400) {
                  const sessiondata = JSON.stringify(res.data.datain[0])
                  sessionStorage.setItem('datain', sessiondata)
                  navigate('/jobupload')
                //   sessionStorage.setItem('loggedIn', true)
                //   console.log(res.data.datain[0].name)
                //   const datain = JSON.parse(sessionStorage.getItem('datain'))
                //   console.log(datain.name)
                }else alert("Invalid credential")
         },(err)=>{
                alert("unknown error")
                console.log(err)
         })
         document.getElementById("cloginform").reset()
    }    


    return (
        <div className="">
            <div className="abouth servicesjpg" >
                <h1>Company Login</h1>
            </div>
            <div className="companyouter">
                
                <div className="companylonin companyreg">
                    <div className="applyinnerrightinner" >
                        <h2>LOG IN</h2>
                        <p>Entre data provided by ACD email services</p>
                        <form className="applyforum" id="cloginform" onSubmit={comlogin}>
                            <div className="applyname">
                                <label>Company ID <span className="starc" >*</span></label>
                                <input type="email" className="applyinnerinput" required onChange={e => { setclogin(ps => { return { ...ps, cemail: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>Company Password <span className="starc" >*</span></label>
                                <input type="password" className="applyinnerinput" required onChange={e => { setclogin(ps => { return { ...ps, cpass: e.target.value } }) }} />
                            </div>
                            <div className="applysubmitin">
                                <input type='submit' value='SIGN IN' className="applysubmitbtn regcompanybtnres"/>
                            </div>
                        </form>
                        <p>Create An Account instead. <Link to="/registrationcompany" >SIGN UP</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Regcompany;