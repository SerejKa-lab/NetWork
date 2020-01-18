import { profileAPI } from '../Api/api';
import avatar from '../Assets/Images/cvetok-lepestki.jpg'
import like from '../Assets/Images/like.jpg'

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
            const newPost = {
                name: 'Kolya',
                message: action.postText,
                like: '0',
                id: Math.random(),
                profileImage: avatar,
                likesImage: like
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };

        case TOGGLE_PROFILE_LOADING:
            return {
                ...state,
                userProfile: { ...state.userProfile, profileIsLoading: action.loading }
            }

        default: return state;
}
}

export default profileReducer;

const TOGGLE_PROFILE_LOADING = 'network/profile/TOGGLE_PROFILE_LOADING';
const toggleProfileLoading = (loading) => ({ type: TOGGLE_PROFILE_LOADING, loading })

const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const setUserProfileAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

export const setUserProfile = (userId) => async(dispatch) => {
    dispatch(toggleProfileLoading(true))
    const response = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfileAC(response.data))
    dispatch(toggleProfileLoading(false))
}

const SET_USER_STATUS = 'network/profile/SET_USER_STATUS';
const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });

export const setUserStatus = (userId) => async(dispatch) => {
    const response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatusAC(response.data))
}

const TOGGLE_STATUS_LOADING = 'network/profile/TOGGLE_STATUS_LOADING';
const toggleStatusLoading = (loading) => ({ type: TOGGLE_STATUS_LOADING, loading })

export const changeMyStatus = (status) => async(dispatch) => {
    dispatch(toggleStatusLoading(true))
    const response = await profileAPI.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
        dispatch(toggleStatusLoading(false))
    }
}

const ADD_POST = 'network/profile/ADD-POST';
export const addPost = (postText) => ({ type: ADD_POST, postText });
