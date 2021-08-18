import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/brand/blue.png";

const Navbar = () => {
    return (
        <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div class="scrollbar-inner">
                <div class="sidenav-header  align-items-center">
                    <a class="navbar-brand" href="/dashboard">
                    <img src={logo} class="navbar-brand-img" alt="..."/>
                    </a>
                </div>
                <div class="navbar-inner">
                    <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <NavLink to='/dashboard' activeClassName="active" class="nav-link" href="examples/dashboard.html">
                                <i class="ni ni-tv-2 text-primary"></i>
                                <span class="nav-link-text">Dashboard</span>
                            </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink to='/tables' activeClassName="active" class="nav-link" href="examples/tables.html">
                                <i class="ni ni-bullet-list-67 text-default"></i>
                                <span class="nav-link-text">Tables</span>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
