// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const JobUploadPage = () => {

//     const navigate = useNavigate()

//     const cdata = JSON.parse(sessionStorage.getItem('datain')) 

//     const [jupladdata, setjupladdata] = useState({
//         title: '',
//         category: '',
//         type: '',
//         location: '',
//         summary: '',
//         skills: '',
//         cname: cdata?.cname,
//         cid: cdata?.cid,
//         // cname:'kamran',
//         // cid:23
//     });

//     const uploadjob = (e) => {
//         e.preventDefault()

//         axios.post('/uploadthejob', { jupladdata: jupladdata })
//             .then((res) => {
//                 if (res.data.status == 200) {
//                     alert("Uploaded Sucessfully")
//                     document.getElementById('apform').reset()
//                 } else {
//                     alert("failed")
//                 }
//             }, (err) => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         // console.log(sessionStorage.getItem('loggedin'))
//         if (!(sessionStorage.getItem('datain'))) {
//             navigate('/regcompany')
//         }
//     })



//     const logout = () => {
//         //    alert("logout clicked")
//         sessionStorage.removeItem('datain')
//         navigate('/regcompany')
//     }



//   return (
//     <div className='dataindispaly'>
//         <div className="applyinnerrightinner jbuploadouterof" style={{width:'100%'}}>
//                     <h2>Entre Job Details</h2>
//                     <form className="applyforum" id="apform" onSubmit={uploadjob}>
//                         <div className="applyname">
//                             <label>Title <span className="starc" >*</span></label>
//                             <input id="applyinputname" type="text" className="applyinnerinput" required onChange={e => { setjupladdata(ps => { return { ...ps, title: e.target.value } }) }} />
//                         </div>
//                         <div className="applyname">
//                             <label>Category <span className="starc" >*</span></label>
//                             <input id="applyinputemail" type="text" className="applyinnerinput" required onChange={e => { setjupladdata(ps => { return { ...ps, category: e.target.value } }) }} />
//                         </div>
//                         <div className="applyname">
//                             <label>Type <span className="starc" >*</span></label>
//                             <input id="applyinputphone" type="text" className="applyinnerinput" required onChange={e => { setjupladdata(ps => { return { ...ps, type: e.target.value } }) }} />
//                         </div>
//                         <div className="applyname">
//                             <label>Location <span className="starc" >*</span></label>
//                             <input id="applyinputphone" type="text" className="applyinnerinput" required onChange={e => { setjupladdata(ps => { return { ...ps, location: e.target.value } }) }} />
//                         </div>
//                         <div className="applyname">
//                             <label>Summary <span className="starc" >*</span></label>
//                             <textarea id="applyinputletter" type="text" className="applyinnerinput aptarea" required onChange={e => { setjupladdata(ps => { return { ...ps, summary: e.target.value } }) }} />
//                         </div>
//                         <div className="applyname">
//                             <label>Skills & Qualifications<span className="starc" >*</span></label>
//                             <textarea id="applyinputletter" type="text" className="applyinnerinput aptarea" required onChange={e => { setjupladdata(ps => { return { ...ps, skills: e.target.value } }) }} />
//                         </div>
//                         <div className="applysubmitin">
//                             <input className="applysubmitbtn regcompanybtnres" type='submit' value="Upload" />
//                         </div>
//                     </form>
//                     <p style={{ textAlign: "center", cursor: "pointer" }} onClick={logout}>Log Out</p>
//                 </div>
//     </div>
//   )
// }

// export default JobUploadPage

import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";
import { Country, State, City } from 'country-state-city';
// import SelectSearch from 'react-select-search';
// import "react-select-search/style.css";
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown';




