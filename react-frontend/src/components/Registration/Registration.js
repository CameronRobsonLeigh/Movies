import React, { useState } from 'react';
import './Registration.css';
import axios from 'axios';

function Registration() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [formData, setFormData] = useState({
        id: 0,
        email: '',
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormData({
            id: 0,
            email: '',
            username: '',
            password: '',
        });

        try {
            const response = await axios.post('http://localhost:8001/adduser', formData);
            // Handle the response, e.g., show a success message or update UI
            console.log('Registration Successful:', response.data);
        } catch (error) {
            console.error('Error With Registration service:', error);
        }

        // Hide the registration and login forms
        setShowRegistrationForm(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    />

            <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
