import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaComment, FaPeriscope, FaPhone } from 'react-icons/fa';
import './css/Contact.css'
import axios from "axios"   // npm install axios

const Contact = () => {

    const [contact, setcontact] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        msg: '',
    })


    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const subject = document.getElementById("subject")
    const msg = document.getElementById("msg")

    const getAction = (e) => {
        e.preventDefault()
        if (name.value.length == 0 || email.value.length == 0 || phone.value.length == 0 || subject.value.length == 0 || msg.value.length == 0) {
            alert("all fields are required")
        } else {
            axios.post('/addmsg', {
                scontact: contact,
            }).then((res) => {
                if (res.status == 200) {
                    alert("Thanks for Contacting Us.")
                }
                else{
                    alert("Failed to apply")
                }
            }, (err) => {
            })
        }
        document.getElementById('contactformits').reset()
    }



    return (
        <div>
            <div className="abouth drugupperjpg contbgposition" >
                <h1>Contact Us</h1>
            </div >
            <div className="cobe">
                <form id="contactformits" className="contactforminmaxwith">
                    <div className="flex" >
                        <div className="lfl" >
                            <div className="inputcon" >
                                <h4>Name</h4>
                                <input placeholder="NAME" type='text' id="name" required onChange={e => { setcontact(ps => { return { ...ps, name: e.target.value } }) }} />
                            </div>
                            <div className="inputcon" >
                                <h4>Email</h4>
                                <input placeholder="EMAIL" type='text' id="email" required onChange={e => { setcontact(ps => { return { ...ps, email: e.target.value } }) }} />
                            </div>
                            <div className="inputcon" >
                                <h4>Your Phone</h4>
                                <input placeholder="PHONE" type='text' id="phone" required onChange={e => { setcontact(ps => { return { ...ps, phone: e.target.value } }) }} />
                            </div>
                            <div className="inputcon" >
                                <h4>Subject</h4>
                                <input placeholder="SUBJECT" type='text' id="subject" required onChange={e => { setcontact(ps => { return { ...ps, subject: e.target.value } }) }} />
                            </div>
                        </div>
                        <div className="rfl" >
                            <div className="ricon" >
                                <a href="#" className="rline">
                                    <div className="iconstyle" ><FaComment color="white" /></div>
                                    <div className="sideicon">info@acdlimited.com</div>
                                </a>
                                <a href="#" className="rline">
                                    <div className="iconstyle" ><FaPeriscope color="white" /></div>
                                    <div className="sideicon">	1 Broadway, Kendall Square Cambridge, MA 02142 USA</div>
                                </a>
                                <a href="#" className="rline">
                                    <div className="iconstyle" ><FaPeriscope color="white" /></div>
                                    <div className="sideicon">	Badgers Wood, Heath Ride, Wokingham UK</div>
                                </a>
                                <a href="#" className="rline">
                                    <div className="iconstyle" ><FaPhone color="white" /></div>
                                    <div className="sideicon">	+1 617 386 3979</div>
                                </a>


                            </div>
                        </div>
                    </div>
                    <div className="inputcon" >
                        <h4>Your Message</h4>
                        <textarea placeholder="YOUR MESSAGE" className="textarea" id="msg" required onChange={e => { setcontact(ps => { return { ...ps, msg: e.target.value } }) }} />
                    </div>
                    <div className="actioncon"><input type="submit" value="GET ACTION" onClick={e => getAction(e)} className="gabtn" /></div>
                </form>
            </div>
            <div className="cmap" >
                <iframe src="https://www.google.com/maps?q=1%20Broadway%0ACambridge%2C%20MA%2002142%0AUSA&output=embed&hl=en&z=14" frameBorder="0" width="100%" height="500px" ></iframe>
            </div>
        </div>

    )
}
export default Contact;