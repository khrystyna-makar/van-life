import React from 'react';
import { NavLink, Link } from "react-router-dom"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host" >Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans" >Vans</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/login">Login</NavLink>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}