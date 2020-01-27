const initialState = {error: null}

const errorReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                ...action.payload
            }

        case RESET_ERROR:
            return {error: null}

        default:
            return state
    }
}

export default errorReducer

const SET_ERROR = 'SET_ERROR'
export const setError = (payload) => ({type: SET_ERROR, payload})

const RESET_ERROR = 'RESET_ERROR'
export const resetError = () => ({type: RESET_ERROR})