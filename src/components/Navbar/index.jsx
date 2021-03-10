import React from 'react';
import { Link } from 'react-router-dom';





const Navbar = () => {

    return(
    <nav>
        <Link to="/Home" className="nav-element">HOME</Link>
        <Link to='/Login' className="nav-element">LOGIN</Link>
        <Link to='/Register' className="nav-element">REGISTER</Link>
    </nav>
    )
};
export default Navbar;