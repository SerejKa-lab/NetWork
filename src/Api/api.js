import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0'
    }
})

export const usersAPI = {

    setUsers (pageSize, page) {
        return instance.get(`/users?count=${pageSize}&page=${page}`)
    },

    setFollow (userId) {
        return instance.post(`/follow/${userId}`)
    },

    setUnfollow (userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    setUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    setStatus(status) {
        return instance.put('/profile/status', { status } )
    }
}

export const authAPI = {
    setAuthData() {
        return instance.get('/auth/me' )
    },

    logIn(values) {
        return instance.post('/auth/login', {...values, captcha: false})
    },

    logOut() {
        return instance.delete('/auth/login')
    }
}