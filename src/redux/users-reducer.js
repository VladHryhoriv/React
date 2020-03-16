const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"; 
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"; 
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"; 
const SET_IF_FETCHING = "SET_IF_FETCHING";

let initionalState = {
    users:[],
    totalUserCount:0,
    currentPage:1,
    userSize:5,
    isFetching:false
}

const usersReducer = (state = initionalState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return{...state,users:action.users}
        }
        case SET_TOTAL_USER_COUNT:{
            return{...state,totalUserCount:action.totalUserCount}
        }
        case SET_CURRENT_PAGE:{
            return{...state,currentPage:action.currentPage}
        }
        case SET_IF_FETCHING:{
            return{...state,isFetching:action.isFetching}
        }
        default: return state;
    }
}
export const Follow = (userId) => ({ type: FOLLOW, userId })
export const Unfollow = (userId) =>({ type: UNFOLLOW, userId })
export const setUsers = (users) =>({ type: SET_USERS, users })
export const setTotalUserCount = (totalCount) =>({ type: SET_TOTAL_USER_COUNT, totalUserCount:totalCount })
export const setCurrentPage = (count) =>({ type: SET_CURRENT_PAGE, currentPage:count })
export const setIsFetching = (isFetching)=>({type:SET_IF_FETCHING,isFetching})

export default usersReducer;