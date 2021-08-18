import React from 'react';
import NavButtons from './NavButtons/NavButtons';
import ProfileButtons from './ProfileButtons/ProfileButtons';
import SearchInput from './SearchInput/SearchInput';

const Nav = (props) => {
    return (
        <nav class='navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom'>
            <div class='container-fluid'>
                <div
                    class='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <SearchInput />
                    <NavButtons menuToggler={props.menuToggler} />
                    <ProfileButtons />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
