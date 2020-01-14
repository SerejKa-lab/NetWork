import { setAuthData } from "./authReducer";



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

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';
const initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS });

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(setAuthData())
    Promise.all([promise])
        .then( () => {
            dispatch(initializationSuccess())} )
}