import React from 'react';

const Breadcrumbs = (props) => {
    const title =
        props.pageInfo.title !== 'Dashboard' ? props.pageInfo.title : 'Default';
    return (
        <div class='col-lg-6 col-7'>
            <h6 class='h2 text-white d-inline-block mb-0'>{title}</h6>
            <nav
                aria-label='breadcrumb'
                class='d-none d-md-inline-block ml-md-4'
            >
                <ol class='breadcrumb breadcrumb-links breadcrumb-dark'>
                    <li class='breadcrumb-item'>
                        <a href='/'>
                            <i class='fas fa-home'></i>
                        </a>
                    </li>
                    <li class='breadcrumb-item'>
                        <a href={props.pageInfo.path}>{props.pageInfo.title}</a>
                    </li>
                    <li class='breadcrumb-item active' aria-current='page'>
                        {title}
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
