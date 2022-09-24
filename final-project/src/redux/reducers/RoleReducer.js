import { ADD_ROLE_SUCCESS, REMOVE_ROLE_SUCCESS, UPDATE_ROLE_SUCCESS } from "../contants/RoleContant"

const initialRoleState = {
    roles: localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles")) : []
}

let roles = [];

export const RoleReducer = (state = initialRoleState, action) => {
    switch (action.type) {
        case ADD_ROLE_SUCCESS:

            roles = [...state.roles, action.payload];

            localStorage.setItem("roles", JSON.stringify(roles));

            return {
                ...state,
                roles
            }

        case UPDATE_ROLE_SUCCESS:

            roles = state.roles.map((role, index) => {
                if (index === parseInt(action.payload.id)) {
                    return action.payload.role;
                }

                return role;
            })

            localStorage.setItem("roles", JSON.stringify(roles));

            return {
                ...state,
                roles
            }

        case REMOVE_ROLE_SUCCESS:

            state.roles.splice(action.payload, 1)

            roles = [...state.roles];

            localStorage.setItem("roles", JSON.stringify(roles));

            return {
                ...state,
                roles
            }

        default:
            return state;
    }
}