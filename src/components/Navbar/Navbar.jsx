import React from 'react';
import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => {
    return (
        <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div class="scrollbar-inner">
                <Logo />
                <div class="navbar-inner">
                    <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul class="navbar-nav">
                            <NavItem setInfo={props.setInfo} path="/dashboard" text="Dashboard"/>
                            <NavItem setInfo={props.setInfo} path="/tables" text="Tables"/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
