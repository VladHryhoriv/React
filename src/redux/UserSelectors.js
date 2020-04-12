export const getUsers = (state)=>{
    return state.userPage.users
}
export const getTotalUserCount = (state)=>{
    return state.userPage.totalUserCount
}
export const getCurrentPage = (state)=>{
    return state.userPage.currentPage
}
export const getUserSize = (state)=>{
    return state.userPage.userSize
}
export const getIsFetching = (state)=>{
    return state.userPage.isFetching
}
export const getFollowingProgress = (state)=>{
    return state.userPage.FollowingProgress
}


