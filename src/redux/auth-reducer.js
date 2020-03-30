import { headerAPI } from "../API/api";
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
                userId:action.userData.id,
                login:action.userData.login,
                email:action.userData.email,
                isAuth:true
            }
        }
        case IS_AUTH_USER:{
            return{...state,isAuth:true}
        }
        default: return state;
    }
}


export const setAuthUser = (userData)=>({type:SET_AUTH_USER,userData})
export const isAuthUser = ()=>({type:IS_AUTH_USER})

export const getAuthUser = () => {
    return (dispatch)=>{
        headerAPI.getAuthMe().then((data)=>{
            if(data.resultCode === 1){}
            else{
                dispatch(setAuthUser(data.data))
            }
        })
    }
}

export const isAuthUserThunk = () => {
    return (dispatch)=>{
        dispatch(isAuthUser())
    }
}
export default AuthReducer;