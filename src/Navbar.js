import React from 'react';
import {Link} from 'react-router-dom'; 
import './login.css'




const Navbar = () => {

    return (
        <div>

            <nav >

                <ul className="" id="homepage-nav">
                 <li className="mx-5">
                 <Link className="nav-link active" to="/">
                  Home  
                </Link> 
                </li>
                 <li className="mx-5">
                 <Link className="nav-link active" to="/about">
                  About  
                </Link> 
                </li>
              <li className="mx-5">
                 <Link className="nav-link active" to="/login">
                  Login 
                </Link> 
                </li>
                 <li className="mx-5">
                <Link className="nav-link active" to="/signup">
                  Sign up 
                </Link>
                 </li>
                </ul>
            </nav>
            </div>
    )
}

export default Navbar;