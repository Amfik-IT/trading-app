import { type } from "os";

const FETCH_ALL_ITEMS: string = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS: string = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR: string = 'FETCH_ALL_ITEMS_ERROR'
const UPDATE_SEARCH: string = 'UPDATE_SEARCH';
const UPDATE_FILTER: string = 'UPDATE_FILTER';
const UPDATE_PAGE: string = 'UPDATE_PAGE';
const UPDATE_PERIOD: string = 'UPDATE_PERIOD';
const CLEAR_FILTERS: string = 'CLEAR_FILTERS';

export type ActionsType = {
  type: string,
  payload?: any,
  errors?: any,
  search?: string,
  sort?: string,
  page?: number,
  period?: string
}

export type InitialStateType = {
  items: any,
  isLoading: string,
  errors: any,
  search: string | undefined,
  fullCount: string,
  sort: string | undefined,
  page: number | undefined,
  pageSize: number,
  period: string | undefined,
}

const initialState: InitialStateType = {
  items: [],
  isLoading: "",
  errors: {},
  search: "",
  fullCount: "",
  sort: "",
  page: 1,
  pageSize: 10,
  period: "",
}

const operationsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
  case FETCH_ALL_ITEMS:
      return {
          ...state,
          isLoading: "loading"
      }
  case FETCH_ALL_ITEMS_SUCCESS:
    return {
        ...state,
        isLoading: "completed",
        fullCount: action.payload.fullCount,
        items: action.payload.data
    }
  case FETCH_ALL_ITEMS_ERROR:
    return {
        ...state,
        isLoading: "error",
        errors: action.errors
    }
  case UPDATE_SEARCH:
    return {
        ...state,
        search: action.search
    }
  case UPDATE_FILTER:
    return {
        ...state,
        sort: action.sort
    }
  case UPDATE_PAGE:
    return {
        ...state,
        page: action.page
    }
  case UPDATE_PERIOD:
    return {
        ...state,
        period: action.period
    }
  case CLEAR_FILTERS:
    return {
        ...state,
        period: "",
        page: 1,
        sort: ""
    }
  default:
    return state
  }
}

type LoadingACType = {type: typeof FETCH_ALL_ITEMS}
export const loadingActionCreator = (): LoadingACType =>
    ({type: FETCH_ALL_ITEMS})

type UpdateOperationAC = {type: typeof FETCH_ALL_ITEMS_SUCCESS, payload: any}
export const updateOperationActionCreator = (data: any): UpdateOperationAC =>
    ({type: FETCH_ALL_ITEMS_SUCCESS, payload: data,})

type errorAC = {type: typeof FETCH_ALL_ITEMS_ERROR, errors: any}
export const errorActionCreator = (data: any): errorAC =>
    ({type: FETCH_ALL_ITEMS_ERROR, errors: data,})

type UpdateSearchAC = {type: typeof UPDATE_SEARCH, search: string}
export const updateSearchActionCreator = (text: string): UpdateSearchAC =>
    ({type: UPDATE_SEARCH, search: text,})

type UpdateFilterAC = {type: typeof UPDATE_FILTER, sort: string}
export const updateFilterActionCreator = (text: string) =>
    ({type: UPDATE_FILTER, sort: text,})

type UpdatePageAC = {type: typeof UPDATE_PAGE, page: number}
export const updatePageActionCreator = (count: number): UpdatePageAC =>
    ({type: UPDATE_PAGE, page: count,})

type UpdatePeriodAC = {type: typeof UPDATE_PERIOD, period: string}
export const updatePeriodActionCreator = (url: string): UpdatePeriodAC =>
    ({type: UPDATE_PERIOD, period: url,})

type ClearFiltersAC = {type: typeof CLEAR_FILTERS}
export const clearFiltersActionCreator = (): ClearFiltersAC =>
    ({type: CLEAR_FILTERS})
    
export default operationsReducer;