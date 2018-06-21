import React from "react";
import Button from '../Home/Button';
import '../../styles/css/App.css';
import logo from '../../styles/assets/JWPlayer-Logo.png'

const HeaderNav = () => {
    return (
  
        <div className="main-nav">

         <ul className='nav-left'>
         <li><img className='icon' src={logo} alt='jw-logo'/></li>
             <li>solutions</li>
             <li>customer</li>
             <li>pricing</li>
        </ul>

        <ul className='nav-right'>
             <li>company</li>
             <li>careers</li>
             <li>developer</li>
             <li>support</li>
             <li>sign-in</li>
           <li> <Button style_class='btn' name={'Get Started'} /> </li>
         </ul>
        </div>
    )
}

export default HeaderNav;