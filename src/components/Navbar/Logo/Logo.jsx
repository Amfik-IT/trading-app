import React from 'react';
import logo from '../../../assets/img/brand/blue.png';

const Logo = (props) => {
    return (
        <div className='sidenav-header  align-items-center'>
            <a className='navbar-brand' href='/dashboard'>
                <img src={logo} className='navbar-brand-img' alt='...' />
            </a>
        </div>
    );
};

export default Logo;
