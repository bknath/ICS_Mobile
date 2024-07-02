import React from 'react'
import './Customer.css'
import { assets } from '../../assets/assets'
import { useInView } from 'react-intersection-observer';
const features3 = [
  {
    icon: assets.promotionIcon,
    title: 'Tailored Promotions',
    description: 'Personalized promotions are crucial for attracting the interest...',
    link: '#'
  },
  {
    icon: assets.gamificationIcon,
    title: 'Gamification',
    description: "Leverage your customer's interactions into a captivating... ",
    link: '#'
  },
  {
    icon: assets.loyaltyIcon,
    title: 'Loyalty Rewards',
    description: 'Our loyalty reward programs contribute to the development...',
    link: '#'
  },
  {
    icon: assets.htmltemplateIcon,
    title: 'Custom HTML Email Templates',
    description: 'Leave a lasting impression with expertly designed custom HTML...',
    link: '#'
  },
  {
    icon: assets.flipbookIcon,
    title: 'Flipbook',
    description: 'Engage your audience with interactive flipbooks that bring...',
    link: '#'
  },
  {
    icon: assets.surveypagesIcon,
    title: 'Survey Page',
    description: 'Collect insightful information and customer feedback with the...',
    link: '#'
  }
];
const features4 = [
  {
    icon: assets.globalflexIcon,
    title: 'Connect Instantly, Anywhere',
    description: 'Integration with WhatsApp and Google RCS Messenger enables immediate, reliable support on global platforms.',
    link: '_',
    linkText: 'Learn More'
  },
  {
    icon: assets.variedrewardsIcon,
    title: 'Know Your Customer Better',
    description: 'Deep tech integration ensures personalized, informed interactions, transforming every chat into an opportunity to impress.',
    link: '#',
    linkText: 'Learn More'
  },
  {
    icon: assets.keyfeaturesIcon,
    title: 'Unified Integrations, Diverse Platforms',
    description: 'Synchronize chats across WhatsApp, Google RCS messenger and CRM systems to ensure consistent customer service.',
    link: '#',
    linkText: 'Learn More'
  },
  {
    icon: assets.engagingIcon,
    title: 'Engage with Precision and Empathy',
    description: 'Leverage Chatbots for real-time, interactive and relevant customer engagement.',
    link: '#',
    linkText: 'Learn More'
  },
  {
    icon: assets.brandalignmentIcon,
    title: 'Discover, Adapt, and Thrive',
    description: 'Utilize rich data from integrated chats for actionable insights, enhancing customer satisfaction and business growth.',
    link: '#',
    linkText: 'Learn More'
  },
  {
    icon: assets.diverseoptionsIcon,
    title: 'Discover, Adapt, and Thrive',
    description: 'Utilize rich data from integrated chats for actionable insights, enhancing customer satisfaction and business growth.',
    link: '#',
    linkText: 'Learn More'
  }
];
const Customer = () => {
  const { ref: sectionref3, inView: imageInView3} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  }) 
  return (
    <div>
      <div className="wrap-customer-content">
        <div className="hero-section-3">
          <div className="content-CustomerEngagement">
            <p>Customer Engagement Page</p>
            <h1>Engage, Thrive, And <br />Win With ICS <br />Engagement!</h1>
            <p className='CustomerEngagement-text'>At ICS, our main goal is to assist you in developing captivating experiences that connect with your target demographic and provide tangible outcomes.</p>
            <div className="buttons">
              <a href="contact-us" className="contact-us">Contact us</a>
            </div>
          </div>
          <div className="Customerrobot">
            <div className="hero-product-image">
              <img src={assets.CustomerEngagementlogo} alt="CustomerRobot" />
            </div>
          </div>
        </div>
      </div>

      <div className="customer-platform-section">
        <div className="customer-platform-header">
          <h2>Engagement Experiences We Provide</h2>
          <p>Our shared values keep us connected and guide us as one team.</p>
        </div>
        <div className="feature3-wrap-container">
          <div className="feature3-cards-container">
            {features3.map((features3, index) => (
              <div className="feature3-card" key={index}>
                <img src={features3.icon} alt={features3.title} className="feature3-icon" />
                <div className="feature3-card-content">
                  <h3>{features3.title}</h3>
                  <p>{features3.description}</p>
                  <a href={features3.link} className="read-more">Read More &gt;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="customer-platform-header">
          <h2>Unlock Your Brand's Potential With ICS Mobile</h2>
          <p>Engage more people with your brand and capture their attention with ICS. Pick ICS Mobile if you want:</p>
        </div>
        <div className="feature4-wrap-container" ref={sectionref3}>
          <div className="feature4-cards-container">
            <div className="feature4-cards-column">
              {features4.map((features4, index) => (
                <div className="feature4-card" key={index}>
                  <img src={features4.icon} alt={features4.title} className="feature4-icon" />
                  <div className="feature4-card-content">
                    <h3>{features4.title}</h3>
                    <p>{features4.description}</p>
                    <a href={features4.link} className="read-more-2">{features4.linkText} &gt;</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="image-column-ce">
              <img 
                src={assets.artBrandlogo} 
                alt="Robot" 
                className={`image-slide-up ${imageInView3 ? 'visible' : ''}`} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
