import React, { useState } from 'react'
import './Product.css'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
const Product = () => {
    const { ref: sectionref9, inView: imageInView9 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [activeMenu, setActiveMenu] = useState("SMS Gateways");
    const renderContent = () => {
        switch (activeMenu) {
            case 'SMS Gateways':
                return (
                    <div className="product-content" ref={sectionref9}>
                        <div className="product-description">
                            <h2>SMS Gateways</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" className={`image-slide-up ${imageInView9 ? 'visible' : ''}`} />
                        </div>
                    </div>
                );
            case 'Whatsapp':
                return (
                    <div className="product-content" >
                        <div className="product-description">
                            <h2>Whatsapp</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            {/* <a href="#">Learn More</a> */}
                            <Link to="/whatsapp">Learn More</Link>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
                        </div>
                    </div>
                );
            case 'Gamification':
                return (
                    <div className="product-content">
                        <div className="product-description">
                            <h2>Gamification</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
                        </div>
                    </div>
                );
            case 'RCS':
                return (
                    <div className="product-content">
                        <div className="product-description">
                            <h2>RCS</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
                        </div>
                    </div>
                );
            case 'Chat Bots':
                return (
                    <div className="product-content">
                        <div className="product-description">
                            <h2>Chat Bots</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            {/* <a href="#">Learn More</a> */}
                            <Link to='/chatbot'>Learn More</Link>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
                        </div>
                    </div>
                );
            case 'Solution':
                return (
                    <div className="product-content">
                        <div className="product-description">
                            <h2>Solution</h2>
                            <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="product-image">
                            <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }
    return (
        <section className="product-section">
            <div className="header-content">
                <h2>Explore All Products, Unlock Possibilities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <nav className="product-nav">
                <div className="product-nav-line"></div>
                {["SMS Gateways", "Whatsapp", "Gamification", "RCS", "Chat Bots", "Solution"].map((item) => (
                    <a
                        key={item}
                        onClick={() => setActiveMenu(item)}
                        className={activeMenu === item ? "active" : ""}
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <div className="wrap-product-content">
                <img src={assets.productvectorart} className="productvectorart1" alt="" />
                <img src={assets.productvectorart2} className='productvectorart2' alt="" />
                {renderContent()}
            </div>
        </section>

        // <section className="product-section">
        //     <div className="header-content">
        //         <h2>Explore All Products, Unlock Possibilities</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        //     </div>
        //     <nav className="product-nav">
        //         <a onClick={() => setMenu("SMS Gateways")} className={menu === "SMS Gateways" ? "active" : ""}>SMS Gateways</a>
        //         <a onClick={() => setMenu("Whatsapp")} className={menu === "Whatsapp" ? "active" : ""}>Whatsapp</a>
        //         <a onClick={() => setMenu("Gamification")} className={menu === "Gamification" ? "active" : ""}>Gamification</a>
        //         <a onClick={() => setMenu("RCS")} className={menu === "RCS" ? "active" : ""}>(RCS)</a>
        //         <a onClick={() => setMenu("Chat Bots")} className={menu === "Chat Bots" ? "active" : ""}>Chat Bots</a>
        //         <a onClick={() => setMenu("Solution")} className={menu === "Solution" ? "active" : ""}>Solution</a>
        //     </nav>
        //     <div className='wrap-product-content'>
        //         <div className="product-content">
        //             <div className="product-description">
        //                 <h2>SMS Gateways</h2>
        //                 <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
        //                 <a href="#">Learn More</a>
        //             </div>
        //             <div className="product-image">
        //                 <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
        //             </div>
        //         </div>
        //         <div style={{ display: 'none' }} className="product-content">
        //             <div className="product-description">
        //                 <h2>Whatsapp</h2>
        //                 <p>Amplify your voice using our advanced SMS Gateway. Deliver targeted, timely, and reliable messages for maximum impact.</p>
        //                 <a href="#">Learn More</a>
        //             </div>
        //             <div className="product-image">
        //                 <img src={assets.SMSmobile} alt="SMS Gateway Graphic" />
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Product
