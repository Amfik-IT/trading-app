import React from 'react';
import PageButton from './PageButton/PageButton';
import TablesItem from './TablesItem/TablesItem';
import createRequest from '../../../api/api';
import { useState } from 'react';

const Tables = (props) => {
    const [numbersArr, setNumbersArr] = useState({first: 1, last: 10})
    
    const onNextPage = (e) => {
        let count = Number(e.target.innerHTML);
        props.updatePage(count);
        if(count === numbersArr.last) setNumbersArr({first: (numbersArr.first === 1 ? numbersArr.first + 9 : numbersArr.first + 10), last: numbersArr.last + 10})
        createRequest();
    };
   
    const pages = [];
    for (let i = numbersArr.first; i <= numbersArr.last ; i++) {
        pages.push(i);
    }
    const buttons = pages.map((p, i) => <PageButton key={i} onClick={onNextPage} count={p} active={props.operations.page === p ? "active" : ""}/>);
    
    let operations;

    if (props.operations.isLoading === 'completed') {
        if (props.operations.filter) {
            const sortPosition = camelize(props.operations.filter.toLowerCase());

            function camelize(str) {
                return str
                    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                        return index === 0
                            ? word.toLowerCase()
                            : word.toUpperCase();
                    })
                    .replace(/\s+/g, '');
            }

            operations = props.operations.items.sort((a, b) => {
                    if (a[sortPosition] > b[sortPosition]) return 1;
                    if (a[sortPosition] === b[sortPosition]) return 0;
                    if (a[sortPosition] < b[sortPosition]) return -1;
                    return null;
                })
                .map((item) => <TablesItem key={item._id} {...item} />);
        } else {
            operations = props.operations.items.map((item) => (
                <TablesItem key={item._id} {...item} />
            ));
        }
    }

    const previousPage = () => {
        if(props.operations.page - 1 < numbersArr.first) setNumbersArr({first: (numbersArr.first === 10 ? numbersArr.first - 9 : numbersArr.first - 10), last: numbersArr.last - 10})
        props.updatePage(props.operations.page - 1);
        createRequest();
    }

    const nextPage = () => {
        props.updatePage(props.operations.page + 1);
        createRequest();
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
                                <tbody className='list'>
                                    {props.operations.isLoading !==
                                    'completed' ? (
                                        <tr>
                                            <th>Загрузка...</th>
                                        </tr>
                                    ) : (
                                        operations
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer py-4'>
                            <nav aria-label='...'>
                                <ul className='pagination justify-content-end mb-0'>
                                    <li className={`page-item ${props.operations.page === 1 ? "disabled" : ""}`}>
                                        <button onClick={previousPage} className='page-link' href='/'>
                                            <i className='fas fa-angle-left'></i>
                                            <span className='sr-only'>
                                                Previous
                                            </span>
                                        </button>
                                    </li>
                                    {buttons}
                                    <li className='page-item'>
                                        <button onClick={nextPage} className='page-link' href='/'>
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
