import { ADD_USER_SUCCESS, REMOVE_USER_SUCCESS, UPDATE_USER_SUCCESS } from "../contants/UserContant";

let previousUsers = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];

const initialUserState = {
    user: [{
        name: "Admin",
        email: "admin@example.com",
        password: "password",
        role: "admin",
        status: "1",
    }, ...previousUsers]
}

let user = [];

export const UserReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case ADD_USER_SUCCESS:

            user = [...state.user, action.payload];

            localStorage.setItem("user", JSON.stringify(user));

            return {
                ...state,
                user
            }

        case UPDATE_USER_SUCCESS:

            user = state.user.map((user, index) => {

                if (index === parseInt(action.payload.id)) {
                    return action.payload.user;
                }

                return user;
            })

            localStorage.setItem("user", JSON.stringify(user));

            return {
                ...state,
                user
            }

        case REMOVE_USER_SUCCESS:

            state.user.splice(action.payload, 1)

            user = [...state.user];

            localStorage.setItem("user", JSON.stringify(user));

            return {
                ...state,
                user
            }

        default:
            return state;
    }
}