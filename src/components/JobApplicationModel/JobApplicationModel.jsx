import React, { useState } from 'react';
import './JobApplication.css';
import 'simplebar-react/dist/simplebar.min.css';
import FormData from 'form-data';
import fs from 'fs';
const JobApplicationModel = ({ job, onClose }) => {
    const jobTitle = job.title.replaceAll(" ", "_");
    const [formCData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        jobTitle: jobTitle,
        resume: null,
    });

    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Resume file validation
    const validateResume = (file) => {
        if (!file) return false;
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        return allowedTypes.includes(file.type);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formCData,
            [name]: name === 'resume' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Form validation checks
        if (!formCData.name || !formCData.email || !formCData.experience || !formCData.resume) {
            setError('All fields are required!');
            return;
        }

        if (!validateEmail(formCData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!validateResume(formCData.resume)) {
            setError('Please upload a valid resume (PDF, DOC, DOCX).');
            return;
        }

        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://insurvey.sendmsg.in/mobileicsmobile/AddCareer.php',
                headers: { 
                },
                data : formCData
              };
              
              axios.request(config)
              .then((response) => {
                // console.log(JSON.stringify(response.data));
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

            // const response = await fetch('https://insurvey.sendmsg.in/mobileicsmobile/AddCareer.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: JSON.stringify(formCData),
            // });
            // if (response.ok) {
            //     const data = await response.json(); // assuming your PHP script returns JSON
            //     var responsestatus=data.status;
            //     var responsemessage=data.response;
            //     if(responsestatus==true)
            //     {
            //         alert('Resume Recieved Successfully');
            //     }
            //     else
            //     {
            //         alert(responsemessage);
            //     }
            //     setFormData({
            //         name: '',
            //         email: '',
            //         experience: '',
            //         resume: '',
            //     });
            // } else {
            //     alert('Error submitting form');
            // }
        } catch (error) {
            console.error('Errorrrrrr:', error);
            alert('Error submitting form');
        }

        // console.log('Form submitted:', formCData);
        // alert('Application submitted successfully!');
        // onClose();
    };

    

    return (
        <div className="modal">
            <div className="modal-wrapper">
                <div className="heading-job-wrapper">
                    <h2>{job.title}</h2>
                    <span className="close" onClick={onClose}>&times;</span>
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
                            name="name"
                            placeholder="Your Name"
                            value={formCData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="hidden"
                            name='role'
                            value={formCData.jobTitle}
                            required
                        />
                        <input
                            type="hidden"
                            name='role'
                            value={jobTitle}
                            required
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formCData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Years of Experience:</label>
                        <select
                            name="experience"
                            value={formCData.experience}
                            onChange={handleChange}
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
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
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
