import React, {FC} from 'react';

type PropsType = {
    onClick: (e: any) => void
    active: string
    count: number
}

const PageButton: FC<PropsType> = ({onClick, active, count}) => {
    return (
        <li className={`page-item ${active}`}>
            <button onClick={onClick} className='page-link'>
                {count}
            </button>
        </li>
    );
};

export default PageButton;
