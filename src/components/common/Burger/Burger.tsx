import React, {FC} from 'react';


type PropsType = {
    menuToggler: () => void
}

const Burger: FC<PropsType> = ({menuToggler}) => {
    return (
        <div
            className='pr-3 sidenav-toggler sidenav-toggler-dark'
            data-action='sidenav-pin'
            data-target='#sidenav-main'
            onClick={menuToggler}
        >
            <div className='sidenav-toggler-inner'>
                <i className='sidenav-toggler-line'></i>
                <i className='sidenav-toggler-line'></i>
                <i className='sidenav-toggler-line'></i>
            </div>
        </div>
    );
};

export default Burger;
