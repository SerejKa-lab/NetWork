const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';


const initialState = { 
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 33,
}; 

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { 
                ...state, 
                users: [ ...action.users ],
                totalUsersCount: action.totalCount,
                pagesCount: Math.ceil( action.totalCount/state.pageSize )
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

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        default:
            return state
    }
}

const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
const setUsersAC = (users, totalCount) => ({ type: SET_USERS, users, totalCount });

export { toggleFollowAC, setUsersAC, setCurrentPageAC };
export default usersReducer;