import { authAPI } from '../Api/api'
import { stopSubmit } from 'redux-form';

const initialState = {
    id: null,
    login: null,
    email: null,
    captchaUrl: null,
    captchaCheck: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA:
        case SET_CAPTCHA_MODE:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}


export default authReducer;

const SET_AUTH_DATA = 'network/auth/SET_AUTH_DATA';
const setAuthDataAC = (data) => ({ type: SET_AUTH_DATA, data })

export const setAuthData = () => async (dispatch) => {
    const response = await authAPI.setAuthData()
    if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthDataAC({ id, login, email, isAuth: true }))
    }

}

const SET_CAPTCHA_MODE = 'SET_CAPTCHA_MODE'
const setCaptchaMode = (data) => ({ type: SET_CAPTCHA_MODE, data })

export const logIn = (values) => async (dispatch, getState) => {
    const res = await authAPI.logIn(values)
    if (res.data.resultCode === 0) {
        dispatch(setAuthData())
        if (getState().auth.captchaCheck) {
            dispatch(setCaptchaMode({captchaCheck: false, captchaUrl: null}))
        }
    } else {
        const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Error is undefined'
        const errCode = res.data.resultCode;
        if (errCode === 10) {
            dispatch(stopSubmit('login', { _error: errorMessage } ))
            const response = await authAPI.getCaptcha()
            dispatch(setCaptchaMode({captchaCheck: true, captchaUrl: response.data.url}))
        } else dispatch(stopSubmit('login', { _error: errorMessage } ))
    }
}

export const logOut = () => async (dispatch) => {
    const res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthDataAC({ id: null, login: null, email: null, captcha: null, isAuth: false }))
    }
}