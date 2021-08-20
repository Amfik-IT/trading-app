const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR = 'FETCH_ALL_ITEMS_ERROR'
const UPDATE_SEARCH = 'UPDATE_SEARCH';

const operationsReducer = (state = {
  items: [],
  isLoading: false,
  errors: {},
  search: "",
  fullCount: "",
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

export default operationsReducer;