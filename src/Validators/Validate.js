export const require=(value)=>{
    if(!value) return "Field is require"
    return undefined
}

export const MaxLength=(maxLength)=>(value)=>{
    if(value.length>maxLength) return "Max length is 30 symbols"
    return undefined
}