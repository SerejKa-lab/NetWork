const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';


const initialState = { 
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 335,
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

const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page});
const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
const setUsersAC = (users, totalCount, inList) => ({ type: SET_USERS, users, totalCount, inList });

export { toggleFollowAC, setUsersAC, setCurrentPageAC };
export default usersReducer;