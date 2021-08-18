import React from 'react';
import Burger from '../Burger/Burger';

const NavButtons = (props) => {
    return (
        <ul class='navbar-nav align-items-center  ml-md-auto '>
            <li class='nav-item d-xl-none'>
                <Burger menuToggler={props.menuToggler}/>
            </li>
            <li class='nav-item dropdown'>
                <a
                    class='nav-link'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <i class='ni ni-bell-55'></i>
                </a>
            </li>
            <li class='nav-item dropdown'>
                <a
                    class='nav-link'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <i class='ni ni-ungroup'></i>
                </a>
            </li>
        </ul>
    );
};

export default NavButtons;
