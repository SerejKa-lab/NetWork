import { authAPI } from '../Api/api'

const initialState = {
    id: '',
    login: '',
    email: '',
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
                    dispatch(setAuthDataAC({...res.data.data, isAuth: true}))
                }
            })
}