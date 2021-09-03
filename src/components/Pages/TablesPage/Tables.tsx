import React, {FC} from 'react';
import LoaderOrError from '../../common/LoaderOrError/LoaderOrError';
import loader from '../../../assets/img/loaderOrError/loader.gif';
import error from '../../../assets/img/loaderOrError/error.jpg';
import { useTranslation } from "react-i18next";

type PropsType = {
    tableItems: React.ReactElement[] | null
    isLoading: string
    buttons: React.ReactElement[]
    page: number
    previousPage: () => void
    nextPage: () => void
}

const Tables: FC<PropsType> = ({tableItems, buttons, isLoading,page , nextPage, previousPage }) => {
    const { t } = useTranslation();
    let inTbody: React.ReactElement[] | React.ReactElement | null;

    if (isLoading === 'loading') {
        inTbody = <LoaderOrError loader={loader} />;
    } else if (isLoading === 'completed') {
        inTbody = tableItems;
    } else {
        inTbody = <LoaderOrError loader={error} />;
    }

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header border-0'>
                            <h3 className='mb-0'>{t("Operations")}</h3>
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
                                            {t("Symbol")}
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='status'
                                        >
                                            {t("INCOME TYPE")}
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='completion'
                                        >
                                            {t("INCOME")}
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort'
                                            data-sort='completion'
                                        >
                                            {t("ASSET")}
                                        </th>
                                        <th
                                            scope='col'
                                            className='sort text-center'
                                            data-sort='completion'
                                        >
                                            {t("Date")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='list'>
                                {inTbody}
                                </tbody>
                            </table>
                        </div>
                        <div className='card-footer py-4'>
                            <nav aria-label='...'>
                                <ul className='pagination justify-content-end mb-0'>
                                    <li
                                        className={`page-item ${
                                            page === 1 ? 'disabled' : ''
                                        }`}
                                    >
                                        <button
                                            onClick={previousPage}
                                            className='page-link'
                                        >
                                            <i className='fas fa-angle-left'></i>
                                            <span className='sr-only'>
                                                Previous
                                            </span>
                                        </button>
                                    </li>
                                    {buttons}
                                    <li className='page-item'>
                                        <button
                                            onClick={nextPage}
                                            className='page-link'
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
