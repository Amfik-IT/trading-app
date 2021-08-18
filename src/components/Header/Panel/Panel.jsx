import React from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import PanelButtons from './PanelButtons/PanelButtons';

const Panel = (props) => {
    return (
        <div class='header bg-primary pb-6'>
            <div class='container-fluid'>
                <div class='header-body'>
                    <div class='row align-items-center py-4'>
                        <Breadcrumbs pageInfo={props.pageInfo}/>
                        <PanelButtons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
