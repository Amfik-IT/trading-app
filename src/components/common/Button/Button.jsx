const Button = (props) => {
    return <button onClick={props.onClick} className='btn btn-sm btn-neutral'>{props.name}</button>;
};

export default Button;