import React, {FC} from 'react';
import {NotificationManager} from 'react-notifications';
import Chart from './Chart';
import  './Dashboard.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import {ItemType} from "../../../types/types";
import {clearFilters, InitialStateType} from "../../../redux/operations-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    operations: InitialStateType
}

type mapDispatchToPropsType = {
    clearFilters: (count: number) => void
}
type OwnPropsType = {}

type PropsType = mapStateToPropsType & mapDispatchToPropsType & OwnPropsType

type DataType = {
    labels: string[]
    data: number[]
}

type ParsDataType = (data: ItemType[]) => DataType

const Dashboard: FC<PropsType> = (props) => {
    const { t } = useTranslation();
    const [data, setData] = useState<DataType>({labels: [], data: []})

    useEffect(() => {
        fetch(`https://invest-dimasik.herokuapp.com/api/trades?limit=all`)
        .then(response => response.json())
        .then(items => setData(parsData(items.data)))
        .catch(errors => {
            NotificationManager.error(errors.message, errors.name, 5000, () => {
                alert(errors.stack);
            });
    })
    },[])

    const parsData: ParsDataType = (data) => {
        let newData: DataType = {labels: [], data: []};
        let month: number = 0;
        let count: number = 0;
        for (let i = 0; i < data.length; i++) {
            let date = new Date(data[i].time)
            if (i === 0) {
                month = date.getMonth();
                count = data[i].income;
            } else {
                if (date.getMonth() === month) {
                    count += data[i].income;
                } else {
                    let months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    newData.labels.push(months[month]);
                    newData.data.push(Math.ceil(count));
                    month = date.getMonth();
                    count = data[i].income;
                }
            }
        }
        newData.labels.reverse();
        newData.data.reverse();
        return newData;
    }

    return (
        <>
            <div className='row'>
                <div className='col-xl-8'>
                    <div className='card bg-default'>
                        <div className='card-header bg-transparent'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <h6 className='text-light text-uppercase ls-1 mb-1'>
                                        {t("Overview")}
                                    </h6>
                                    <h5 className='h3 text-white mb-0'>
                                        {t("Income")}
                                    </h5>
                                </div>
                                <div className='col'>
                                    <ul className='nav nav-pills justify-content-end'>
                                        <li
                                            className='nav-item mr-2 mr-md-0'
                                            data-toggle='chart'
                                            data-target='#chart-sales-dark'
                                            data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                                            data-prefix='$'
                                            data-suffix='k'
                                        >
                                            <a
                                                href='/'
                                                className='nav-link py-2 px-3 active'
                                                data-toggle='tab'
                                            >
                                                <span className='d-none d-md-block'>
                                                    {t("Month")}
                                                </span>
                                                <span className='d-md-none'>M</span>
                                            </a>
                                        </li>
                                        <li
                                            className='nav-item'
                                            data-toggle='chart'
                                            data-target='#chart-sales-dark'
                                            data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                                            data-prefix='$'
                                            data-suffix='k'
                                        >
                                            <a
                                                href='/'
                                                className='nav-link py-2 px-3'
                                                data-toggle='tab'
                                            >
                                                <span className='d-none d-md-block'>
                                                    {t("Week")}
                                                </span>
                                                <span className='d-md-none'>W</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <Chart labels={data.labels} data={data.data}/>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'>
                    <div className='card'>
                        <div className='card-header bg-transparent'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <h6 className='text-uppercase text-muted ls-1 mb-1'>
                                        Performance
                                    </h6>
                                    <h5 className='h3 mb-0'>Total orders</h5>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-8'>
                    <div className='card'>
                        <div className='card-header border-0'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <h3 className='mb-0'>Page visits</h3>
                                </div>
                                <div className='col text-right'>
                                    <a href='/' className='btn btn-sm btn-primary'>
                                        See all
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className='table align-items-center table-flush'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope='col'>Page name</th>
                                        <th scope='col'>Visitors</th>
                                        <th scope='col'>Unique users</th>
                                        <th scope='col'>Bounce rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>/argon/</th>
                                        <td>4,569</td>
                                        <td>340</td>
                                        <td>
                                            <i className='fas fa-arrow-up text-success mr-3'></i>{' '}
                                            46,53%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>/argon/index.html</th>
                                        <td>3,985</td>
                                        <td>319</td>
                                        <td>
                                            <i className='fas fa-arrow-down text-warning mr-3'></i>{' '}
                                            46,53%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>/argon/charts.html</th>
                                        <td>3,513</td>
                                        <td>294</td>
                                        <td>
                                            <i className='fas fa-arrow-down text-warning mr-3'></i>{' '}
                                            36,49%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>/argon/tables.html</th>
                                        <td>2,050</td>
                                        <td>147</td>
                                        <td>
                                            <i className='fas fa-arrow-up text-success mr-3'></i>{' '}
                                            50,87%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>/argon/profile.html</th>
                                        <td>1,795</td>
                                        <td>190</td>
                                        <td>
                                            <i className='fas fa-arrow-down text-danger mr-3'></i>{' '}
                                            46,53%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'>
                    <div className='card'>
                        <div className='card-header border-0'>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    <h3 className='mb-0'>Social traffic</h3>
                                </div>
                                <div className='col text-right'>
                                    <a href='/' className='btn btn-sm btn-primary'>
                                        See all
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className='table align-items-center table-flush'>
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope='col'>Referral</th>
                                        <th scope='col'>Visitors</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>Facebook</th>
                                        <td>1,480</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span className='mr-2'>60%</span>
                                                <div>
                                                    <div className='progress'>
                                                        <div
                                                            className='progress-bar bg-gradient-danger'
                                                            role='progressbar'
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>Facebook</th>
                                        <td>5,480</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span className='mr-2'>70%</span>
                                                <div>
                                                    <div className='progress'>
                                                        <div
                                                            className='progress-bar bg-gradient-success'
                                                            role='progressbar'
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>Google</th>
                                        <td>4,807</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span className='mr-2'>80%</span>
                                                <div>
                                                    <div className='progress'>
                                                        <div
                                                            className='progress-bar bg-gradient-primary'
                                                            role='progressbar'
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>Instagram</th>
                                        <td>3,678</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span className='mr-2'>75%</span>
                                                <div>
                                                    <div className='progress'>
                                                        <div
                                                            className='progress-bar bg-gradient-info'
                                                            role='progressbar'
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>twitter</th>
                                        <td>2,645</td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span className='mr-2'>30%</span>
                                                <div>
                                                    <div className='progress'>
                                                        <div
                                                            className='progress-bar bg-gradient-warning'
                                                            role='progressbar'
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        operations: state.operations,
    };
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {clearFilters})(Dashboard);