import React, { useState } from 'react';
import './Header.css';
import axios from 'axios';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

function Header() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleRegisterClick = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
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
                            {showRegistrationForm && <Registration/>}
                            {showLoginForm && <Login/>}                                              
                    </div>
                </div>
            ) : null}
        </header>
    );
}

export default Header;