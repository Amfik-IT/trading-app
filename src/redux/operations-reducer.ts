import { ItemType, PayloadType } from "../types/types";

const FETCH_ALL_ITEMS: string = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS: string = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR: string = 'FETCH_ALL_ITEMS_ERROR'
const UPDATE_SEARCH: string = 'UPDATE_SEARCH';
const UPDATE_FILTER: string = 'UPDATE_FILTER';
const UPDATE_PAGE: string = 'UPDATE_PAGE';
const UPDATE_PERIOD: string = 'UPDATE_PERIOD';
const CLEAR_FILTERS: string = 'CLEAR_FILTERS';


// export type ActionsType = { // ! пока не понял как давать type для action
//   type: string,
//   payload?: PayloadType,
//   errors?: any, // ! надо дать тип 
//   search?: string,
//   sort?: string,
//   page?: number,
//   period?: string
// }


const initialState = {
  items: null as ItemType[] | null,
  isLoading: null as string | null,
  errors: {}, // ! надо дать тип 
  search: "" as string,
  fullCount: null as number | null,
  sort: "" as string,
  page: 1 as number,
  pageSize: 10 as number,
  period: "" as string,
}

export type InitialStateType = typeof initialState;

const operationsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
  case FETCH_ALL_ITEMS:
      return {
          ...state,
          isLoading: "loading",
      }
  case FETCH_ALL_ITEMS_SUCCESS:
    return {
        ...state,
        isLoading: "completed",
        fullCount: action.payload.fullCount,
        items: action.payload.data,
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

type UpdateOperationAC = {type: typeof FETCH_ALL_ITEMS_SUCCESS, payload: PayloadType}
export const updateOperationActionCreator = (payload: PayloadType): UpdateOperationAC =>
    ({type: FETCH_ALL_ITEMS_SUCCESS, payload,})

type errorAC = {type: typeof FETCH_ALL_ITEMS_ERROR, errors: any}
export const errorActionCreator = (errors: any): errorAC => // ! надо дать тип 
    ({type: FETCH_ALL_ITEMS_ERROR, errors,})

type UpdateSearchAC = {type: typeof UPDATE_SEARCH, search: string}
export const updateSearchActionCreator = (search: string): UpdateSearchAC =>
    ({type: UPDATE_SEARCH, search,})

type UpdateFilterAC = {type: typeof UPDATE_FILTER, sort: string}
export const updateFilterActionCreator = (sort: string): UpdateFilterAC =>
    ({type: UPDATE_FILTER, sort,})

type UpdatePageAC = {type: typeof UPDATE_PAGE, page: number}
export const updatePageActionCreator = (page: number): UpdatePageAC =>
    ({type: UPDATE_PAGE, page,})

type UpdatePeriodAC = {type: typeof UPDATE_PERIOD, period: string}
export const updatePeriodActionCreator = (period: string): UpdatePeriodAC =>
    ({type: UPDATE_PERIOD, period,})

type ClearFiltersAC = {type: typeof CLEAR_FILTERS}
export const clearFiltersActionCreator = (): ClearFiltersAC =>
    ({type: CLEAR_FILTERS})
    
export default operationsReducer;