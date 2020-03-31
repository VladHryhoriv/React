import { headerAPI, profileAPI } from "../API/api";
const IS_AUTH_USER = 'IS_AUTH_USER'
const SET_AUTH_USER = "SET_AUTH_USER";
let initionalState = {
    userId:null,
    login:null,
    email:null,
    isAuth:false
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
        default: return state;
    }
}


export const setAuthUser = (userId,login,email,isAuth)=>({type:SET_AUTH_USER,payload:{userId,login,email,isAuth}})
export const isAuthUser = ()=>({type:IS_AUTH_USER})

export const getAuthUser = () => {
    return (dispatch)=>{
        headerAPI.getAuthMe().then((data)=>{
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
        profileAPI.Login(email,password,rememberMe).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(getAuthUser())
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