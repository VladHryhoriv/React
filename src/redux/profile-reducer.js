import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "GHANGE-IN-POSTS"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_FULL_NAME = "SET_FULL_NAME"
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_ID = 'SET_USER_ID'


let initionalState = {
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    profile: null,
    fullName: null,
    status: null,
    userId: null
};



const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case CHANGE_IN_POST: {
            return {
                ...state,
                newPostChange: action.newText
            }
        }
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
            return { ...state, profile: action.profile }
        }
        case SET_FULL_NAME: {
            return { ...state, fullName: action.name }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USER_ID: {
            return { ...state, userId: action.id }
        }
        default: return state;
    }
}
export const AddPost = (newPost) => ({ type: ADD_POST, newPost })
export const ChangeInPost = (text) => ({ type: CHANGE_IN_POST, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setFullName = (name) => ({ type: SET_FULL_NAME, name })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserId = (id) => ({ type: SET_USER_ID, id })

export const setAuthMeThunk = () => {
    return (dispatch) => {
        profileAPI.getAuthMe().then(data => {
            dispatch(setUserId(data.data.id))
            profileAPI.getUserProfile(data.data.id).then(response => {
                dispatch(setUserProfile(response))
            })
            profileAPI.getUserStatus(data.data.id).then(data => {
                dispatch(setUserStatus(data.data))
            })
        })
    }
}
export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(setUserId(userId))
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatus(data.data))
        })
    }
}
export const putUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.putUserStatus(status).then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}
export const AddPostThunk = (newPost) => {
    return (dispatch) => {
        dispatch(AddPost(newPost))
    }
}

export default profileReducer;