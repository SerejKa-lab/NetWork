import { authAPI } from '../Api/api'

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

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const setAuthDataAC = (authData) => ({ type: SET_AUTH_DATA, authData })

export const setAuthData = () => (dispatch) => {
    authAPI.setAuthData()
            .then(res => { 
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data;
                    dispatch(setAuthDataAC({ id, login, email, isAuth: true}))
                }
            })
}

export const logIn = (values) => (dispatch) => {
    authAPI.logIn(values)
        .then( res => {
            if (res.data.resultCode === 0) {
               dispatch( setAuthData())
            }
        } )
}

export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then( res => {
            if (res.data.resultCode === 0) {
               dispatch(setAuthDataAC({id: null, login: null, email: null, isAuth: false}))
            }
        } )
}