import s from "./FiltersButton.module.css"

const FiltersButton = (props) => {
    return <button id={props.id} onClick={props.onFilter} className={`dropdown-item ${s.buttonOutline}`}>{props.name}</button>;
};

export default FiltersButton;