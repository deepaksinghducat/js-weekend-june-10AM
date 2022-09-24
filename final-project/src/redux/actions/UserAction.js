import {
    ADD_USER_START,
    ADD_USER_SUCCESS,
    REMOVE_USER_START,
    REMOVE_USER_SUCCESS,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS
} from "../contants/UserContant";

export const addUserStart = (user) => ({
    type: ADD_USER_START,
    payload: user
})

export const addUserSuccess = (user) => ({
    type: ADD_USER_SUCCESS,
    payload: user
})


export const updateUserStart = (user, id) => ({
    type: UPDATE_USER_START,
    payload: {
        user,
        id
    }
})

export const updateUserSuccess = (user, id) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        user,
        id
    }
})

export const removeUserStart = (index) => ({
    type: REMOVE_USER_START,
    payload: index
})

export const removeUserSuccess = (index) => ({
    type: REMOVE_USER_SUCCESS,
    payload: index
})
