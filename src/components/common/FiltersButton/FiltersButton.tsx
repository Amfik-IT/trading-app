import s from "./FiltersButton.module.css"
import React, {FC} from 'react';

type PropsType = {
    onFilter: (e: any) => void
    id: string
    name: string
    key: number
}

const FiltersButton: FC<PropsType> = (props) => {
    return <button id={props.id} onClick={props.onFilter} className={`dropdown-item ${s.buttonOutline}`}>{props.name}</button>;
};

export default FiltersButton;