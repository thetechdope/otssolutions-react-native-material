import * as Types from "./Types"

const initialState = {
    user_name: "",
    user_type: "",
    loading : false
}

export const Reducer = (state = initialState, action) => {
    console.log(action.payload, "payload")
    switch (action.type) {
        case Types.SAVE_USER: {
            return {
                ...state,
                user_name: action.payload.test,
                user_type: action.payload.test2
            }
        }

        case Types.UPDATE_LOADING: {
            return {
                ...state,
               loading : action.payload
            }
        }

        default: {
            return state;
        }
    }
}
