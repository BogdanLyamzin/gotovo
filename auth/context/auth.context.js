import {createContext, useReducer} from "react";
import {
    CLEAR_CONFIRM_TOKEN,
    CONFIRM_FAILURE,
    CONFIRM_REQUEST,
    CONFIRM_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../aut.constants";

const initialState = {
    accessToken: null,
    confirmToken: null,
    loading: false,
    message: [],
    userInfo: {
        email: null,
    }
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmToken: payload.confirmToken,
                userInfo: {
                    email: payload.email,
                }
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case CONFIRM_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CONFIRM_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmToken: null,
                userInfo: {
                    email: null,
                }
            }
        case CONFIRM_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case CLEAR_CONFIRM_TOKEN:
            return {
                ...state,
                confirmToken: null,
            }
        default:
            return;
    }
}

const AuthContext = createContext(initialState);

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}