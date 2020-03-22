import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"ba99b8bc-8e9e-4106-81b9-e899c7354618"
    }
})

export const userAPI = {
    getUser(currentPage=1,userSize=5){
        return instance.get(`users?page=${currentPage}&count=${userSize}`).then(response=>response.data)
    },
    getUserOnChange(currentPage=1,userSize=5){
        return instance.get(`users?page=${currentPage}&count=${userSize}`).then(response=>response.data)
    },
    Unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response=>{
            if(response.data.resultCode === 0){
                return response.data
            }
        })
    },
    Follow(userId){
        return instance.post(`follow/${userId}`,{}).then(response=>{
            if(response.data.resultCode === 0){
                return response.data
            }
        })
    }
}
export const headerAPI = {
    getAuthMe(){
        return instance.get(`auth/me`).then(response=>{
            return response.data
        })
    }
}
export const profileAPI = {
    getUserProfile(Id){
        return instance.get(`profile/${Id}`).then(response=>response.data)
    },
    getAuthMe(){
        return instance.get(`auth/me`).then(response=>{
                return response.data
        })
    }
}