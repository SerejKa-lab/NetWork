import { authAPI } from '../Api/api'
import { stopSubmit } from 'redux-form';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData
            }

        default:
            return state
    }
}


export default authReducer;

const SET_AUTH_DATA = 'network/auth/SET_AUTH_DATA';
const setAuthDataAC = (authData) => ({ type: SET_AUTH_DATA, authData })

export const setAuthData = () => async (dispatch) => {
    const result = await authAPI.setAuthData()
    if (result.data.resultCode === 0) {
        const { id, login, email } = result.data.data;
        dispatch(setAuthDataAC({ id, login, email, isAuth: true }))
    }

}

export const logIn = (values) => async (dispatch) => {
    const res = await authAPI.logIn(values)
    if (res.data.resultCode === 0) {
        dispatch(setAuthData())
    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Error is undefined'
        dispatch(stopSubmit('login', { _error: errorMessage }))
    }
}

export const logOut = () => async (dispatch) => {
    const res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthDataAC({ id: null, login: null, email: null, isAuth: false }))
    }
}