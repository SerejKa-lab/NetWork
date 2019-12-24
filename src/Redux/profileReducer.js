import { profileAPI } from '../Api/api';

const initialState = {
    postsData: [
        {
            name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        }
    ],
    userProfile: { profileIsLoading: false, photos: {}, status: '', statusIsLoading: false}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) { 

        case SET_USER_PROFILE:
            return {
                ...state, 
                userProfile: { ...state.userProfile, ...action.userProfile}
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userProfile: {...state.userProfile, status: action.status}
            }

        case TOGGLE_STATUS_LOADING:
            return {
                ...state,
                userProfile: { ...state.userProfile, statusIsLoading: action.loading }
            }

        case ADD_POST:
            if ( action.postText.trim() !== '' ) {   //проверка на пустую стоку
                let newPost = {
                    name: 'Kolya',
                    message: action.postText,
                    like: '0',
                    id: Math.random(),
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
                    likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
                };
                return { 
                    ...state,
                    postsData: [ ...state.postsData, newPost ],
                };
            } else return state
    
        case TOGGLE_PROFILE_LOADING: 
            return {
                ...state,
                userProfile: { ...state.userProfile, profileIsLoading: action.loading }
            }

        default: return state;
}
}

export default profileReducer;

const TOGGLE_PROFILE_LOADING = 'TOGGLE_PROFILE_LOADING';
const toggleProfileLoading = (loading) => ({ type: TOGGLE_PROFILE_LOADING, loading })

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const setUserProfileAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

export const setUserProfile = (userId) => (dispatch) => {
    dispatch( toggleProfileLoading(true) )
    profileAPI.setUserProfile(userId)
    .then( Response => {
        dispatch(setUserProfileAC(Response.data))
        dispatch( toggleProfileLoading(false) )
    } )
}

const SET_USER_STATUS = 'SET_USER_STATUS';
const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });

export const setUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then( (Response) => {
            dispatch(setUserStatusAC(Response.data))
        } )
}

const TOGGLE_STATUS_LOADING = 'TOGGLE_STATUS_LOADING';
const toggleStatusLoading = (loading) => ({ type: TOGGLE_STATUS_LOADING, loading })

export const changeMyStatus = (status) => (dispatch) => {
    dispatch(toggleStatusLoading(true))
    profileAPI.setStatus(status)
        .then(Response => {
            if (Response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
                dispatch(toggleStatusLoading(false))
            }
        })
}

const ADD_POST = 'ADD-POST';
export const addPost = (postText) => ({ type: ADD_POST, postText });
