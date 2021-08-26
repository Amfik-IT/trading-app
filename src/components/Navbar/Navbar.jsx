import React from 'react';
import logo from '../../assets/img/brand/blue.png';
import NavItem from '../common/NavItem/NavItem';
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
    const { t } = useTranslation();
    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                <div className='sidenav-header  align-items-center'>
                    <a className='navbar-brand' href='/dashboard'>
                        <img src={logo} className='navbar-brand-img' alt='...' />
                    </a>
                </div>
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <NavItem setInfo={props.setInfo} 
                            active={props.active === "Dashboard" ? true : false} 
                            icon="ni-tv-2" 
                            path="/dashboard" 
                            text={t("Dashboard")}/>
                            <NavItem setInfo={props.setInfo} 
                            active={props.active === "Tables" ? true : false} 
                            icon="ni-bullet-list-67" 
                            path="/tables" 
                            text={t("Tables")}/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
