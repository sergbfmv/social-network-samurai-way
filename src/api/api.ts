import axios from "axios";
import {ProfileType} from "../redux/ProfileReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ea044914-fa83-4538-816d-71cacce93c91'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },

    getProfile(userId: number) {
        console.warn('Obsolete method. Please, use profileAPI')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: string) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string = '') {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return  instance.get(`security/get-captcha-url`)
    }
}
