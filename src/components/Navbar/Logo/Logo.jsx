import React from 'react';
import logo from '../../../assets/img/brand/blue.png';

const Logo = (props) => {
    return (
        <div class='sidenav-header  align-items-center'>
            <a class='navbar-brand' href='/dashboard'>
                <img src={logo} class='navbar-brand-img' alt='...' />
            </a>
        </div>
    );
};

export default Logo;
