import {SET_LOADING} from "../actionTypes";

const initialState = {
    loading: false
}

const loaderReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default loaderReducer;