const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "GHANGE-IN-POSTS"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initionalState={
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    newPostChange: '',
    profile:null
};



const profileReducer=(state=initionalState,action)=>{
    switch(action.type){
        case CHANGE_IN_POST:{
            return{
                ...state,
                newPostChange : action.newText
            }
        }
        case ADD_POST :{
            let newPost = {
                id: '3',
                text: state.newPostChange,
                likeCount: '0'
            }
            return{
                ...state,
                postsData : [...state.postsData,newPost],
                newPostChange : ''
            }
        }
        case SET_USER_PROFILE:{
            return{...state,profile:action.profile}
        }
        default:return state;
    }
}
export const AddPost = ()=>({type:ADD_POST})
export const ChangeInPost = (text)=>({type:CHANGE_IN_POST,newText:text})
export const setUserProfile = (profile)=>({type:SET_USER_PROFILE,profile})
export default profileReducer;