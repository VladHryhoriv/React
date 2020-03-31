import React from 'react'
import style from './FormInput.module.css'



export const Input = ({input,meta,...props})=>{
    const hasError= meta.error && meta.touched
    return<div className={style.wrapperInput + ' ' +(hasError ? style.error:' ')}>
        <input {...input} {...props}/>
        <div>
           {hasError?<span className={style.textError}>{meta.error}</span>:''} 
        </div>
    </div>
}