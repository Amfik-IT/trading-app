import React, {FC} from 'react';
import s from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    setInfo: (pageInfo: {title: string, path: string, active: string}) => void
    active: boolean
    icon: string
    path: string 
    text: string
}

const NavItem: FC<PropsType> = ({setInfo, active, icon, path, text}) => {
    const onClick: () => void = () => {
        setInfo({title: text, path, active: text});
    };
    return (
        <li className='nav-item'>
            <NavLink
                to={path}
                activeClassName={s.active}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={onClick}
            >
                <i className={`ni ${icon} text-primary`}></i>
                <span className='nav-link-text'>{text}</span>
            </NavLink>
        </li>
    );
};

export default NavItem;
