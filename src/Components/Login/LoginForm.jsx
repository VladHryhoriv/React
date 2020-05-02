import { reduxForm } from "redux-form"
import React from 'react'
import style from './Login.module.css'
import { Input } from "../Common/FormInput/FormInput";
import { require, MaxLength } from "../../Validators/Validate";
import { createField } from "../Common/Field/Field";

const maxLength50 = MaxLength(50);
const maxLength32 = MaxLength(32);


const LoginForm = (props) =>{
    return <>
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            {createField('Login','email',"text",Input,[require,maxLength50],style.passInput +' ' + style.items,null)}
            {createField('Password','password',"password",Input,[require,maxLength32],style.passInput +' '+ style.items,null)}
            {props.captchaUrl && <img src={props.captchaUrl} alt='CaptchaImage'></img>}
            {props.captchaUrl && createField('Symbols on image','captcha','text',Input,[require],'',null)}
            {props.error?<div className={style.someError}>{props.error}</div>:""}
            <div className={style.wrapperCheck}>
                {createField('','rememberMe',"checkbox",Input,[],'style.checkbox','')} Remember Me</div>
            <button className={style.btn } disabled={props.isFetching}>Login</button>
        </form>
    </>
}

export const LoginReduxForm = reduxForm({form:"login"})(LoginForm)



