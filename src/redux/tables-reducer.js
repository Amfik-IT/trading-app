const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
    text: "тэстовое сообщение",
};

const TablesReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_TEXT:
            return {
                ...state,
                text: action.newText
            };

        default:
            return state;
    }
}

export const updateTextActionCreator = (text) =>
    ({type: UPDATE_TEXT, newText: text,})

export default TablesReducer;