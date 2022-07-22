import React from 'react';
import {NavLink, Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul className='navbr'>
           <li> <NavLink className="nav-bar-link" to="/">Home</NavLink > </li>
            {/* &nbsp;<Link to="/about">About</Link>  */}
            <li> <NavLink className="nav-bar-link" to="/about">About</NavLink ></li>
        </ul>
      
    </div>
  );
}

export default Navbar;
