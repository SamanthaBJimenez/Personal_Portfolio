import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div className='NavbarDiv'>
            <nav>
                <ul>
                    <li><NavLink exact to='/about' activeClassName={"selected"} >About</NavLink></li>
                    <li><NavLink exact to='/skills' activeClassName={"selected"} >Skills</NavLink></li>
                    <li><NavLink exact to='/projects' activeClassName={"selected"} >Projects</NavLink></li>
                    {/* <li><NavLink exact to='/resume' activeClassName={"selected"} >Resume</NavLink></li> */}
                    <li><NavLink exact to='/contact' activeClassName={"selected"} >Contact</NavLink></li>
                    <li style={{float: 'right'}}><NavLink exact to='/' activeClassName={"selected"}>LandingIMG</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;