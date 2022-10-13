import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import axios from 'axios'



const Registertheuser = () => {


    const navigate = useNavigate()

    const [reg, setreg] = useState({

        // jobid: datain.jobid,
        // title: datain.title,
        name: '',
        email: '',
        phone: '',
        pass: '',
        description: ''
    })
    const code = Math.floor(Math.random() * 1000).toString()

    const params = {
        to_email: reg.email,
        code: code,
        msg: "entre this code in prompt on the page."
    }

    const regiteruser = (e) => {
        e.preventDefault()
        emailjs.send('service_5b7gzh7', 'template_sno9two', params, 'NNomBATL_J1gdmihH')
            .then((res) => {
                const uecode = prompt("Entre the code send on the given email")
                if (uecode === code) {
                    alert("true answer")
                    axios.post('/registermen', { reg: reg })
                        .then((response) => {
                            if (response.data.status == 200) {
                                alert(" register successfully ")
                                document.getElementById('cemailform').reset()
                            } else if (response.data.status == 400) {
                                alert("email already exists")
                            } else {
                                alert("unknown error")
                            }
                        })

                } else {
                    alert("wrong answer")
                }
            }, (err) => {
                alert("failed to send email")
            })
        console.log(reg)

    }


    return (
        <div>
            <div>
                <div className="abouth servicesjpg" >
                    <h1>User Registration</h1>
                </div>
                <div className="companyreg">
                    <div className="applyinnerrightinner" >
                        <h2>ENTRE COMPANY DETAILS</h2>
                        <form className="applyforum" id="cemailform" onSubmit={regiteruser}>
                            <div className="applyname">
                                <label>Name <span className="starc" >*</span></label>
                                <input name="name" id="applyinputname" type="text" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, name: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>Email <span className="starc" >*</span></label>
                                <input name="email" id="applyinputemail" type="email" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, email: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>Phone <sub>(for further discussion)</sub> <span className="starc" >*</span></label>
                                <input name="phone" id="applyinputphone" type="tel" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, phone: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>Password <span className="starc" >*</span></label>
                                <input name="location" id="applyinputlocation" type="text" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, pass: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>About Yourself <span className="starc" >*</span></label>
                                <textarea name="detail" id="applyinputletter" type="text" className="applyinnerinput aptarea" required onChange={e => { setreg(ps => { return { ...ps, description: e.target.value } }) }} />
                            </div>
                            <div className="agreeinput">
                                <input id="applyinputcheck" type="checkbox" name="agree" className="checkbox" required />
                                <label className="agreelable">I agree to the Terms & Conditions and Privacy Policy <span className="starc" >*</span></label>
                            </div>
                            <div className="agreeinput">
                                <input id="applyinputcheck" type="checkbox" name="agree" className="checkbox" required />
                                <label className="agreelable">Keep me signed in <span className="starc" >*</span></label>
                            </div>
                            <div className="applysubmitin">
                                <input className="applysubmitbtn regcompanybtnres" type='submit' value='Request to Register' />
                            </div>
                        </form>
                        <p>Already have an account. <Link to="/regcompany">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registertheuser