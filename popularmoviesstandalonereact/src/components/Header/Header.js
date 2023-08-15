import React, { useState } from 'react';
import './Header.css';
import axios from 'axios';

function Header() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formData, setFormData] = useState({
        id: 0,
        email: '',
        username: '',
        password: '',
    });

    const handleRegisterClick = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    };

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

        if (showRegistrationForm) {
            try {
                const response = await axios.post('https://localhost:44344/adduser', formData);
                // Handle the response, e.g., show a success message or update UI
                console.log('Registration Successful:', response.data);
            } catch (error) {
                console.error('Error With Registration service:', error);
            }
        } else {
            // Logic for handling login submission
        }

        console.log(showLoginForm);
        

        // Hide the registration and login forms
        setShowRegistrationForm(false);
        setShowLoginForm(false);
    };

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="Netflix Logo"
                />
            </div>
            <div className="navbar__links">
                <a href="#home" className="navbar__link active">
                    Home
                </a>
                <a href="#tv-shows" className="navbar__link">
                    TV Shows
                </a>
                <a href="#movies" className="navbar__link">
                    Movies
                </a>
                <a href="#latest" className="navbar__link">
                    Latest
                </a>
                <a href="#my-list" className="navbar__link">
                    My List
                </a>
            </div>
            <div className="navbar__auth">
                <a href="#register" className="navbar__link" onClick={handleRegisterClick}>
                    Register
                </a>
                <a href="#login" className="navbar__link" onClick={handleLoginClick}>
                    Login
                </a>
            </div>

            {showRegistrationForm || showLoginForm ? (
                <div className="form-container">
                    <button className="exit-button" onClick={() => { setShowRegistrationForm(false); setShowLoginForm(false); }}>X</button>
                    <div className="registration-form">
                        <h2>{showRegistrationForm ? 'Registration' : 'Login'}</h2>
                        <form onSubmit={handleSubmit}>
                            {showRegistrationForm && (
                                <>
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
                                </>
                            )}
                            {showLoginForm && (
                                <>
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
                                </>
                            )}
                           
                            <button type="submit">{showRegistrationForm ? 'Register' : 'Login'}</button>
                        </form>
                    </div>
                </div>
            ) : null}
        </header>
    );
}

export default Header;
