import React from 'react';
// import s from './Tables.module.css';

const Tables = (props) => {

    let onTextChange = (e) => {
        let text = e.target.value;
        props.updateText(text);
    }

    return (
        <div>
            <input onChange={onTextChange} value={props.tablesPage.text}></input>
        </div>
    );
};

export default Tables;