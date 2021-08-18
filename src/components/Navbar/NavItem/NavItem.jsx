import React from 'react';
import s from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    function click() {
        props.setInfo({title: props.text, path: props.path,});
    };
    return (
        <li class='nav-item'>
            <NavLink
                to={props.path}
                activeClassName={s.active}
                className='nav-link'
                onClick={click}
            >
                <i class='ni ni-tv-2 text-primary'></i>
                <span class='nav-link-text'>{props.text}</span>
            </NavLink>
        </li>
    );
};

export default NavItem;
