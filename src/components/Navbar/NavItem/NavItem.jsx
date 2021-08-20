import React from 'react';
import s from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    function click() {
        props.setInfo({title: props.text, path: props.path, active: props.text});
    };
    return (
        <li className='nav-item'>
            <NavLink
                to={props.path}
                activeClassName={s.active}
                className={`nav-link ${props.active ? "active" : ""}`}
                onClick={click}
            >
                <i className='ni ni-tv-2 text-primary'></i>
                <span className='nav-link-text'>{props.text}</span>
            </NavLink>
        </li>
    );
};

export default NavItem;
