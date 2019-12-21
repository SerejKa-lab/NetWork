import { usersAPI } from '../Api/api'

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
            const users = action.inList ? [ ...action.users, ...state.users ] : [ ...action.users ];
            return { 
                ...state, 
                users: [ ...users ],
                totalUsersCount: action.totalCount,
                currentPage: action.currentPage,
                pagesCount: Math.ceil( action.totalCount/state.pageSize )
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
        
        case TOGGLE_IS_LOADING:
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




const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'
const toggleFollowProgress = (userId, value) => ({ type: TOGGLE_FOLLOW_PROGRESS, userId, value })

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const toggleFollow = (userId, isFollowed) => ({ type: TOGGLE_FOLLOW, userId, isFollowed });

export const setFollow = (userId, follow) => (dispatch) => {
    dispatch(toggleFollowProgress(userId, true))
    const apiAction = follow ? usersAPI.setFollow(userId) : usersAPI.setUnfollow(userId)
    apiAction.then(res => {
        if (res.data.resultCode === 0) {
            dispatch(toggleFollow(userId, follow))
            dispatch(toggleFollowProgress(userId, false))
        }
    })
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });

const SET_USERS = 'SET_USERS';
const setUsersAC = (users, totalCount, currentPage = 1, inList) => 
    ({ type: SET_USERS, users, totalCount, currentPage, inList });

export const setUsers = (page, inList) => (dispatch, getState) => {
    const {pageSize} = getState().usersPage;
    dispatch(toggleIsLoading(true));
    usersAPI.setUsers(pageSize, page)
        .then(Response => {
            const { items, totalCount } = Response.data;
            dispatch( setUsersAC(items, totalCount, page, inList) );
            dispatch(toggleIsLoading(false))
        })
}

export { toggleFollow, toggleFollowProgress };
export default usersReducer;