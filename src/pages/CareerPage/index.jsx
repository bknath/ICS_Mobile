import React, { useEffect } from "react";
import './Carrer.css'
import Carrer from "./Carrer";
import Faqsection from "../../components/Faqsection/Faqsection";
const CareerPage = () => {
    
    return (
        <div>
            <Carrer />
            <Faqsection />
            <div className="wrapper-joinus">
                <div className="joinpartenerbox">
                    <div className="joinus-content">
                        <h2>Join Us As A Partner</h2>
                        <p>Join ICS, the industry-leading CPaaS communication partner, and experience the transformative <br /> power of cooperation. Come work with us as partners and enhance consumer engagement.</p>
                        <button onClick={()=> window.location.href = 'https://icsmobile.in/demomodule'} className="joinus-bt">Join us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CareerPage;