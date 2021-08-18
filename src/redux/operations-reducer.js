const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS'
const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS'
const FETCH_ALL_ITEMS_ERROR = 'FETCH_ALL_ITEMS_ERROR'

const cardReducer = (state = {
  items: [],
  isLoading: false,
  errors: {}
}, action) => {
  switch (action.type) {
  case FETCH_ALL_ITEMS:
    return Object.assign({}, state, {
      isLoading: true
    })
  case FETCH_ALL_ITEMS_SUCCESS:
    return Object.assign({}, state, {
      isLoading: false,
      items: action.payload
    })
  case FETCH_ALL_ITEMS_ERROR:
    return Object.assign({}, state, {
      isLoading: false,
      errors: action.errors
    })
  default:
    return state
  }
}

export const loadingActionCreator = () =>
    ({type: FETCH_ALL_ITEMS});
export const updateOperationActionCreator = (data) =>
    ({type: FETCH_ALL_ITEMS_SUCCESS, payload: data,});
export const errorActionCreator = (data) =>
    ({type: FETCH_ALL_ITEMS_ERROR, errors: data,})

export default cardReducer;