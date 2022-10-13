import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Editjobpage.css'
import Jobcard from './Jobcard';

const EditJobPage = () => {
    const datain = JSON.parse(sessionStorage.getItem('datain'))

    const cdata = useState({
        cid: datain.cid,
        cname: datain.cname
        // cid: 23,
        // cname: "kamran"
    })

    const [editcdata, seteditcdata] = useState({
        jobid: null,
        title:'',
        category:'',
        type:'',
        location:'',
        summary:'',
        skills:'',
    });

    const [cjobs, setcjobs] = useState([]);

    const getcjobs = () => {
        axios.post('/getcompanyjobs', { cdata: cdata })
            .then((response) => {
                setcjobs(response.data)
                //    console.log(cjobs)
            }, (err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        // console.log(datain.cname)
        getcjobs()
    }, []);


    const deletecjob = (jobid) => {
        //    confirm("are you kamran")
        //    const result = window.confirm("klsdfj")
        if (window.confirm("do you want to delete")) {
            axios.post('/deletecjob', { id: jobid })
                .then((response) => {
                    if (response.data.status == 200) {
                        alert('deleted successfully')
                        getcjobs()
                    } else {
                        alert('fails')
                    }
                })
        } else {
        }
    }

    const showmodel = (item) => {
        document.getElementById("emodel").classList.add('activemodel')
        document.getElementById("title").value = item.title
        document.getElementById("category").value = item.category
        document.getElementById("type").value = item.type
        document.getElementById("location").value = item.location
        document.getElementById("summary").value = item.summary
        document.getElementById("skills").value = item.skills
        editcdata.jobid = item.jobid

    }

    const closemodel = () => {
        document.getElementById("emodel").classList.remove('activemodel')
    }

    const editcjobdata = () => {

        editcdata.title = document.getElementById("title").value
        editcdata.category = document.getElementById("category").value
        editcdata.type = document.getElementById("type").value
        editcdata.location = document.getElementById("location").value
        editcdata.summary = document.getElementById("summary").value
        editcdata.skills = document.getElementById("skills").value

        axios.post('/editcjob',{edata:editcdata})
         .then((response)=>{
             if(response.data.status==200){
                 alert("Edit Sucessfully")
                 document.getElementById("emodel").classList.remove('activemodel')
                 getcjobs()
             }
         })
    }

    return (
        <div>
            <div className='ejouter'>
                <div className='ejionner'>
                    {
                        cjobs.map((item, index) => (
                            <div className='cjcard' key={index}>
                                <div className='cjcardtitle'>
                                    {item.title}
                                </div>
                                <div className="cjcardedit" onClick={()=>{showmodel(item)}}>
                                    EDIT
                                </div>
                                <div className="cjcarddelete cjcardedit" onClick={() => { deletecjob(item.jobid) }}>
                                    DELETE
                                </div>
                                <div className='cjcardlocation'>
                                    {item.location}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div id='emodel' className='model' >
                <div className="modelinner">
                    <h3>Edit Jobs</h3>
                    <label htmlFor="name">Title: </label>
                    <input type="text" id="title" />
                    <label htmlFor="father">Category: </label>
                    <input type="text" id="category" />
                    <label>Type: </label>
                    <input type="text" id="type" />
                    <label>Location: </label>
                    <input type="text" id="location" />
                    <label>Summary: </label>
                    <textarea name="info" id="summary" cols="30" rows="10" ></textarea>
                    <label>Skills: </label>
                    <textarea name="info" id="skills" cols="30" rows="10" ></textarea>
                    <button className="modelbtn" id="modeleditbtn" onClick={() => { editcjobdata() }}>Edit</button>
                    <span className="modelclose" onClick={closemodel}>X</span>
                </div>
            </div>

        </div>
    )
}

export default EditJobPage