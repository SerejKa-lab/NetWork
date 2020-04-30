import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '077e296e-5c11-448c-9cff-a20ca6e66ed1'
    }
})

export const usersAPI = {

    setUsers(pageSize, page) {
        return instance.get(`/users?count=${pageSize}&page=${page}`)
    },

    setFollow(userId) {
        return instance.post(`/follow/${userId}`)
    },

    setUnfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },

    editMyProfile(profileData) {
        return instance.put('/profile', profileData)
    },

    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    setStatus(status) {
        return instance.put('/profile/status', { status })
    },

    setProfilePhoto(imageFile) {
        let formData = new FormData();
        formData.append("image", imageFile)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    setAuthData() {
        return instance.get('/auth/me')
    },

    logIn(values) {
        return instance.post('/auth/login', { ...values })
    },

    logOut() {
        return instance.delete('/auth/login')
    },

    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    }
}