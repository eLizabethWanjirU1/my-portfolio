import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
</nav> 
);

export default Navbar;