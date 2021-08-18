import React from 'react';

const TablesItem = (props) => {
    return (
        <tr>
            <th scope='row'>
                <div class='media align-items-center'>
                    <div class='media-body'>
                        <span class='name mb-0 text-sm'>{props.number}</span>
                    </div>
                </div>
            </th>
            <td class='budget'>{props.symbol}</td>
            <td>
                <span class='badge badge-dot mr-4'>
                    <i class='bg-info'></i>
                    <span class='status'>{props.incomeType}</span>
                </span>
            </td>
            <td>
                <i class={`fas ${props.income > 0 ? "fa-arrow-up text-success" : "fa-arrow-down text-warning"} mr-3`}></i>{' '}
                <span class='avatar-group'>{props.income}</span>
            </td>
            <td>
                <div class='d-flex align-items-center'>
                    <span class='completion mr-2'>{props.asset}</span>
                </div>
            </td>
            <td class='text-right'>
                <div class='dropdown'>{props.time}</div>
            </td>
        </tr>
    );
};

export default TablesItem;
