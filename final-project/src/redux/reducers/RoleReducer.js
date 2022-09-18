import { ADD_ROLE_SUCCESS } from "../contants/RoleContant"

const initialRoleState = {
    roles: localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles")) : []
}

let roles = [];

export const RoleReducer = (state = initialRoleState,action) => {
    switch (action.type) {
        case ADD_ROLE_SUCCESS: 
            
            roles = [...state.roles, action.payload];
            
            localStorage.setItem("roles", JSON.stringify(roles));

            return {
                ...state,
                roles
            }

        default:
            return state;
    }
}