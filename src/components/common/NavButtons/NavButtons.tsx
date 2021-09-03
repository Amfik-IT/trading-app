import React, {FC} from 'react';
import Burger from '../Burger/Burger';

type PropsType = {
    menuToggler: () => void
}

const NavButtons: FC<PropsType> = ({menuToggler}) => {
    return (
        <ul className='navbar-nav align-items-center  ml-md-auto '>
            <li className='nav-item d-xl-none'>
                <Burger menuToggler={menuToggler}/>
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
