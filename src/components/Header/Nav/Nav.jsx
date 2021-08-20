import React from 'react';
import NavButtons from './NavButtons/NavButtons';
import ProfileButtons from './ProfileButtons/ProfileButtons';
import SearchContainer from './SearchInput/SearchContainer';

const Nav = (props) => {
    return (
        <nav className='navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom'>
            <div className='container-fluid'>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <SearchContainer />
                    <NavButtons menuToggler={props.menuToggler} />
                    <ProfileButtons />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
