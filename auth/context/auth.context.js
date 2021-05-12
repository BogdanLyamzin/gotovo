import {createContext, useReducer} from "react";
import Cookies from 'js-cookie';
import {
    CLEAR_CONFIRM_TOKEN,
    CONFIRM_FAILURE,
    CONFIRM_REQUEST,
    CONFIRM_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../aut.constants";

const initialState = {
    accessToken: Cookies.get('accessToken') ?? null,
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
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
                loading: false,
                userInfo: payload.userInfo,
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false
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