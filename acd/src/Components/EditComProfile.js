import React from 'react'
import './css/Editjobpage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const EditComProfile = () => {

  const navigate = useNavigate()

  const datastored = JSON.parse(sessionStorage.getItem('datain'))

  const [ectexts, setectexts] = useState({
    phone: '',
    location: '',
    pass: '',
    details: '',
    id: datastored.cid
    // id:23
  });

  const editprofile = (e) => {
    e.preventDefault()
    // console.log(datastored)

    // ectexts.phone = document.getElementById('phone').value
    // ectexts.location = document.getElementById('location').value
    // ectexts.pass = document.getElementById('pass').value
    // ectexts.details = document.getElementById('details').value

    console.log(ectexts)


    axios.post('/companyeditdata', { data: ectexts })
      .then((response) => {
        if (response.data.status == 200) {
          alert("Edited Sucessfully!")
        } else {
          alert("failed to edit")
        }
      }, (err) => {
        alert(err)
      })


  }
  useEffect(() => {
    document.getElementById('phone').value = datastored.cphone
    document.getElementById('location').value = datastored.clocation
    document.getElementById('details').value = datastored.cdescription
  }, []);


  const logout = () => {
    sessionStorage.removeItem('datain')
    navigate('/regcompany')
  }


  return (
    <div className='container'>
      <form className='' onSubmit={editprofile}>
        {/* //formofedtprofile */}
        <div className="form-group">
          <label>Phone</label>
          <input className='form-control' id='phone' type='text' required onChange={(e) => { setectexts(ps => { return { ...ps, phone: e.target.value } }) }} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id='location' className='form-control' type="tex" required onChange={(e) => { setectexts(ps => { return { ...ps, location: e.target.value } }) }} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input id='pass' className='form-control' type='text' required onChange={(e) => { setectexts(ps => { return { ...ps, pass: e.target.value } }) }} />
        </div>
        <div className="form-group">
          <label htmlFor="description">About Your company</label>
          <textarea id='details' className='form-control' name="description" cols="30" rows="10" required onChange={(e) => { setectexts(ps => { return { ...ps, details: e.target.value } }) }}></textarea>
        </div>
        <input type='submit' className="btn btn-primary my-3 w-100" value='Edit' />
        <p id='companylougoutbtn' className='btn btn-outline-danger d-block' onClick={logout} >Logout</p>
      </form>
      {/* <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}
    </div>
  )
}

export default EditComProfile