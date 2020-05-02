

export const require=(value)=>{
    if(!value) {
        return "Field is require"
    }
    else{
        return undefined
    }
}

export const MaxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}