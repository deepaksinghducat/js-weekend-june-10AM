import {
    ADD_ROLE_START,
    ADD_ROLE_SUCCESS,
    REMOVE_ROLE_START,
    REMOVE_ROLE_SUCCESS,
    UPDATE_ROLE_START,
    UPDATE_ROLE_SUCCESS
} from "../contants/RoleContant";

export const addRoleStart = (role) => ({
    type: ADD_ROLE_START,
    payload: role
})

export const addRoleSuccess = (role) => ({
    type: ADD_ROLE_SUCCESS,
    payload: role
})


export const updateRoleStart = (role, id) => ({
    type: UPDATE_ROLE_START,
    payload: {
        role,
        id
    }
})

export const updateRoleSuccess = (role, id) => ({
    type: UPDATE_ROLE_SUCCESS,
    payload: {
        role,
        id
    }
})

export const removeRoleStart = (index) => ({
    type: REMOVE_ROLE_START,
    payload: index
})

export const removeRoleSuccess = (index) => ({
    type: REMOVE_ROLE_SUCCESS,
    payload: index
})
