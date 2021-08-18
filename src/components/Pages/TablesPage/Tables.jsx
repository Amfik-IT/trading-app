import React from 'react';
import TablesItem from './TablesItem/TablesItem';
// import s from './Tables.module.css';

const Tables = (props) => {
    // let onTextChange = (e) => {
    //     let text = e.target.value;
    //     props.updateText(text);
    // };
    let operations;
    if (props.operations.isLoading === "completed") {
        operations = props.operations.items.data.map((item, index) => <TablesItem key={item.id} number={index + 1} {...item} />);
    }
    console.log(props.operations.items.data)

    return (
        <>
            <div class='row'>
                <div class='col'>
                    <div class='card'>
                        <div class='card-header border-0'>
                            <h3 class='mb-0'>Operations</h3>
                        </div>
                        <div class='table-responsive'>
                            <table class='table align-items-center table-flush'>
                                <thead class='thead-light'>
                                    <tr>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='name'
                                        >
                                            Number
                                        </th>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='budget'
                                        >
                                            Symbol
                                        </th>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='status'
                                        >
                                            Income Type
                                        </th>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='completion'
                                        >
                                            Income
                                        </th>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='completion'
                                        >
                                            Asset
                                        </th>
                                        <th
                                            scope='col'
                                            class='sort'
                                            data-sort='completion'
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class='list'>
                                    {props.operations.isLoading !== "completed" ? "Загрузка..." : operations}
                                </tbody>
                            </table>
                        </div>
                        <div class='card-footer py-4'>
                            <nav aria-label='...'>
                                <ul class='pagination justify-content-end mb-0'>
                                    <li class='page-item disabled'>
                                        <a
                                            class='page-link'
                                            href='/'
                                            tabindex='-1'
                                        >
                                            <i class='fas fa-angle-left'></i>
                                            <span class='sr-only'>
                                                Previous
                                            </span>
                                        </a>
                                    </li>
                                    <li class='page-item active'>
                                        <a class='page-link' href='/'>
                                            1
                                        </a>
                                    </li>
                                    <li class='page-item'>
                                        <a class='page-link' href='/'>
                                            2{' '}
                                            <span class='sr-only'>
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li class='page-item'>
                                        <a class='page-link' href='/'>
                                            3
                                        </a>
                                    </li>
                                    <li class='page-item'>
                                        <a class='page-link' href='/'>
                                            <i class='fas fa-angle-right'></i>
                                            <span class='sr-only'>Next</span>
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
