import React from 'react';
import './Header.css';

function Header() {
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
                <a href="#register" className="navbar__link">
                    Register
                </a>
                <a href="#login" className="navbar__link">
                    Login
                </a>
            </div>
        </header>
    );
}

export default Header;
