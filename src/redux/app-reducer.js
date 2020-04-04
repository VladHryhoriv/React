import { getAuthUser } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'
let initionalState = {
    initialized:false
}

const appReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...state,
                initialized:true
            }
        }
        default: return state;
    }
}


export const initializedSuccess = ()=>({type:SET_INITIALIZED})

export const setInitialized = ()=>{
    return(dispatch)=>{
        let promise = dispatch(getAuthUser())
        promise.then(()=>{
            dispatch(initializedSuccess())
        })
    }
}

export default appReducer;