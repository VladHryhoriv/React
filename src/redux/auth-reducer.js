import { headerAPI } from "../API/api";

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
        default: return state;
    }
}


export const setAuthUser = (userData)=>({type:SET_AUTH_USER,userData})
// export const setAuthMeThunk = (userId) => {
//     return (dispatch) => {
//         profileAPI.getAuthMe().then( data => {
//             if(data.data.id){
//             }
//             userId = data.data.id
//             profileAPI.getUserProfile(userId).then( response => {
//                dispatch(setUserProfile(response))
//             })
//         })
//     }
// }
export const getAuthUser = () =>{
    return (dispatch)=>{
        headerAPI.getAuthMe().then((data)=>{
            if(data.resultCode === 1){}
            else{
                dispatch(setAuthUser(data.data))
            }
        })
    }
}
export default AuthReducer;