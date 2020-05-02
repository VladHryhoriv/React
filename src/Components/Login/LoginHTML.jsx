import React from 'react'
import { LoginReduxForm } from './LoginForm'
import style from './Login.module.css'

export const LoginHTML = (props) => {
    return (
        <>
            <div className={style.wrapper}>
                <h1>LOGIN</h1>
                <LoginReduxForm captchaUrl = {props.captchaUrl} onSubmit={props.onSubmit} isFetching={props.isFetching}/>
            </div>
        </>
    )
}
