import React from 'react';
import s from "./FiltersButtons.module.css"

const FiltersButtons = (props) => {
    const filterToggler = (e) => {
        if (props.sort === "" || props.sort !== props.name) {
            props.updateFilter(props.name);
        } else {
            props.updateFilter("");
        }
    }

    return <button onClick={filterToggler} className={`dropdown-item ${s.buttonOutline}`}>{props.name}</button>;
};

export default FiltersButtons;
