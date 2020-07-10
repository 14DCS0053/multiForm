import React from 'react'
import {
    NavLink
} from 'react-router-dom';
function Navigation() {
    return (<div className="nav">
        <div>Gaming</div>

        <ul>
            <NavLink to="/ticket" activeStyle={{ color: "#000" }}>Tickets</NavLink>
            <NavLink to="/winner" activeStyle={{ color: "#000" }}>Winner</NavLink>
            <NavLink to="/about" activeStyle={{ color: "#000" }}>About</NavLink>
            <NavLink to="/" activeStyle={{ color: "#000" }} exact>Welcome user</NavLink>
            <NavLink to="/logout" activeStyle={{ color: "#000" }}>Logout</NavLink>
            <NavLink to="/cart" activeStyle={{ color: "#000" }}>Cart</NavLink>
        </ul>

    </div>)
}
export default Navigation;