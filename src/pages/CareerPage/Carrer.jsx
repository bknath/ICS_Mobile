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
        requirements: "<p><strong>Account Manager Requirements:</strong></p> <ul><li>Bachelor’s degree in Business, Marketing, or a related field.</li><li>3–5 years of experience in account management or client relations.</li><li>Proven track record of managing multiple client accounts successfully.</li><li>Exceptional communication and interpersonal skills.</li><li>Strong problem-solving abilities and a customer-centric mindset.</li><ul>"
    },
    {
        id: 2,
        title: 'Sales Executive',
        description: 'Seeking a dynamic Sales Executive to create strategies, pursue new business opportunities, and build client relationships. Strong sales experience, excellent communication are essential for success in this role.',
        date: '2024-09-20',
        requirements: "<p><strong>Sales Executive Requirements:</strong></p><ul><li>Bachelor’s degree in Business, Sales, or a related field.</li><li>2–4 years of experience in sales or business development, preferably in a service-oriented industry.</li><li>Demonstrated success in meeting or exceeding sales targets.</li><li>Excellent negotiation, presentation, and closing skills.</li><li>Strong understanding of sales strategies and market trends.</li><li>Ability to build and maintain relationships with potential clients.</li><li>Self-motivated with a results-driven approach.</li><ul>"
    },
    {
        id: 3,
        title: 'DevOps Engineer',
        description: 'Seeking a DevOps Engineer to streamline development, improve deployment pipelines, ensure service reliability, and collaborate with teams to optimize infrastructure and enhance performance.',
        date: '2024-09-21',
        requirements: "<p><strong>DevOps Engineer Requirements:</strong></p><ul><li>Bachelor’s degree in Computer Science, Engineering, or a related field.</li><li>3–5 years of experience in a DevOps role or related positions.</li><li>Strong knowledge of CI/CD pipelines and automation tools (e.g., Jenkins, GitLab CI).</li><li>Experience with cloud services (e.g., AWS, Azure, GCP) and containerization (e.g., Docker, Kubernetes).</li><li>Proficiency in scripting languages (e.g., Python, Bash) and configuration management tools (e.g., Ansible, Chef).</li><li>Solid understanding of system architecture, network security, and infrastructure management.</li><li>Excellent collaboration and communication skills, with a focus on teamwork.</li><ul>"
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
                                <button onClick={() => openModal(job)}>More Details <span><img src={assets.arrowUpRight} alt="" /></span></button>
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
