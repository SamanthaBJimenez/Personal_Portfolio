import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div className='NavbarDiv'>
            <nav>
                <ul className='NavUl'>
                    <li className='NavLi'><NavLink exact to='/about' activeClassName={"selected"} >About</NavLink></li>
                    <li className='NavLi'><NavLink exact to='/skills' activeClassName={"selected"} >Skills</NavLink></li>
                    <li className='NavLi'><NavLink exact to='/projects' activeClassName={"selected"} >Projects</NavLink></li>
                    {/* <li className='NavLi'><NavLink exact to='/resume' activeClassName={"selected"} >Resume</NavLink></li> */}
                    <li className='NavLi'><NavLink exact to='/contact' activeClassName={"selected"} >Contact</NavLink></li>
                    <li style={{float: 'right'}} className='NavLi'><NavLink exact to='/' activeClassName={"selected"}>Samantha<strong>\Jimenez</strong></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;