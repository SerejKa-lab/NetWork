import { profileAPI } from '../Api/api';
import avatar from '../Assets/Images/cvetok-lepestki.jpg'
import { stopSubmit } from 'redux-form';
import {setError, resetError} from './errorsReducer'

const initialState = {
    postsData: [
        {
            name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: 15, id: 'Pavel',
            profileImage: avatar
        },
        {
            name: 'Yuriy', message: 'Hello! How are you', like: 10, id: 'Yuriy',
            profileImage: avatar
        },
        {
            name: 'Katya', message: 'Would you like a cup of tee?', like: 17, id: 'Katya',
            profileImage: avatar
        },
        {
            name: 'Masha', message: "No, i'd like a glass of juice.", like: 17, id: 'Masha',
            profileImage: avatar
        },
        {
            name: 'EasyMan', message: 'Ok. Here it is!', like: 17, id: 'EasyMan',
            profileImage: avatar
        }
    ],
    userProfile: { photos: {}, status: '' },
    profileProgress: { profileIsLoading: false, statusIsLoading: false, profileIsEditing: false }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...state.userProfile, ...action.userProfile }
            }

        case PROFILE_IS_EDITING:
            return {
                ...state,
                profileProgress: { ...state.profileProgress, profileIsEditing: action.isEditing }
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userProfile: { ...state.userProfile, status: action.status }
            }

        case TOGGLE_STATUS_LOADING:
            return {
                ...state,
                profileProgress: { ...state.profileProgress, statusIsLoading: action.loading }
            }

        case ADD_POST:
            const newPost = {
                name: 'Kolya',
                message: action.postText,
                like: null,
                id: Math.random(),
                profileImage: avatar,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };

        case TOGGLE_PROFILE_LOADING:
            return {
                ...state,
                profileProgress: { ...state.profileProgress, profileIsLoading: action.loading }
            }

        default: return state;
    }
}

export default profileReducer;

const TOGGLE_PROFILE_LOADING = 'network/profile/TOGGLE_PROFILE_LOADING';
const toggleProfileLoading = (loading) => ({ type: TOGGLE_PROFILE_LOADING, loading })

const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const setUserProfileAC = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

export const setUserProfile = (userId) => async (dispatch) => {
    try {
        dispatch(toggleProfileLoading(true))
        const response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfileAC(response.data))
        dispatch(toggleProfileLoading(false))
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}

const PROFILE_IS_EDITING = 'network/profile/PROFILE_IS_EDITING'
const toggleProfileEditing = (isEditing) => ({ type: PROFILE_IS_EDITING, isEditing })

export const editMyProfile = (userProfile) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id
        dispatch(toggleProfileEditing(true))
        const response = await profileAPI.editMyProfile(userProfile)
        if (response.data.resultCode === 0) {
            const response = await profileAPI.getUserProfile(userId)
            dispatch(setUserProfileAC(response.data))
            dispatch(toggleProfileEditing(false))
        } else {
            const errorMessage = response.data.messages.length > 0
                ? response.data.messages[0] : 'Error is undefined'
            dispatch(stopSubmit('editProfile', { _error: errorMessage }))
            return Promise.reject('error')
        }
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}

export const setProfilePhoto = (imageFile) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id
        dispatch(toggleProfileEditing(true))
        const response = await profileAPI.setProfilePhoto(imageFile)
        if (response.data.resultCode === 0) {
            const response = await profileAPI.getUserProfile(userId)
            dispatch(setUserProfileAC(response.data))
            dispatch(toggleProfileEditing(false))
        }
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}

const SET_USER_STATUS = 'network/profile/SET_USER_STATUS';
const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status });

export const setUserStatus = (userId) => async (dispatch) => {
    try {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatusAC(response.data))
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}

const TOGGLE_STATUS_LOADING = 'network/profile/TOGGLE_STATUS_LOADING';
const toggleStatusLoading = (loading) => ({ type: TOGGLE_STATUS_LOADING, loading })

export const changeMyStatus = (status) => async (dispatch) => {
    try {
        dispatch(toggleStatusLoading(true))
        const response = await profileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
            dispatch(toggleStatusLoading(false))
        }
    } catch (err) {
        dispatch(setError({ error: err }))
        setTimeout(() => {
            dispatch(resetError())
        }, 3000)
    }
}

const ADD_POST = 'network/profile/ADD-POST';
export const addPost = (postText) => ({ type: ADD_POST, postText });
