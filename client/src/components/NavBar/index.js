//importing React and Link as well as css, exporting NavBar
import React from 'react';
import { Link } from "react-router-dom"
import "./NavBar.css";

function NavBar() {

    return (
        <div className="Nav" className="dropdown">
            <span>Menu</span>
            <div className="dropdown-content">
                {/*Using LINK to link dropdwon menu items to components  */}
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/projects">Projects</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/resume">Work</Link></li>


            </div>
        </div>
    );
}

export default NavBar;
