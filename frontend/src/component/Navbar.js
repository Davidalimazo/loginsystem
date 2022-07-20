import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showBtn, setShowBtn]=useState(false);
    let chk = document.querySelector('#chk');
    // const handleClick
    //chk.setAttribute('right', 0);
    return (
        <div className='header'>
            <div className="logo">AYD MEDIA</div>
        <input type="checkbox" name="chk" id="chk" />
        <label htmlFor='chk' className="show"><i className="fa fa-bars"></i> </label>
           <div className="menu">
            <NavLink to="/todo" className="menu-item na">Function</NavLink>
            <NavLink to="/classtodo" className="menu-item na">Class</NavLink>
            <NavLink to="#" className="menu-item na">About</NavLink>
            <NavLink to="#" className="menu-item na">Contact</NavLink>
            <label htmlFor='chk' className="na hide"><i className="fa fa-times"></i> </label>
            
           </div>
          
        </div>
    )
}

export default Navbar
