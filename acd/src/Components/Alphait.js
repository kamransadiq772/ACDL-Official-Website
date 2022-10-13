import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './css/Alpha.css'

const Alphait = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="itmain itlowerbg itminreshieght" >
            <div className="abouth bb itupperjpg" >
                <h1>Alpha IT Services</h1>
            </div >
            <div className="initm" >

                <div className="ititemscontainer">
                    <div className="ititem itmr" >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>Cloud Development</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                    Cloud-based solutions that drive businesses forward with flexibility, scalability, security and control.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr" >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>Digital Marketing</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                Whether it’s strategy, creative, digital, video or photography, we share a love of putting on a great show.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="ititem" >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>Sourcing & Recruitment</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                    Looking to hire the best talent for your organization but not sure where to turn? Need help finding the highly skilled personnel for your next project? Let us help you!
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="itinnnermsg" >
                        <h3>We believe in providing premium Services to help boost your business in this IT driven world</h3>
                    </div>
                    <div className="ititem itmr" >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>UI/UX</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                We engineer custom & intuitive user experience that is wrapped in an equally great design.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="ititem itmr" >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>Business Intelligence</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                The right information and tools can sharpen and accelerate the best decision making.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="ititem " >
                        <div className="iteminnerset">
                            <div className="ititemhead" >
                                <h4>Cyber Security</h4>
                            </div>
                            <div className="ititempara" >
                                <h5>
                                Our range of cyber security services are designed to safeguard critical assets, manage risk and find threats quickly. Protecting your business and providing peace of mind.
                                </h5>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )

}

export default Alphait;