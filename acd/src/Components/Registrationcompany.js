import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Registrationcompany = () => {
  const navigate = useNavigate()
  emailjs.init('NNomBATL_J1gdmihH')

  const [reg, setreg] = useState({

    // jobid: datain.jobid,
    // title: datain.title,
    name: '',
    email: '',
    phone: '',
    location: '',
    description: ''
  }
  )

  const param = {
    name:reg.name,
    email:reg.email,
    phone:reg.phone,
    location:reg.location,
    description:reg.description
  }


  const sendemail = (e) => {
    e.preventDefault();

    axios.post('/cdetails', { reg: reg })
      .then((res) => {
        if (res.data.status == 200) {

          emailjs.send('service_5b7gzh7', 'template_t0bgxwl', param, 'NNomBATL_J1gdmihH')
            .then((res) => {
              alert("Your Email is recieved successfully, Our team will contact on your provided contact infromation.")
            }, (err) => {
              alert("Failed to send your email.")
            })

          document.getElementById('cemailform').reset()
          navigate('/regcompany')

        } else if (res.data.status == 400) {
          alert("A company With this email is already registered.")
        } else {
          alert("failed")
        }
      }, (err) => {
        alert("outer error")
        // console.log(err)
      })

    document.getElementById('cemailform').reset();
  }



  return (
    <div>
      <div className="abouth servicesjpg" >
        <h1>Company Registration</h1>
      </div>
      <div className="companyreg">
        <div className="applyinnerrightinner" >
          <h2>ENTRE COMPANY DETAILS</h2>
          <form className="applyforum" id="cemailform" onSubmit={sendemail}>
            <div className="applyname">
              <label>Company Name <span className="starc" >*</span></label>
              <input name="name" id="applyinputname" type="text" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, name: e.target.value } }) }} />
            </div>
            <div className="applyname">
              <label>Company Email <span className="starc" >*</span></label>
              <input name="email" id="applyinputemail" type="email" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, email: e.target.value } }) }} />
            </div>
            <div className="applyname">
              <label>Phone <sub>(for further discussion)</sub> <span className="starc" >*</span></label>
              <input name="phone" id="applyinputphone" type="tel" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, phone: e.target.value } }) }} />
            </div>
            <div className="applyname">
              <label>Location <span className="starc" >*</span></label>
              <input name="location" id="applyinputlocation" type="text" className="applyinnerinput" required onChange={e => { setreg(ps => { return { ...ps, location: e.target.value } }) }} />
            </div>
            <div className="applyname">
              <label>About Your Company <span className="starc" >*</span></label>
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
  )
}

export default Registrationcompany