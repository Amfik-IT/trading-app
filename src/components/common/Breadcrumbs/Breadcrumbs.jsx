import React from 'react';
import { useTranslation } from "react-i18next";

const Breadcrumbs = (props) => {
    const { t } = useTranslation();
    const title =
        props.pageInfo.title !== "Dashboard" ? props.pageInfo.title : t("Default");
    return (
        <div className='col-lg-6 col-7'>
            <h6 className='h2 text-white d-inline-block mb-0'>{title}</h6>
            <nav
                aria-label='breadcrumb'
                className='d-none d-md-inline-block ml-md-4'
            >
                <ol className='breadcrumb breadcrumb-links breadcrumb-dark'>
                    <li className='breadcrumb-item'>
                        <a href='/'>
                            <i className='fas fa-home'></i>
                        </a>
                    </li>
                    <li className='breadcrumb-item'>
                        <a href={props.pageInfo.path}>{t(props.pageInfo.title)}</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                        {t(title)}
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
