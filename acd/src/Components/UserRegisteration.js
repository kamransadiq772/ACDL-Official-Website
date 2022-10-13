import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const UserRegisteration = () => {


    const [userlogin, setuserlogin] = useState({
        useremail: '',
        userpass: ''
    });

    const loginuser = (e) => {
        e.preventDefault()

        axios.post('/userlogin', { userlogin: userlogin })
            .then((res) => {

                // console.log(res.data.datain[0])

                if (res.data.status == 200) {
                    const sessiondata = JSON.stringify(res.data.datain[0])
                    sessionStorage.setItem('userdata', sessiondata)
                    alert("seccess login")
                    // console.log(sessionStorage.getItem('userdata'))
                    document.getElementById('cloginform').reset()
                }else{
                    alert("Invalid Credentials")
                }
            }, (err) => {
                    alert("Unknow error")
            })
    }


    return (
        <div>
            <div className="abouth drugupperjpg upperheaderindrug" >
                <h1>LogIn</h1>
            </div>
            <div className="companyouter">

                <div className="companylonin companyreg">
                    <div className="applyinnerrightinner" >
                        <h2>LOG IN</h2>
                        <p>Entre data provided by ACD email services</p>
                        <form className="applyforum" id="cloginform" onSubmit={loginuser}>
                            <div className="applyname">
                                <label>Email <span className="starc" >*</span></label>
                                <input type="email" className="applyinnerinput" required onChange={e => { setuserlogin(ps => { return { ...ps, useremail: e.target.value } }) }} />
                            </div>
                            <div className="applyname">
                                <label>Password <span className="starc" >*</span></label>
                                <input type="password" className="applyinnerinput" required onChange={e => { setuserlogin(ps => { return { ...ps, userpass: e.target.value } }) }} />
                            </div>
                            <div className="applysubmitin">
                                <input type='submit' value='SIGN IN' className="applysubmitbtn regcompanybtnres" />
                            </div>
                        </form>
                        <p>Create An Account instead. <Link to="/registertheuser" >SIGN UP</Link></p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default UserRegisteration