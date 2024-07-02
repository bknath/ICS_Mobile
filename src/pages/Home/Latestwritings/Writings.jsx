import React from 'react'
import './Writings.css'
import { assets } from '../../../assets/assets'
const Writings = () => {
  return (
    <div className="latest-writings">
      <h2>Latest writings</h2>
      <div className="tabs">
        <button className="tab">SMS gateways</button>
        <button className="tab">Email assistance</button>
        <button className="tab">Engagement programs</button>
        <button className="tab active">WhatsApp APIs</button>
      </div>
      <div className="articles">
        <div className="article">
          <img src={assets.writingimg} alt="Description 1" />
          <h3>Lorem ipsum dolor sit amet consectetur. Quis sollicitud.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div className="meta">22 June, 2021 | 5 Min Read</div>
        </div>
        <div className="article">
          <img src={assets.writingimg} alt="Description 2" />
          <h3>Lorem ipsum dolor sit amet consectetur. Quis sollicitud.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div className="meta">22 June, 2021 | 5 Min Read</div>
        </div>
        <div className="article">
          <img src={assets.writingimg} alt="Description 3" />
          <h3>Lorem ipsum dolor sit amet consectetur. Quis sollicitud.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div className="meta">22 June, 2021 | 5 Min Read</div>
        </div>
      </div>
    </div>
  )
}

export default Writings
