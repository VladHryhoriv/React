import { userAPI } from "../API/api";
import { FollowUnfollowCase } from "../Components/Common/Helpers/FollowUnfollowCase/FollowUnfollowCase";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"; 
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"; 
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"; 
const SET_IF_FETCHING = "SET_IF_FETCHING";
const IS_TOGGLE_FOLLOWING = "IS_TOGGLE_FOLLOWING";

let initionalState = {
    users:[],
    totalUserCount:0,
    currentPage:1,
    userSize:5,
    isFetching:false,
    FollowingProgress:[],
}

const usersReducer = (state = initionalState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                 users:
                 FollowUnfollowCase(state.users,action.userId,true)
                
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users:
                FollowUnfollowCase(state.users,action.userId,false)
                
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
        case IS_TOGGLE_FOLLOWING:{
            return {
                ...state, FollowingProgress: action.isFollowing 
                ? [...state.FollowingProgress,action.userId]
                : state.FollowingProgress.filter(id=>id !== action.userId)
            }
        }
        default: return state;
    }
}
export const FollowSuccess = (userId) => ({ type: FOLLOW, userId })
export const UnfollowSuccess = (userId) =>({ type: UNFOLLOW, userId })
export const setUsers = (users) =>({ type: SET_USERS, users })
export const setTotalUserCount = (totalCount) =>({ type: SET_TOTAL_USER_COUNT, totalUserCount:totalCount })
export const setCurrentPage = (count) =>({ type: SET_CURRENT_PAGE, currentPage:count })
export const setIsFetching = (isFetching)=>({type:SET_IF_FETCHING,isFetching})
export const isToggleFollowing = (isFollowing,userId)=>({type:IS_TOGGLE_FOLLOWING,isFollowing,userId}) 

const FollowUnfollowFunc = async(api,dispatch,actionCreator,userID)=>{
    dispatch(isToggleFollowing(true,userID))
    await api(userID)
        dispatch(actionCreator)
        dispatch(isToggleFollowing(false,userID))
}

export const getUsersThunk = (currentPage,userSize)=>{
    return async(dispatch)=>{
        dispatch(setIsFetching(true))
           let data = await userAPI.getUser(currentPage,userSize)
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))
    }
}
export const getFollowThunk = (userID)=>{
    return (dispatch)=>{
        FollowUnfollowFunc(userAPI.Follow,dispatch,FollowSuccess(userID),userID)
    }
}
export const getUnfollowThunk = (userID)=>{
    return (dispatch)=>{
        FollowUnfollowFunc(userAPI.Unfollow,dispatch,UnfollowSuccess(userID),userID)
    }
}
export const getCurrentPageThunk = (currentPage)=>{
    return (dispatch)=>{
        dispatch(setCurrentPage(currentPage))
    }
}

export default usersReducer;