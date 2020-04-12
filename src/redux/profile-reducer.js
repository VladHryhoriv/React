import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'


let initionalState = {
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    profile: null,
    status: null
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
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST:{
            return {...state,postsData: state.postsData.filter(p=>p.id != action.postId)}
        }
        default: return state;
    }
}
export const AddPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const DeletePost = (postId)=>({type:DELETE_POST,postId})

export const setAuthMeThunk = () => {
    return (dispatch) => {
        profileAPI.getAuthMe().then(data => {
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
export const DeletePostThunk = (postId) => {
    return (dispatch) => {
        dispatch(DeletePost(postId))
    }
}

export default profileReducer;