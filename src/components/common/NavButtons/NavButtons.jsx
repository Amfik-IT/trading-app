import React from 'react';
import Burger from '../Burger/Burger';

const NavButtons = (props) => {
    return (
        <ul className='navbar-nav align-items-center  ml-md-auto '>
            <li className='nav-item d-xl-none'>
                <Burger menuToggler={props.menuToggler}/>
            </li>
            <li className='nav-item dropdown'>
                <a
                    className='nav-link'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <i className='ni ni-bell-55'></i>
                </a>
            </li>
            <li className='nav-item dropdown'>
                <a
                    className='nav-link'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <i className='ni ni-ungroup'></i>
                </a>
            </li>
        </ul>
    );
};

export default NavButtons;
