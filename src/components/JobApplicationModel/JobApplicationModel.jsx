import React, { useState } from 'react';
import './JobApplication.css';
import 'simplebar-react/dist/simplebar.min.css';

const JobApplicationModel = ({ job, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [resume, setResume] = useState(null);
    // const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Resume file validation
    const validateResume = (file) => {
        if (!file) return false;
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        return allowedTypes.includes(file.type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form validation checks
        if (!name || !email || !experience || !resume) {
            setError('All fields are required!');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!validateResume(resume)) {
            setError('Please upload a valid resume (PDF, DOC, DOCX).');
            return;
        }

        console.log('Form submitted:', { name, email, experience, resume });
        alert('Application submitted successfully!');
        onClose();
    };

    const str = job.title;
    const jobTitle = str.replaceAll(" ", "_");

    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="heading-job-wrapper">
                    <h2>{job.title}</h2><span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-content">
                    <p>{job.description}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: job.requirements }}
                    />
                    <h3>Apply Now</h3>
                    <form className="application-form" onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="hidden"
                            name='role'
                            value='{jobTitle}'
                            required
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Years of Experience:</label>
                        <select
                            name='yearofExp'
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                        >
                            <option value="">Select Years of Experience</option>
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1} {i + 1 === 1 ? 'year' : 'years'}
                                </option>
                            ))}
                        </select>

                        <label>Upload Resume:</label>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setResume(e.target.files[0])}
                            required
                        />

                        <button type="submit">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationModel;
