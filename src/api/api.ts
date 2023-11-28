import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
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

    getProfile(userId: string) {
        console.warn('Obsolete method. Please, use profileAPI')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
