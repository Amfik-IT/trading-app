import Tables from './Tables';
import {connect} from 'react-redux';
import {InitialStateType, updatePageActionCreator} from '../../../redux/operations-reducer';
import PageButton from '../../common/PageButton/PageButton';
import TablesItem from '../../common/TablesItem/TablesItem';
import createRequest from '../../../api/api';
import { useState } from 'react';
import React, {FC} from 'react';
import { ItemType } from '../../../types/types';
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    operations: InitialStateType
}

type mapDispatchToPropsType = {
    updatePage: (count: number) => void
}
type OwnPropsType = {}

type PropsType = mapStateToPropsType & mapDispatchToPropsType & OwnPropsType

type onClickType = () => void

const TablesContainer: FC<PropsType> = ({updatePage, operations}) => {
    const [numbersArr, setNumbersArr] = useState<{first: number, last: number}>({first: 1, last: 10})

    const onNextPage: (e: any) => void = (e) => {
        let count: number = Number(e.target.innerHTML);
        updatePage(count);
        if(count === numbersArr.last) setNumbersArr({first: (numbersArr.first === 1 ? numbersArr.first + 9 : numbersArr.first + 10), last: numbersArr.last + 10})
        createRequest();
    };
   
    const pages: number[] = [];
    for (let i = numbersArr.first; i <= numbersArr.last ; i++) {
        pages.push(i);
    }
    const buttons: React.ReactElement[] = pages.map((p: number, i: number) => <PageButton key={i} onClick={onNextPage} count={p} active={operations.page === p ? "active" : ""}/>);
    
    let tableItems: React.ReactElement[] | null = null;

    if (operations.isLoading === 'completed') {
        if (operations.sort) {

            const camelize: (str: string) => string = (str) => {
                return str
                    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                        return index === 0
                            ? word.toLowerCase()
                            : word.toUpperCase();
                    })
                    .replace(/\s+/g, '');
            }

            const sortPosition: string = camelize(operations.sort.toLowerCase());

            tableItems = operations.items.sort((a: any, b: any) => {
                    if (a[sortPosition] > b[sortPosition]) return 1;
                    if (a[sortPosition] === b[sortPosition]) return 0;
                    if (a[sortPosition] < b[sortPosition]) return -1;
                    return 0;
                })
                .map((item: ItemType) => <TablesItem key={item._id} {...item} />);
        } else {
            tableItems = operations.items.map((item: ItemType) => (
                <TablesItem key={item._id} {...item} />
            ));
        }
    }

    const previousPage: onClickType = () => {
        if(operations.page - 1 < numbersArr.first) setNumbersArr({first: (numbersArr.first === 10 ? numbersArr.first - 9 : numbersArr.first - 10), last: numbersArr.last - 10})
        updatePage(operations.page - 1);
        createRequest();
    }

    const nextPage: onClickType = () => {
        updatePage(operations.page + 1);
        createRequest();
    }

    return (
        <Tables tableItems={tableItems}
        isLoading={operations.isLoading}
        buttons={buttons}
        page={operations.page}
        previousPage={previousPage}
        nextPage={nextPage}/>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        operations: state.operations as InitialStateType,
    };
};

const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        updatePage: (count: number) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(TablesContainer);
