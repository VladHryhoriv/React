import { headerAPI, profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";
const IS_AUTH_USER = 'IS_AUTH_USER'
const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_FETCHING = 'SET_IS_FETCHING'
let initionalState = {
    userId:null,
    login:null,
    email:null,
    isAuth:false,
    isFetching:false
}

const AuthReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {...state,
                ...action.payload
            }
        }
        case IS_AUTH_USER:{
            return{...state,isAuth:true}
        }
        case SET_IS_FETCHING:{
            return{...state,isFetching:action.isFetching}
        }
        default: return state;
    }
}


export const setAuthUser = (userId,login,email,isAuth)=>({type:SET_AUTH_USER,payload:{userId,login,email,isAuth}})
export const isAuthUser = ()=>({type:IS_AUTH_USER})
export const setIsFetching = (isFetching)=>({type:SET_IS_FETCHING,isFetching})

export const isFetching = (isFetching)=>{
    return(dispatch)=>{
        dispatch(setIsFetching(isFetching))
    }
}

export const getAuthUser = () => {
    return (dispatch)=>{
        return headerAPI.getAuthMe().then((data)=>{
            if(data.resultCode === 1){}
            else{
                let {id,login,email} = data.data
                dispatch(setAuthUser(id,login,email,true))
            }
        })
    }
}

export const Login = (email,password,rememberMe) => {
    return (dispatch)=>{
        isFetching(true)
        profileAPI.Login(email,password,rememberMe).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(getAuthUser())
                isFetching(false)
            }
            else{
                let message = response.data.messages.length>0?response.data.messages[0]:"Some error";
                dispatch(stopSubmit('login',{_error:message}))
                isFetching(true)
            }
        })
    }
}
export const Logout = () => {
    return (dispatch)=>{
        profileAPI.Logout().then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setAuthUser(null,null,null,false))
            }
        })
    }
}
export default AuthReducer;