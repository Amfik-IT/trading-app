import React from 'react';
import ava4 from '../../../../assets/img/theme/team-4.jpg';

const ProfileButtons = (props) => {
    return (
        <ul className='navbar-nav align-items-center  ml-auto ml-md-0 '>
            <li className='nav-item dropdown'>
                <a
                    className='nav-link pr-0'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <div className='media align-items-center'>
                        <span className='avatar avatar-sm rounded-circle'>
                            <img alt='avatar' src={ava4} />
                        </span>
                        <div className='media-body  ml-2  d-none d-lg-block'>
                            <span className='mb-0 text-sm  font-weight-bold'>
                                John Snow
                            </span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    );
};

export default ProfileButtons;
