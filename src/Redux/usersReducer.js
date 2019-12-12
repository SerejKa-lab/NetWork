const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';


const initialState = { 
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 336,
    isLoading: true,
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

        default:
            return state
    }
}

const toggleFollow = (userId, isFollowed) => ({ type: TOGGLE_FOLLOW, userId, isFollowed });
const setUsers = (users, totalCount, currentPage = 1, inList) => 
    ({ type: SET_USERS, users, totalCount, currentPage, inList });
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });

export { toggleFollow, setUsers, toggleIsLoading };
export default usersReducer;