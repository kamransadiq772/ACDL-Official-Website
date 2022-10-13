import React from 'react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Counter = () => {

    const [sctxt, setsctxt] = useState(0);
    const [scltxt, setscltxt] = useState(0);
    const [clientno, setclientno] = useState(0);


    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    var i = 0;
    var v = 0;
    var h = 0;

    const loop = () => {
        i++;
        v = v+(5000/35);
        h = h+(50/35)
        setsctxt(i)
        setscltxt(v)
        setclientno(h)
        setTimeout(() => {
            if (i < 35) {
                loop()
            }
        }, 30)
    }


    useEffect(() => {
        

    }, [inView]);

    useEffect(() => {
        if (inView) {
            loop()
        }

        return () => {
        };
    }, [inView]);


    return (
        <div className="com" id='main-container' ref={ref}>
            <div className="cominner">
                <h2 className="comhead" >We are a unique biotech service provider with years of experience</h2>
            </div>
            <div className="countries" >
                <div className="innercontent" >
                    <div className="number" >
                        <span id="kamran">{sctxt}</span>
                        <span>+</span>
                    </div>
                    <div className="contriesname">
                        Countries
                    </div>
                </div>
            </div>
            <div className="countries candidate" >
                <div className="innercontent" >
                    <div className="number wc"  >
                        <span>{Math.ceil(scltxt)}</span>
                        <span>+</span>
                    </div>
                    <div className="contriesname wc">
                        Candidate Pool
                    </div>
                </div>
            </div>
            <div className="countries cl" >
                <div className="innercontent" >
                    <div className="number" >
                        <span>{Math.floor(clientno)}</span>
                        <span>+</span>
                    </div>
                    <div className="contriesname">
                        Pharmaceutical Clients
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter