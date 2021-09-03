import React, {FC} from 'react';
import { ItemType } from '../../../types/types';

const TablesItem: FC<ItemType> = ({_id, symbol, incomeType, income, asset, time}) => {
    return (
        <tr>
            <td>
                <div className='media align-items-center'>
                    <div className='media-body'>
                        <span className='name mb-0 text-sm'>{_id}</span>
                    </div>
                </div>
            </td>
            <td className='budget'>{symbol}</td>
            <td>
                <span className='badge badge-dot mr-4'>
                    <i className='bg-info'></i>
                    <span className='status'>{incomeType}</span>
                </span>
            </td>
            <td>
                <i
                    className={`fas ${
                        income > 0
                            ? 'fa-arrow-up text-success'
                            : 'fa-arrow-down text-warning'
                    } mr-3`}
                ></i>{' '}
                <span className='avatar-group'>{income}</span>
            </td>
            <td>
                <div className='d-flex align-items-center'>
                    <span className='completion mr-2'>{asset}</span>
                </div>
            </td>
            <td className='text-center'>
                <div className='dropdown'>{time}</div>
            </td>
        </tr>
    );
};

export default TablesItem;
