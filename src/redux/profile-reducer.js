const ADD_POST = "ADD-POST";
const CHANGE_IN_POST = "GHANGE-IN-POSTS"

let initionalState={
    postsData: [
        { id: '1', text: 'Hello World !!!', likeCount: '12' },
        { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
        { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
        { id: '4', text: 'DDDDDD ?', likeCount: '100' }
    ],
    newPostChange: 'it-kamasutra '
};



const profileReducer=(state=initionalState,action)=>{
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