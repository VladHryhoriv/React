import { headerAPI, profileAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";
const IS_AUTH_USER = 'IS_AUTH_USER'
const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'
let initionalState = {
    userId:null,
    login:null,
    email:null,
    isAuth:false,
    isFetching:false,
    captchaUrl:null
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
        case GET_CAPTCHA_URL_SUCCESS:{
            return{...state,captchaUrl:action.captchaUrl}
        }
        default: return state;
    }
}


export const setAuthUser = (userId,login,email,isAuth)=>({type:SET_AUTH_USER,payload:{userId,login,email,isAuth}})
export const isAuthUser = ()=>({type:IS_AUTH_USER})
export const setIsFetching = (isFetching)=>({type:SET_IS_FETCHING,isFetching})
const getCaptchaUrlSuccess = (captchaUrl)=>({type:GET_CAPTCHA_URL_SUCCESS,captchaUrl})

export const isFetching = (isFetching)=>{
    return(dispatch)=>{
        dispatch(setIsFetching(isFetching))
    }
}

export const getAuthUser = () => {
    return async (dispatch)=>{
        let data = await headerAPI.getAuthMe()
            if(data.resultCode === 1){}
            else{
                let {id,login,email} = data.data
                dispatch(setAuthUser(id,login,email,true))
            }
    }
}
export const Captcha=()=>{
    return async (dispatch)=>{
        const response = await securityAPI.getCaptchaUrl();
        dispatch(getCaptchaUrlSuccess(response.data.url))
    }
}
export const Login = (email,password,rememberMe=false,captcha=null) => {
    return async (dispatch)=>{
        isFetching(true)
        let response = await profileAPI.Login(email,password,rememberMe,captcha)
            if(response.data.resultCode === 0){
                dispatch(getAuthUser())
                isFetching(false)
            }
            else{
                if(response.data.resultCode === 10){
                    dispatch(Captcha())
                }
                let message = response.data.messages.length>0?response.data.messages[0]:"Some error";
                dispatch(stopSubmit('login',{_error:message}))
                isFetching(true)
            }
    }
}
export const Logout = () => {
    return async (dispatch)=>{
        let response = await profileAPI.Logout()
            if(response.data.resultCode === 0){
                dispatch(setAuthUser(null,null,null,false))
            }
    }
}
export default AuthReducer;