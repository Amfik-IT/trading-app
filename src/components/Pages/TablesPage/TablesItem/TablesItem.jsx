import React from 'react';

const TablesItem = (props) => {
    return (
        <tr>
            <td>
                <div className='media align-items-center'>
                    <div className='media-body'>
                        <span className='name mb-0 text-sm'>{props._id}</span>
                    </div>
                </div>
            </td>
            <td className='budget'>{props.symbol}</td>
            <td>
                <span className='badge badge-dot mr-4'>
                    <i className='bg-info'></i>
                    <span className='status'>{props.incomeType}</span>
                </span>
            </td>
            <td>
                <i
                    className={`fas ${
                        props.income > 0
                            ? 'fa-arrow-up text-success'
                            : 'fa-arrow-down text-warning'
                    } mr-3`}
                ></i>{' '}
                <span className='avatar-group'>{props.income}</span>
            </td>
            <td>
                <div className='d-flex align-items-center'>
                    <span className='completion mr-2'>{props.asset}</span>
                </div>
            </td>
            <td className='text-center'>
                <div className='dropdown'>{props.time}</div>
            </td>
        </tr>
    );
};

export default TablesItem;
