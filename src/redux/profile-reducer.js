import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "GHANGE-IN-POSTS"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_FULL_NAME = "SET_FULL_NAME"


let initionalState = {
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    newPostChange: '',
    profile: null,
    fullName: null
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
                text: state.newPostChange,
                likeCount: '0'
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostChange: ''
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_FULL_NAME: {
            return { ...state, fullName: action.name }
        }

        default: return state;
    }
}
export const AddPost = () => ({ type: ADD_POST })
export const ChangeInPost = (text) => ({ type: CHANGE_IN_POST, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setFullName = (name) => ({ type: SET_FULL_NAME, name })

export const setAuthMeThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getAuthMe().then( data => {
            if(data.data.id === undefined){
                userId = 2 ;
            }
            else{
                userId = data.data.id
            }
                profileAPI.getUserProfile(userId).then( response => {
                dispatch(setUserProfile(response))
                })
        })
    }
}

export const getUserProfileThunk = (userId) => {
    return (dispatch)=>{
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
          })
    }
}

export default profileReducer;