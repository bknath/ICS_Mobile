import React, { useState } from 'react';
import './JobApplication.css';

const JobApplicationModel = ({ job, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', {
            name,
            email,
            phone,
            resume,
            message,
        });

        alert('Application submitted successfully!');
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p>{job.requirements}</p>
                <h3>Apply Now</h3>
                <form className="application-form" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Phone:</label>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <label>Upload Resume:</label>
                    <input
                        type="file"
                        
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />

                    {/* <label>Why are you a good fit for this position?</label>
                    <textarea
                        placeholder="Answer briefly"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea> */}

                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModel;
