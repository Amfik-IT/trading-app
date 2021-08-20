import React from 'react';

const PanelButtons = (props) => {
    return (
        <div className='col-lg-6 col-5 text-right'>
            <a href='/' className='btn btn-sm btn-neutral'>
                New
            </a>
            <a href='/' className='btn btn-sm btn-neutral'>
                Filters
            </a>
        </div>
    );
};

export default PanelButtons;
