const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR = 'FETCH_ALL_ITEMS_ERROR'
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_FILTER = 'UPDATE_FILTER';
const UPDATE_PAGE = 'UPDATE_PAGE';
const UPDATE_PERIOD = 'UPDATE_PERIOD';


const operationsReducer = (state = {
  items: [],
  isLoading: false,
  errors: {},
  search: "",
  fullCount: "",
  sort: "",
  page: 1,
  pageSize: 10,
  period: "",
}, action) => {
  switch (action.type) {
  case FETCH_ALL_ITEMS:
      return {
          ...state,
          isLoading: true
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
        isLoading: false,
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
        filter: action.sort
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
  default:
    return state
  }
}

export const loadingActionCreator = () =>
    ({type: FETCH_ALL_ITEMS})
export const updateOperationActionCreator = (data) =>
    ({type: FETCH_ALL_ITEMS_SUCCESS, payload: data,})
export const errorActionCreator = (data) =>
    ({type: FETCH_ALL_ITEMS_ERROR, errors: data,})
export const updateSearchActionCreator = (text) =>
    ({type: UPDATE_SEARCH, search: text,})
export const updateFilterActionCreator = (text) =>
    ({type: UPDATE_FILTER, sort: text,})
export const updatePageActionCreator = (count) =>
    ({type: UPDATE_PAGE, page: count,})
export const updatePeriodActionCreator = (url) =>
    ({type: UPDATE_PERIOD, period: url,})
export default operationsReducer;