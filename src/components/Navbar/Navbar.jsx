import React from 'react';
import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                <Logo />
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <NavItem setInfo={props.setInfo} active={props.active === "Dashboard" ? true : false} path="/dashboard" text="Dashboard"/>
                            <NavItem setInfo={props.setInfo} active={props.active === "Tables" ? true : false} path="/tables" text="Tables"/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
