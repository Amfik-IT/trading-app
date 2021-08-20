import React from 'react';
import TablesItem from './TablesItem/TablesItem';

const Tables = (props) => {
    // let onNextPage = (e) => { // TODO: тут будет пагинация
    //     let text = e.target;
    // };
    let operations;
    if (props.operations.isLoading === 'completed') {
        operations = props.operations.items.map((item) => (
            <TablesItem key={item._id} {...item} />
        ));
    }
    // console.log(props.operations.items); // TODO: для дебага

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header border-0'>
                            <h3 className='mb-0'>Operations</h3>
                        </div>
                        <div className='table-responsive'>
                            <table className='table align-items-center table-flush'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='name'
                                        >
                                            Id
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='budget'
                                        >
                                            Symbol
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='status'
                                        >
                                            Income Type
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='completion'
                                        >
                                            Income
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='completion'
                                        >
                                            Asset
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort text-center'
                                            data-sort='completion'
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='list'>
                                    {props.operations.isLoading !== 'completed'
                                        ? <tr><th>Загрузка...</th></tr>
                                        : operations}
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer py-4'>
                            <nav aria-label='...'>
                                <ul className='pagination justify-content-end mb-0'>
                                    <li className='page-item disabled'>
                                        <a
                                            className='page-link'
                                            href='/'
                                        >
                                            <i className='fas fa-angle-left'></i>
                                            <span className='sr-only'>
                                                Previous
                                            </span>
                                        </a>
                                    </li>
                                    <li className='page-item active'>
                                        <a className='page-link' href='/'>
                                            1
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='/'>
                                            2{' '}
                                            <span className='sr-only'>
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='/'>
                                            3
                                        </a>
                                    </li>
                                    <li className='page-item'>
                                        <a className='page-link' href='/'>
                                            <i className='fas fa-angle-right'></i>
                                            <span className='sr-only'>
                                                Next
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tables;
