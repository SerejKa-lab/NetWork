import { usersAPI } from '../Api/api'
import {setError} from './errorsReducer'

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 336,
    isLoading: false,
    followInProgress: false,
    pagesCount: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            
            let users = []
            if (action.listOrder !== null) {
                if (action.listOrder === true) {
                    users = [...state.users, ...action.users]   // direct order
                } else if (action.listOrder === false) {
                    users = [...action.users, ...state.users]    // reverse order
                } else users = [...action.users]
            } else users = [...action.users]

            return {
                ...state,
                users: [...users],
                totalUsersCount: action.totalCount,
                currentPage: action.currentPage,
                pagesCount: Math.ceil(action.totalCount / state.pageSize)
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return (user.id === action.userId)
                        ? { ...user, followed: action.isFollowed }
                        : user
                })
            }

        case TOGGLE_USER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                users: state.users.map((user) => {
                    return (user.id === action.userId)
                        ? { ...user, followInProgress: action.value }
                        : user
                })
            }

        default:
            return state
    }
}




const TOGGLE_FOLLOW_PROGRESS = 'network/users/TOGGLE_FOLLOW_PROGRESS'
const toggleFollowProgress = (userId, value) => ({ type: TOGGLE_FOLLOW_PROGRESS, userId, value })

const TOGGLE_FOLLOW = 'network/users/TOGGLE_FOLLOW';
const toggleFollow = (userId, isFollowed) => ({ type: TOGGLE_FOLLOW, userId, isFollowed });

export const setFollow = (userId, follow) => async (dispatch) => {
    try {
        dispatch(toggleFollowProgress(userId, true))
        const apiAction = follow ? usersAPI.setFollow(userId) : usersAPI.setUnfollow(userId)
        const response = await apiAction
        if (response.data.resultCode === 0) {
            dispatch(toggleFollow(userId, follow))
            dispatch(toggleFollowProgress(userId, false))
        }
    } catch (err) {
        dispatch(setError({ error: err }))
    }
}

const TOGGLE_USER_LOADING = 'network/users/TOGGLE_USER_LOADING';
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_USER_LOADING, isLoading });

const SET_USERS = 'network/users/SET_USERS';
const setUsersAC = (users, totalCount, currentPage = 1, listOrder) =>
    ({ type: SET_USERS, users, totalCount, currentPage, listOrder });

export const setUsers = (page, listOrder = null) => async (dispatch, getState) => {
    try {
        const { pageSize } = getState().usersPage;
        dispatch(toggleIsLoading(true));
        const response = await usersAPI.setUsers(pageSize, page)
        const { items, totalCount } = response.data;
        dispatch(setUsersAC(items, totalCount, page, listOrder));
        dispatch(toggleIsLoading(false))
    } catch (err) {
        dispatch(toggleIsLoading(false))
        dispatch(setError({ error: err }))
    }
}

export { toggleFollow, toggleFollowProgress };
export default usersReducer;