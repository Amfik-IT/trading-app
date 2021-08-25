import React from 'react';
import SearchInputContainer from '../common/SearchInput/SearchInputContainer';
import NavButtons from '../common/NavButtons/NavButtons';
import ProfileButtons from '../common/ProfileButtons/ProfileButtons';
import Breadcrumbs from '../common/Breadcrumbs/Breadcrumbs';
import FiltersButtons from '../common/FiltersButtons/FiltersButtons';
import Button from '../common/Button/Button';
import i18n from '../../i18n';

const Header = (props) => {
    const onEn = () => {
        i18n.changeLanguage("en");
    }
    const onRu = () => {
        i18n.changeLanguage("ru");
    }
    return (
        <>
            <nav className='navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom'>
                <div className='container-fluid'>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <SearchInputContainer />
                        <Button onClick={onRu} name={"Ru"}/>
                        <Button onClick={onEn} name={"En"}/>
                        <NavButtons menuToggler={props.menuToggler} />
                        <ProfileButtons />
                    </div>
                </div>
            </nav>
            <div className='header bg-primary pb-6'>
                <div className='container-fluid'>
                    <div className='header-body'>
                        <div className='row align-items-center py-4'>
                            <Breadcrumbs pageInfo={props.pageInfo} />
                            <FiltersButtons />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
