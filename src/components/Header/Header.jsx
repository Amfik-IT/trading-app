import React from 'react';
import Nav from './Nav/Nav';
import Panel from './Panel/Panel';

const Header = (props) => {
    return (
        <>
            <Nav menuToggler={props.menuToggler}/>
            <Panel pageInfo={props.pageInfo}/>
        </>
    );
};

export default Header;
