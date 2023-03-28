import React from "react";
import { Link } from "react-router-dom";
import '../styles/Topbar.scss'

function Topbar() {
    return (
        <>
            <div className="div-title">
                <span className="dot"></span>
                <a href='/' className="header-name" style={{ display: 'inline', paddingLeft: '0.75rem', marginTop: '5px' }}>Harish</a>
                <p style={{ display: 'inline', paddingLeft: '0.5rem' }}>Software Engineer</p>
                <div className="div-links">
                    <Link to="/resume" className="links-resume">Resume</Link>
                    <Link to="/skills" className="links-achievements">Skills</Link>
                    <Link to="/contact" className="links-contact">Contact</Link>
                </div>
            </div>
        </>
    );
}

export default Topbar;