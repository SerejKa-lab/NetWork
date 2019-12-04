const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';


const initialState = { 
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 335,
    isLoading: true
}; 

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const users = action.inList ? [ ...action.users, ...state.users ] : [ ...action.users ];
            return { 
                ...state, 
                users: [ ...users ],
                totalUsersCount: action.totalCount,
                pagesCount: Math.ceil( action.totalCount/state.pageSize )
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return (user.id === action.userId)
                        ? { ...user, followed: !user.followed }
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

const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page});
const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
const setUsers = (users, totalCount, inList) => ({ type: SET_USERS, users, totalCount, inList });
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });

export { toggleFollow, setUsers, setCurrentPage, toggleIsLoading };
export default usersReducer;