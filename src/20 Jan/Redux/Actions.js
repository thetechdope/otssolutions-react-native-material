import * as Types from "./Types"

export const saveUser = (user_data) => ({
    type: Types.SAVE_USER,
    payload: user_data
})


export const updateLoading = (value) => ({
    type: Types.UPDATE_LOADING,
    payload: value
})




