import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

export default function Navbar() {
    return (
        <div>
            <nav className='navbar2'>
                <div className='nav-left'>
                    <img src="https://psr.edu.in/wp-content/themes/psr/favicon.png" alt="Logo" className="logo-img" />
                    <div className="college-info">
                        <p className='psr'>PSR ENGINEERING COLLEGE</p>
                        <p className='aicte'>Approved by AICTE & Affiliated to Anna University Chennai</p>
                    </div>
                     <div className='nav-right'>
                    <img src="https://psr.edu.in/wp-content/uploads/icrise/images/yellow-logo.png" alt="Logo" className="logo-img2" /></div>
                    
                </div>
                <ul className="nav-links">
                    <li><NavLink to='/' className='nav-link'>HOME</NavLink></li>
                  
                    <li><NavLink to='/Contact' className='nav-link'>CONTACT US</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    );
}
