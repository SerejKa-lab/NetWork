
const initialState = {
    id: 5330,
    login: "SerejKa",
    email: "seruogacom@mail.ru",
    isAuth: true
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
export const setAuthData = (authData) => ({ type: SET_AUTH_DATA, authData })