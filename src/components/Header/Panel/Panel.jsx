import React from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import PanelButtons from './PanelButtons/PanelButtons';

const Panel = (props) => {
    return (
        <div className='header bg-primary pb-6'>
            <div className='container-fluid'>
                <div className='header-body'>
                    <div className='row align-items-center py-4'>
                        <Breadcrumbs pageInfo={props.pageInfo}/>
                        <PanelButtons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
