import React from 'react';
import {
    NavLink
} from 'react-router-dom';
function Footer() {
    return (<div className="footer">


        &copy; ZGaming 2020-2021
        <NavLink to="/terms">Terms of Play</NavLink>

        <NavLink to="/privacy-policy" >Privacy Policy</NavLink>

        <NavLink to="/cookie-policy" >Cookie Policy</NavLink>
        <NavLink to="contact">Contact Us</NavLink>



    </div>)
}
export default Footer;