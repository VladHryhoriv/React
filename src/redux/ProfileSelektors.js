export const getPosts=(state)=>{
    return state.profilePage.postsData
}
export const getProfile=(state)=>{
    return state.profilePage.profile
}
export const getStatus=(state)=>{
    return state.profilePage.status
}
export const getAuthorizeUserId=(state)=>{
    return state.auth.userId;
}
export const getIsFetching=(state)=>{
    return state.profilePage.isFetching
}