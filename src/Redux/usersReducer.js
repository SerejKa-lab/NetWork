const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';


const initialState = { users: [] }; 
    
// users: [
//     {
//         id: 0, follow: true, name: 'Katya', status: 'Hi there!', location: { country: 'Russia', city: 'Moskow' },
//         photo: 'https://avatars.mds.yandex.net/get-pdb/1943199/39401561-8fc2-4e15-8562-0b26330403ce/s1200?webp=false'
//     },
//     {
//         id: 1, follow: false, name: 'Karolina', status: 'Hi there!', location: { country: 'Ukrain', city: 'Kiev' },
//         photo: 'https://newsone.ua/img/article/892/20_original.jpg'
//     },
//     {
//         id: 2, follow: true, name: 'Katrin', status: 'Hi there!', location: { country: 'Great Britan', city: 'London' },
//         photo: 'https://i.scdn.co/image/fefa9bad33ddd21d606a6ca192aab86e31f3a84f'
//     },
//     {
//         id: 3, follow: false, name: 'Lena', status: 'Hi there!', location: { country: 'Ukrain', city: 'Kiev' },
//         photo: 'https://from-ua.com/upload/articles/2019/06/06/medium/1559832590_2.png'
//     },
// ]


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ] }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    return (user.id === action.userId) 
                    ? { ...user, followed: !user.followed }
                    : user
                })
            }

        default:
            return state
    }
}
const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
const setUsersAC = (users) => ({ type: SET_USERS, users });

export { toggleFollowAC, setUsersAC };
export default usersReducer;