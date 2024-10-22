import React, { useEffect, useState } from 'react'
import './Carrer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import JobApplicationModel from '../../components/JobApplicationModel/JobApplicationModel'
const features13 = [
    {
        icon: assets.globalaudienceIcon,
        title: 'Unleash Your Inner Child',
        description: 'Who said work has to be boring? At ICS, we love to go beyond the box and celebrate originality. Embrace a realm of magic and bid farewell to stuffy cubicles. After all, the finest ideas emerge at times of absolute joy.',
        link: '_',
        linkText: 'Learn More'
    },
    {
        icon: assets.contactuschaticon2,
        title: 'Opportunities Await',
        description: 'Are you prepared to advance in your career? Come be a part of ICS and open doors to endless possibilities. We continuously seek enthusiastic, impact-ready people, whether technical experts or creative geniuses. Experience something truly remarkable by joining us.',
        link: '_',
        linkText: 'Learn More'
    }
]
const features14 = [
    {
        icon: assets.globalaudienceIcon,
        title: 'Ignite Your Brilliance',
        description: "Working at ICS is only part of what it's all about. As a company, we believe in allowing our employees to dream big, question established norms, and implement their unique ideas. Your suggestions are valued and appreciated here.",
        link: '_',
        linkText: 'Learn More'
    },
    {
        icon: assets.contactuschaticon2,
        title: 'Diversity And Inclusion',
        description: 'We are proud of the varied and inclusive work environment that we have created. We value individuality and diversity here at ICS. Come be a part of our team where your opinion matters and where your voice is heard.',
        link: '_',
        linkText: 'Learn More'
    }
]
const jobsData = [
    {
        id: 1,
        title: 'Account Manager',
        description: 'Seeking an experienced Account Manager to drive client success, build relationships, identify growth opportunities, and collaborate with teams. Proven track record and customer-centric mindset required.',
        date: '2024-09-22',
        requirements: "<p>This is the requirements</p> <ul><li>Bachelor’s degree in Business, Marketing, or a related field.<li><ul>"
    },
    {
        id: 2,
        title: 'Sales Executive',
        description: 'Seeking a results-driven Sales Executive to develop strategies, pursue new business, and build client relationships. Strong sales background and negotiation skills required.',
        date: '2024-09-20',
        requirements: "<p>This is the requirements</p> <ul><li>Bachelor’s degree in Business, Marketing, or a related field.<li><ul>"
    },
    {
        id: 3,
        title: 'DevOps Engineer',
        description: 'Seeking a DevOps Engineer to streamline development, improve deployment pipelines, ensure service reliability, and collaborate with teams to optimize infrastructure and enhance performance.',
        date: '2024-09-21',
        requirements: "<p>This is the requirements</p> <ul><li>Bachelor’s degree in Business, Marketing, or a related field.<li><ul>"
    }
];
const Carrer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [filter, setFilter] = useState('newest');
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sortJobs = (jobs, filter) => {
        return jobs.sort((a, b) => {
            return filter === 'newest'
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });
    };
    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="career-wrap-content">
                <div className="hero-section-9">
                    <div className="content-career">
                        <h1>Where Innovation Meets A2P Communication Excellence</h1>
                        <p>Here at ICS, we think the best way to solve problems is to take them head-on and develop innovative ideas that change the game</p>
                        <div className="buttons">
                            {/* <a href="contact-us" className="contact-us">Contact us</a> */}
                            <Link to="/contact-us" className='contact-us'>Contact us</Link>
                        </div>
                    </div>
                    <div className="career-image">
                        <div className="hero-product-image">
                            <img src={assets.careercoverLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-section-10">
                <div className="featured-jobs-container">
                    <div className="header-filter-row">
                        <h2><span style={{ color: '#144494' }}>Featured </span><span style={{ color: '#B30000' }}>Jobs</span></h2>
                        <div className="filter-dropdown">
                            <label htmlFor="filter">Filter by: </label>
                            <select
                                id="filter"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                    </div>

                    <div className="job-list">
                        {sortJobs(jobsData, filter).map((job) => (
                            <div key={job.id} className="job-card">
                                <h3>{job.title}</h3>
                                <p>{job.description}</p>
                                <button onClick={() => openModal(job)}>More Details &rarr;</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="career-platform-section">
                <div className="header-content">
                    <button className='head-section-b3'>Join Us</button>
                    <h2>Join Us As An Employee</h2>
                    <p>Step right up to ICS, the heart of innovation. We do more than cultivate professions; we cultivate <br /> aspirations.</p>
                </div>
                <div className="feature11-wrap-container">
                    <div className="feature11-cards-container">
                        <div className="image-column-rcs">
                            <img src={assets.careerLogo2}
                                alt="whatsappAPIlogo2"

                            />
                        </div>
                        <div className="feature11-cards-column">
                            {features14.map((features14, index) => (
                                <div className="feature11-card" key={index}>
                                    <img src={features14.icon} alt={features14.title} className='feature11-icon' />
                                    <div className="feature11-card-content">
                                        <h3>{features14.title}</h3>
                                        <p>{features14.description}</p>
                                        {/* <a href={features14.link} className='read-more-2'>{features14.linkText} &gt;</a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="feature11-wrap-container">
                    <div className="feature11-cards-container">
                        <div className="feature11-cards-column">
                            {features13.map((features13, index) => (
                                <div className="feature11-card" key={index}>
                                    <img src={features13.icon} alt={features13.title} className='feature11-icon' />
                                    <div className="feature11-card-content">
                                        <h3>{features13.title}</h3>
                                        <p>{features13.description}</p>
                                        {/* <a href={features13.link} className='read-more-2'>{features13.linkText} &gt;</a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="image-column-rcs">
                            <img src={assets.careerLogo3}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <button className='head-section-b3'>Hiring</button>
                    <h2>Our Hiring Process</h2>
                    <p>Step right up to ICS, the heart of innovation. We do more than cultivate professions; we cultivate <br /> aspirations.</p>
                </div>
                <div className="articles">
                    <div className="article1">
                        <img src={assets.Hiringlogo1} alt="Description 1" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Id in vitae ut porta.</p>
                    </div>
                    <div className="article1">
                        <img src={assets.Hiringlogo2} alt="Description 2" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Id in vitae ut porta.</p>
                    </div>
                    <div className="article1">
                        <img src={assets.Hiringlogo3} alt="Description 3" />
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Id in vitae ut porta.</p>
                    </div>
                </div>
            </div>
            {isModalOpen && <JobApplicationModel job={selectedJob} onClose={closeModal} />}
        </div>
    )
}

export default Carrer
