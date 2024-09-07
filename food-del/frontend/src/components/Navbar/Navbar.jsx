import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("menu")

    return (
        <div className='navbar'>
            <img src={assets.logo} className='logo' />
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} class className={menu === 'home' ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} class className={menu === 'menu' ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} class className={menu === 'mobile-app' ? "active" : ""}>mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} class className={menu === 'contact-us' ? "active" : ""}>contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)} > sign in</button>
        </div>
        </div >
    )
}

export default Navbar
