const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "GHANGE-IN-POSTS"

const profileReducer=(state,action)=>{
    switch(action.type){
        case CHANGE_IN_POST:
            state.newPostChange = action.newText;
            return state;
        case ADD_POST :
            let newPost = {
                id: '3',
                text: state.newPostChange,
                likeCount: '0'
            }
            console.log(state)
            state.postsData.push(newPost);
            state.newPostChange = '';
            return state;
        default:return state;
    }
}
export const AddPostActionCreator = ()=>{
    return(
        {type:ADD_POST}
    )
}
export const ChangeInPostActionCreator = (text)=>{
    return(
        {type:CHANGE_IN_POST,newText:text}
    )
}
export default profileReducer;