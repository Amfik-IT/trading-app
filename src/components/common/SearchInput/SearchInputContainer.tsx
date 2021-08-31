import SearchInput from './SearchInput';
import {updateSearchActionCreator, updatePageActionCreator} from '../../../redux/operations-reducer'
import { connect } from 'react-redux';
import createRequest from '../../../api/api';
import {FC} from "react";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    search: string
}

type MapDispatchToPropsType = {
    updateSearch: (text: string) => void
    updatePage: (count: number) => void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const SearchInputContainer: FC<PropsType> = ({search, updateSearch, updatePage}) => {
    const setSearch = (e: any) => {
        let text = e.target.value.toUpperCase();
        updateSearch(text);
        updatePage(1);
        createRequest();
    }

    return (
        <SearchInput setSearch={setSearch}
        search={search}/>
    );
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        search: state.operations.search as string,
    };
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        updateSearch: (text: string) => {
            dispatch(updateSearchActionCreator(text));
        },
        updatePage: (count: number) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(SearchInputContainer);
