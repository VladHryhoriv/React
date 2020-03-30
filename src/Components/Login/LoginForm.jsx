import { Field, reduxForm } from "redux-form"
import React from 'react'
import style from './Login.module.css'
import classNames from 'classnames';

const LoginForm = (props) =>{
    return <>
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            <Field placeholder='Login' name='login' component='input' className={classNames(style.passInput , style.items)}/>
            <Field placeholder='Password' name='password' component='input' className={classNames(style.passInput , style.items)}/>
            <div className={style.wrapperCheck}><Field component='input' name='rememberMe' type="checkbox" className={style.checkbox}/> Remember Me</div>
            <button className={style.btn }>Login</button>
        </form>
    </>
}

export const LoginReduxForm = reduxForm({form:"login"})(LoginForm)



