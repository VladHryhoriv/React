//import { isFetching } from "../redux/auth-reducer"


export const require=(value)=>{
    if(!value) {
        return "Field is require"
    }
    else{
        return undefined
    }
}

export const MaxLength=(maxLength)=>(value)=>{
    if(value.length>maxLength) {
        return "Max length is 30 symbols"
}
else{
    return undefined
}
}