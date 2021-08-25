import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='footer pt-0'>
            <div className='row align-items-center justify-content-lg-between'>
                <div className='col-lg-6'>
                    <div className='copyright text-center  text-lg-left  text-muted'>
                        &copy; 2020{' '}
                        <a
                            href='/'
                            className='font-weight-bold ml-1'
                            target='_blank'
                        >
                            Creative Tim
                        </a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <ul className='nav nav-footer justify-content-center justify-content-lg-end'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link' target='_blank'>
                                Creative Tim
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link' target='_blank'>
                                {t("About Us")}
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link' target='_blank'>
                                {t("Blog")}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
