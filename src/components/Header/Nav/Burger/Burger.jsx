import React from 'react';

const Burger = (props) => {
    return (
        <div
            class='pr-3 sidenav-toggler sidenav-toggler-dark'
            data-action='sidenav-pin'
            data-target='#sidenav-main'
            onClick={props.menuToggler}
        >
            <div class='sidenav-toggler-inner'>
                <i class='sidenav-toggler-line'></i>
                <i class='sidenav-toggler-line'></i>
                <i class='sidenav-toggler-line'></i>
            </div>
        </div>
    );
};

export default Burger;
