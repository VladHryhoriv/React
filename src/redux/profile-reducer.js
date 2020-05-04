import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const IS_FETCHING = 'IS_FETCHING'


let initionalState = {
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    profile: null,
    status: null,
    isFetching:false
};



const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                text: action.newPost,
                likeCount: '0'
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile:action.profile}
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST: {
            return { ...state, postsData: state.postsData.filter(p => p.id !== action.postId) }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case IS_FETCHING:{
            return {...state, isFetching:!state.isFetching}
        }
        default: return state;
    }
}
export const AddPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const DeletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const isFetchingSuccess = () => ({ type:IS_FETCHING })


export const setAuthMeThunk = () => {
    return async (dispatch) => {
        let data = await profileAPI.getAuthMe()
        if (data.resultCode === 0) {
            let response = await profileAPI.getUserProfile(data.data.id)
            if (response) {
                dispatch(setUserProfile(response))
            }
            let setStatus = await profileAPI.getUserStatus(data.data.id)
            if (setStatus.status === 200) {
                dispatch(setUserStatus(setStatus.data))
            }
        }
    }
}
export const getUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserProfile(userId)
        if (data) {
            dispatch(setUserProfile(data))
        }
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserStatus(userId)
        if (data.status === 200) {
            dispatch(setUserStatus(data.data))
        }
    }
}
export const putUserStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.putUserStatus(status)
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
    }
}
export const AddPostThunk = (newPost) => {
    return (dispatch) => {
        dispatch(AddPost(newPost))
    }
}
export const DeletePostThunk = (postId) => {
    return (dispatch) => {
        dispatch(DeletePost(postId))
    }
}
export const UpdateProfile = (profile)=>{
    return async (dispatch)=>{
        let resp = await profileAPI.profileUpdate(profile)
        if (resp.data.resultCode === 0){
           dispatch(setUserProfile(profile))
        }
        else{
            dispatch(stopSubmit('edit-profile',{_error:resp.data.messages[0]}))
            return Promise.reject(resp.data.messages[0])
        }
    }
}
export const savePhoto = (file)=>{
    return async (dispatch)=>{
        dispatch(isFetchingSuccess())
        let response = await profileAPI.savePhoto(file)
        if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
        dispatch(isFetchingSuccess())
    }
}
export default profileReducer;