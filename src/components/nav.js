import React from 'react';
import {NavLink} from 'react-router-dom';
import './../css/nav.css';
const NavBar = () =>(
<div>
    <div>
        <NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
        <NavLink to='/Jspangb'>Jspangb</NavLink> |&nbsp;
        <NavLink to='/Jspangc'>Jspangc</NavLink>
      <NavLink to='/react' activeClassName='active'>404</NavLink>
    </div>
</div>
)
export default NavBar;