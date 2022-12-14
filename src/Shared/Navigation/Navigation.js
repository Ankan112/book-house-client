import React, { useContext, useState } from 'react';
import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { AuthContext } from '../../Pages/Context/UserContext';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (

        <nav className="main-nav">
            {/* 1st logo part  */}
            <div className="logo">
                <h2 className='text-2xl'>
                    Book House
                </h2>
            </div>

            {/* 2nd menu part  */}
            <div
                className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>
                <ul>
                    <li className='texl-lg'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    {
                        user && user.uid ?
                            <>
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink><button onClick={logOut}>Logout</button></NavLink>
                                </li>
                            </>
                            :
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                    }

                </ul>
            </div>

            {/* 3rd social media links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    {/* <li>

                        <span >Dark </span>
                    </li> */}
                </ul>

                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;