const CreateJob = () => {

  const [tdata, settdata] = useState([]);
  const [updel, setupdel] = useState();
  const [cjobs, setcjobs] = useState([]);
  const ref = useRef()

  const datain = JSON.parse(sessionStorage.getItem('datain'))

  const cdata = useState({
    cid: datain?.cid,
    cname: datain?.cname
  })

  const getcjobs = () => {
    axios.post('/getcompanyjobs', { cdata: cdata })
      .then((response) => {
        setcjobs(response.data)
        //    console.log(cjobs)
      }, (err) => {
        console.log(err)
      })
  }


  const jt = [
    { type: "Full-Time OnSite" },
    { type: "Part-Time OnSite" },
    { type: "Full-Time Remote" },
    { type: "Part-Time Remote" },
    { type: "Contract" }
  ]

  const [data, setdata] = useState({
    title: '',
    summary: '',
    skills: '',
    type: '',
    location: [],
    category: '',
    cid: datain?.cid,
    cname: datain?.cname
  });

  const [csc, setcsc] = useState({
    country: null,
    state: [],
    city: []
  });

  const [cscnames, setcscnames] = useState({
    country: '',
    state: '',
    city: ''
  });

  const oncountrychange = (e) => {
    if (e.target.value !== "") {
      if (e.target.value === "Europe") {
        setcscnames((ps) => {
          return { ...ps, country: e.target.value }
        })
      } else {
        setcsc((ps) => {
          return { ...ps, country: e.target.value, state: State.getStatesOfCountry(JSON.parse(e.target.value).isoCode) }
        })
        // console.log(csc.state)
        setcscnames((ps) => {
          return { ...ps, country: JSON.parse(e.target.value).name }
        })
      }
    }
  }

  const onstatechange = (e) => {
    if (e.target.value !== "") {
      setcsc((ps) => {
        return { ...ps, city: City.getCitiesOfState(JSON.parse(e.target.value).countryCode, JSON.parse(e.target.value).isoCode) }
      })
      setcscnames((ps) => {
        return { ...ps, state: JSON.parse(e.target.value).name }
      })
    }
  }

  const oncitychange = (e) => {
    if (e.target.value !== "") {
      setcscnames((ps) => {
        return { ...ps, city: JSON.parse(e.target.value).name }
      })
    }
  }

  const addlocation = () => {
    if (document.getElementById("validationDefault03").value == "") {
      alert("Country is required")
    } else {
      setdata(ps => { return { ...ps, location: [...data.location, cscnames] } })
      // console.log(data.Location)
      document.getElementById("validationDefault03").value = ""
      document.getElementById("validationDefault04").value = ""
      document.getElementById("validationDefault05").value = ""
      setcsc({
        country: null,
        state: [],
        city: []
      })
      setcscnames({
        country: '',
        state: '',
        city: ''
      })
    }
  }

  const removelocation = (item) => {
    setdata(ps => { return { ...ps, location: data.location.filter(it => it != item) } })
  }



  const user = JSON.parse(sessionStorage.getItem('user'))

  const fetchtdata = () => {
    axios.post('/getjobs', { user: user })
      .then((response) => {
        if (response.data.status == 200) {
          //  console.log(response.data.data)
          settdata(response.data.data)
        }
      }, (error) => {

      })
  }

  const setvalues = (v) => {
    document.getElementById('savebtn').disabled = v
    document.getElementById('updatebtn').disabled = v
    if (v) {
      document.getElementById('spinner').style.display = 'block'
    } else {
      document.getElementById('spinner').style.display = 'none'
    }
  }

  const submitform = (e) => {
    e.preventDefault()
    // console.log(data);
    if (data.location.length == 0) {
      alert("Please add atleast One Location")
    } else {
      setvalues(true)
      // console.log(data)
      axios.post('/uploadthejob', { jupladdata: data })
        .then((reponse) => {
          if (reponse.data.status == 200) {
            alert('success')
            // showmsg(msgs.smsg)
            setdata({
              title: '',
              summary: '',
              skills: '',
              type: '',
              location: [],
              category: '',cname:datain.cname,cid:datain.cid
            })
            ref.current.resetSelectedValues();
            document.getElementById('form').reset()
            getcjobs()
          } else if (reponse.data.status == 303) {
            alert('Login ID Already Exists')
          } else {
            alert('Failed due to unknown reasons')
          }
          setvalues(false)
        })
    }
  }

  const clearclick = () => {
    document.getElementById('form').reset()
    data.Location = []
    ref.current.resetSelectedValues();
    // console.log(data)
  }


  const rowclick = (item) => {
    setdata(item)
    setdata(ps => { return { ...ps, location: JSON.parse(item.location) } })
    document.getElementById('validationDefault01').value = item.title
    document.getElementById('validationDefault06').value = item.summary
    document.getElementById('validationDefault08').value = item.skills
    document.getElementById('validationDefault02').value = item.category        
    document.getElementById('updatebtn').style.display = 'inline-block'
    document.getElementById('savebtn').style.display = 'none'
    document.getElementById('newbtn').style.display = 'none'
    document.getElementById('cancelbtn').style.display = 'inline-block'

    document.documentElement.scrollTop = 0;
  }

  const cancelclick = () => {
    setdata({ title: '', summary: '', skills: '', type: '', location: [], category:'',cname:datain.cname,cid:datain.cid })
    document.getElementById('form').reset()
    document.getElementById('updatebtn').style.display = 'none'
    document.getElementById('savebtn').style.display = 'block'
    document.getElementById('newbtn').style.display = 'block'
    document.getElementById('cancelbtn').style.display = 'none'
  }

  const updaterecord = () => {
    setvalues(true)
    axios.post('/editcjob', { edata: data })
      .then((response) => {
        if (response.data.status == 200) {
          document.getElementById('form').reset()
          setdata({ title: '', summary: '', skills: '', type: '', location: [], category: "",cname:datain.cname,cid:datain.cid })
          getcjobs()
          cancelclick()
          ref.current.resetSelectedValues()
        } else {
          alert("error")
        }
        setvalues(false)
      }, (err) => {
        alert("lower error")
        setvalues(false)

      })
  }

  const clientchange = (e) => {
    if (e.target.value !== "") {
      setdata(ps => { return { ...ps, Client: JSON.parse(e.target.value) } })
    }
  }

  useEffect(() => {
    getcjobs()
  }, [])


  const typeselect = (item) => {
    // console.log(JSON.stringify(item));
    setdata(ps => { return { ...ps, type: JSON.stringify(item) } })
  }

  const typeremove = (item) => {
    // console.log(JSON.stringify(item));
    setdata(ps => { return { ...ps, type: JSON.stringify(item) } })
  }


  return (
    <div className="mx-auto my-5 container-fluid">
      <form className="row g-3" onSubmit={submitform} id="form">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Title</label>
          <input type="text" className="form-control" id="validationDefault01" required onChange={e => { setdata(ps => { return { ...ps, title: e.target.value } }) }} />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Category</label>
          <input type="text" className="form-control" id="validationDefault02" required onChange={e => { setdata(ps => { return { ...ps, category: e.target.value } }) }} />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Job Type</label>
          <Multiselect ref={ref} options={jt} displayValue="type" id="" onSelect={typeselect} onRemove={typeremove} />
        </div>
        <div className="col-12" style={{ display: 'flex', flexWrap: 'wrap' }}>{
          Array.isArray(data.location) && data.location.length > 0 ? (
            data.location.map((item, index) => (
              <p className="btn btn-outline-success mx-1" key={index} >{item.city + "-" + item.state + "-" + item.country} <span onClick={() => { removelocation(item) }} className="btn btn-danger" style={{ marginLeft: 20 }} >x</span></p>
            ))
          )
            :
            (
              <></>
            )
        }</div>
        <div className="col-md-4">
          <label htmlFor="validationDefault04" className="form-label">Country</label>
          <select className="form-select" id="validationDefault03" onChange={(e) => { oncountrychange(e) }}>
            <option value="">Select Country ...</option>
            <option value="Europe">Europe</option>
            {
              Country.getAllCountries().map((item, index) => (
                <option value={JSON.stringify(item)} key={index}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault04" className="form-label">State</label>
          <select className="form-select" id="validationDefault04" onChange={(e) => { onstatechange(e) }}>
            <option value="">Select State ...</option>
            {
              csc.state.map((item, index) => (
                <option value={JSON.stringify(item)} key={index}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="validationDefault04" className="form-label">City</label>
          <select className="form-select" id="validationDefault05" onChange={(e) => { oncitychange(e) }}>
            <option value="">Select City ...</option>
            {
              csc.city.map((item, index) => (
                <option value={JSON.stringify(item)} key={index}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="col-md-1">
          <p className="btn btn-outline-success" onClick={addlocation}>Add Location</p>
        </div>
        <div className="col-12 d-flex">
          <div className="col-md-5 m-auto">
            <label htmlFor="validationDefault04" className="form-label">Summary</label>
            <textarea className="form-control" id="validationDefault06" rows="3" required onChange={e => { setdata(ps => { return { ...ps, summary: e.target.value } }) }}></textarea>
          </div>
          <div className="col-md-5 m-auto">
            <label htmlFor="validationDefault04" className="form-label">Requirements</label>
            <textarea className="form-control" id="validationDefault08" rows="3" required onChange={e => { setdata(ps => { return { ...ps, skills: e.target.value } }) }}></textarea>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-success" id="savebtn" type="submit">Add Job</button>
          <span id="spinner" style={{ display: 'none' }}><span className="spinner-border spinner-border-sm text-success mx-3" role="status" aria-hidden="true"></span><span className="text-success">Saving...</span></span>
        </div>
      </form>
      <div className="col-12 mt-3">
        <button className="btn btn-secondary" id="newbtn" onClick={clearclick}>Clear</button>
        <button className="btn btn-outline-success ms-3" id="updatebtn" style={{ display: 'none' }} onClick={updaterecord}>Update</button>
        <button className="btn btn-outline-secondary ms-3" id="cancelbtn" style={{ display: 'none' }} onClick={cancelclick}>Cancel</button>
      </div>
      <div className="mt-5">
        <p className="h3 w-100 text-center">Jobs</p>
        <p className="w-100 text-center">Click to update Record</p>
        <div className="table-responsive my-5 rounded-3" style={{ height: '300px', overflow: 'auto', scrollbarWidth: 'none' }}>
          <table className="table table-secondary table-hover" >
            <thead className="" style={{ position: 'sticky', top: 0 }}>
              <tr>
                <th>Sr</th>
                <th>Title</th>
                <th>Company</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              {cjobs.map((item, index) => (
                <tr key={index} onClick={() => { rowclick(item) }}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.cname}</td>
                  {/* <td>{item.status = "active" ? "Active" : "Close"}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>

  )
}

export default CreateJob










