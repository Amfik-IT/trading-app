import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/brand/blue.png";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbarHeader}>
                <a className={s.navbarLogo}>
                    <img src={logo} className={s.navbarLogoImg} alt="..."/> 
                </a>
            </div>
            <nav className={s.nav}>
                    <NavLink to='/dashboard' className={`${s.item}`} activeClassName={s.active}>
                            <i className='ni ni-tv-2 text-primary'></i>
                            <span className={s.navLinkText}>Dashboard</span>
                    </NavLink>
                    <NavLink to='/tables' className={`${s.item}`} activeClassName={s.active}>
                        <i className='ni ni-bullet-list-67 text-default'></i>
                        <span className={s.navLinkText}>Tables</span>
                    </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
