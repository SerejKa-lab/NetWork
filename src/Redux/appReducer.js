import { setAuthData } from "./authReducer";
import {setError, resetError} from './errorsReducer'



const initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZATION_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        
        default:
            return state
    }

}

export default appReducer;

const INITIALIZATION_SUCCESS = 'network/app/INITIALIZATION_SUCCESS';
const initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS });

export const initializeApp = () => (dispatch) => {
    try {
        const promise = dispatch(setAuthData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializationSuccess())
            })
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}