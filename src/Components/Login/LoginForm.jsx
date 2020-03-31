import { Field, reduxForm } from "redux-form"
import React from 'react'
import style from './Login.module.css'
import { Input } from "../Common/FormInput/FormInput";
import { require, MaxLength } from "../../Validators/Validate";

const maxLength50 = MaxLength(50);
const maxLength32 = MaxLength(32);


const LoginForm = (props) =>{
    return <>
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            <Field placeholder='Login' name='email' type={"text"} component={Input} validate={[require,maxLength50]} className={style.passInput +' ' + style.items}/>
            <Field placeholder='Password' name='password' type={"password"} component={Input} validate={[require,maxLength32]} className={style.passInput +' '+ style.items}/>
            <div className={style.wrapperCheck}><Field component='input' name='rememberMe' type="checkbox" className={style.checkbox}/> Remember Me</div>
            <button className={style.btn }>Login</button>
        </form>
    </>
}

export const LoginReduxForm = reduxForm({form:"login"})(LoginForm)



