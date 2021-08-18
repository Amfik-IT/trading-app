import React from 'react';
import ava4 from '../../../../assets/img/theme/team-4.jpg';

const ProfileButtons = (props) => {
    return (
        <ul class='navbar-nav align-items-center  ml-auto ml-md-0 '>
            <li class='nav-item dropdown'>
                <a
                    class='nav-link pr-0'
                    href='/'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                >
                    <div class='media align-items-center'>
                        <span class='avatar avatar-sm rounded-circle'>
                            <img alt='avatar' src={ava4} />
                        </span>
                        <div class='media-body  ml-2  d-none d-lg-block'>
                            <span class='mb-0 text-sm  font-weight-bold'>
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
