import React, {FC} from 'react';

type PropsType = {
    onClick: () => void
    name: string
}

const Button: FC<PropsType> = ({onClick, name}) => {
    return <button onClick={onClick} className='btn btn-sm btn-neutral'>{name}</button>;
};

export default Button;