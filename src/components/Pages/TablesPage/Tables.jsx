import React from 'react';
import LoaderOrError from '../../common/LoaderOrError/LoaderOrError';
import loader from '../../../assets/img/loaderOrError/loader.gif';
import error from '../../../assets/img/loaderOrError/error.jpg';

const Tables = (props) => {
    let inTbody;

    if (props.isLoading === 'loading') {
        inTbody = <LoaderOrError loader={loader} />;
    } else if (props.isLoading === 'completed') {
        inTbody = props.operations;
    } else {
        inTbody = <LoaderOrError loader={error} />;
    }

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
                                <tbody className='list'>{inTbody}</tbody>
                            </table>
                        </div>
                        <div className='card-footer py-4'>
                            <nav aria-label='...'>
                                <ul className='pagination justify-content-end mb-0'>
                                    <li
                                        className={`page-item ${
                                            props.page === 1 ? 'disabled' : ''
                                        }`}
                                    >
                                        <button
                                            onClick={props.previousPage}
                                            className='page-link'
                                            href='/'
                                        >
                                            <i className='fas fa-angle-left'></i>
                                            <span className='sr-only'>
                                                Previous
                                            </span>
                                        </button>
                                    </li>
                                    {props.buttons}
                                    <li className='page-item'>
                                        <button
                                            onClick={props.nextPage}
                                            className='page-link'
                                            href='/'
                                        >
                                            <i className='fas fa-angle-right'></i>
                                            <span className='sr-only'>
                                                Next
                                            </span>
                                        </button>
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
