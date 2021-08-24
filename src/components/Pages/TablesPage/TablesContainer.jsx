import Tables from './Tables';
import { connect } from 'react-redux';
import {updatePageActionCreator} from '../../../redux/operations-reducer';
import PageButton from './PageButton/PageButton';
import TablesItem from './TablesItem/TablesItem';
import createRequest from '../../../api/api';
import { useState } from 'react';

const TablesContainer = (props) => {
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
        if (props.operations.sort) {
            const sortPosition = camelize(props.operations.sort.toLowerCase());

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
        <Tables operations={operations}
        isLoading={props.operations.isLoading}
        buttons={buttons}
        page={props.operations.page}
        previousPage={previousPage}
        nextPage={nextPage}/>
    );
};

const mapStateToProps = (state) => {
    return {
        operations: state.operations,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePage: (count) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
