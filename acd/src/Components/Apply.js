import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Apply.css';
import { FaComment, FaPeriscope, FaPhone } from 'react-icons/fa';
import axios from 'axios'


const Apply = () => {

    const { state } = useLocation()

  
    const datain = state.datain;

    var file = null
    // let file = null

    

    const [apply, setapply] = useState({
        jobid: datain.jobid,
        title: datain.title,
        name: '',
        email: '',
        phone: '',
        letter: '',
        cv: null
    })

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const name = document.getElementById("applyinputname")
    const email = document.getElementById("applyinputemail")
    const phone = document.getElementById("applyinputphone")
    const letter = document.getElementById("applyinputletter")
    const cv = document.getElementById("applyinputcv")
    const check = document.getElementById("applyinputcheck")


    const applyjob = (e) => {
        e.preventDefault()
        const form = document.getElementById('apform')

        if(name.value.length == 0 || email.value.length == 0 || phone.value.length == 0 || letter.value.length == 0 || cv.value.length == 0 || check.value.length == 0 ){
            alert("All Fields Are Required")
        }else{

            axios.post('/application',{
            sid:apply,
         }).then((res)=>{
            if(res.status==200) alert("Thanks for Applying")
            else alert("Failed to apply")
         },(err)=>{
         })
        
        form.reset()
      }
    }


    return (
        <div>
            <div className="applymain" style={{height:'70vh'}}>
                <h1 style={{fontSize:'42px'}}>{datain.title}</h1>
            </div >
            <div className="applydata">
                <h1 className="applyupperheading">
                    {datain.title}
                </h1>
                <div className="applyinnermain" >
                    <div className="applyinnerleft" >
                        <div className="applyinnerleftupper">
                            <p><strong >SUMMARY OF KEY RESPONSIBILITIES</strong></p>
                            <p className="summaryapply" >{datain.summary}</p>
                            <p><strong>REQUIRED QUALIFICATIONS AND SKILLS</strong></p>
                            <p className="summaryapply" >{datain.skills}</p>
                        </div>
                        <div className="applyinnerleftlower" >
                            <div>
                                <span className="applybspan" ><strong>Job Category: </strong></span>
                                <span className="applylspan">{datain.category}</span>
                            </div>
                            <div>
                                <span className="applybspan" ><strong>Job Type: </strong></span>
                                <span className="applylspan">{ datain.type ? JSON.parse(datain.type).map((item,index)=>{return `${item.type} | ` }) : ""}</span>
                            </div>
                            <div>
                                <span className="applybspan" ><strong><FaPeriscope /> Job Location: </strong></span>
                                <span className="applylspan">{ datain.location ? JSON.parse(datain.location).map((item,index)=>{return `${item.country} | `}) : ""}</span>
                            </div>
                        </div>
                    </div>
                    <div className="applyinnerright">
                        <div className="applyinnerrightinner" >
                            <h2>Apply for this position</h2>
                            <form  className="applyforum" id="apform">
                                <div className="applyname">
                                    <label>Full Name <span className="starc" >*</span></label>
                                    <input id="applyinputname" type="text" className="applyinnerinput" required onChange={e => { setapply(ps => { return { ...ps, name: e.target.value } }) }} />
                                </div>
                                <div className="applyname">
                                    <label>Email <span className="starc" >*</span></label>
                                    <input id="applyinputemail" type="text" className="applyinnerinput" required onChange={e => { setapply(ps => { return { ...ps, email: e.target.value } }) }} />
                                </div>
                                <div className="applyname">
                                    <label>Phone <span className="starc" >*</span></label>
                                    <input id="applyinputphone" type="text" className="applyinnerinput" required onChange={e => { setapply(ps => { return { ...ps, phone: e.target.value } }) }} />
                                </div>
                                <div className="applyname">
                                    <label>Cover Letter <span className="starc" >*</span></label>
                                    <textarea id="applyinputletter" type="text" className="applyinnerinput aptarea" required onChange={e => { setapply(ps => { return { ...ps, letter: e.target.value } }) }} />
                                </div>
                                <div className="applyname">
                                       <label>Upload CV/Resume <span className="starc" >*</span></label>
                                       <input id="applyinputcv" name="cvfile" type="file" className="applyfile" onChange={e=>{setapply(ps=>{return{...ps, cv: e.target.files[0]}})}}/>
                                       <small>Allowed Type(s): .pdf, .doc, .docx</small>
                                   </div>
                                <div className="agreeinput">
                                    <input id="applyinputcheck" type="checkbox" name="agree" className="checkbox" />
                                    <label className="agreelable">Agree with the storage and handling of your data by this website. <span className="starc" >*</span></label>
                                </div>
                                <div className="applysubmitin">
                                    <button className="applysubmitbtn" onClick={applyjob}>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Apply;