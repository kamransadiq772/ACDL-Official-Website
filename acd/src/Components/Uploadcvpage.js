import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const Uploadcvpage = () => {



    const [cvuploaddata, setcvuploaddata] = useState({
        name: '',
        email: '',
        phone: '',
        letter: '',
        cv: null
    });


    const cvupload = (e) => {

        e.preventDefault()

        axios.post('/uploadthecv', { cvuploaddata: cvuploaddata })
            .then((res) => {
                if (res.data.status == 200) {
                    alert("Uploaded Sucessfully")
                    document.getElementById('apform').reset()
                } else {
                    alert("failed")
                }
            }, (err) => {
                console.log(err)
            })
    }




    return (
        <div>
            <div className="applyinnerrightinner jbuploadouterof" >
                <h2>ENTRE Resume DETAILS</h2>
                <form className="applyforum" id="apform" onSubmit={cvupload}>
                    <div className="applyname">
                        <label>Full Name <span className="starc" >*</span></label>
                        <input id="applyinputname" type="text" className="applyinnerinput" required onChange={e => { setcvuploaddata(ps => { return { ...ps, name: e.target.value } }) }} />
                    </div>
                    <div className="applyname">
                        <label>Email <span className="starc" >*</span></label>
                        <input id="applyinputemail" type="text" className="applyinnerinput" required onChange={e => { setcvuploaddata(ps => { return { ...ps, email: e.target.value } }) }} />
                    </div>
                    <div className="applyname">
                        <label>Phone <span className="starc" >*</span></label>
                        <input id="applyinputphone" type="text" className="applyinnerinput" required onChange={e => { setcvuploaddata(ps => { return { ...ps, phone: e.target.value } }) }} />
                    </div>
                    <div className="applyname">
                        <label>Cover Letter <span className="starc" >*</span></label>
                        <textarea id="applyinputletter" type="text" className="applyinnerinput aptarea" required onChange={e => { setcvuploaddata(ps => { return { ...ps, letter: e.target.value } }) }} />
                    </div>
                    <div className="applyname">
                        <label>Upload CV/Resume <span className="starc" >*</span></label>
                        <input id="applyinputcv" name="cvfile" type="file" className="applyfile" required onChange={e => { setcvuploaddata(ps => { return { ...ps, cv: e.target.files[0] } }) }} />
                        <small>Allowed Type(s): .pdf, .doc, .docx</small>
                    </div>
                    <div className="agreeinput">
                        <input id="applyinputcheck" type="checkbox" name="agree" className="checkbox" required />
                        <label className="agreelable">Agree with the storage and handling of your data by this website. <span className="starc" >*</span></label>
                    </div>
                    <div className="applysubmitin">
                        <input type='submit' className="applysubmitbtn regcompanybtnres" value="Upload" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Uploadcvpage