import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import Cookies from "js-cookie";
import {
  CLEAR_CONFIRM_TOKEN,
  CONFIRM_FAILURE,
  CONFIRM_REQUEST,
  CONFIRM_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_TOKEN,
} from "../aut.constants";

const initialState = {
  accessToken: (Cookies && Cookies.get("accessToken")) || null,
  confirmToken: null,
  loading: false,
  message: [],
  userInfo: {
    email: null,
  },
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmToken: payload.confirmToken,
        userInfo: {
          email: payload.email,
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        accessToken: payload,
      };
    case CONFIRM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmToken: null,
        userInfo: {
          email: null,
        },
      };
    case CONFIRM_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_CONFIRM_TOKEN:
      return {
        ...state,
        confirmToken: null,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
        loading: false,
        userInfo: payload.userInfo,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
      };
    default:
      return;
  }
};

const AuthContext = createContext(initialState);

const setTokenAction = (payload) => ({
  type: SET_TOKEN,
  payload,
});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setToken = useCallback(
    (token) => dispatch(setTokenAction(token)),
    [dispatch]
  );

  useEffect(() => {
    if (Cookies.get("accessToken")) {
      setToken(Cookies.get("accessToken"));
    }
  }, []);

  useEffect(() => {
    Cookies.set("accessToken", state.accessToken);
  }, [state.accessToken]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
