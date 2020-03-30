import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './Dialogs.module.css';

const DialogForm = (props)=>{
    return <form onSubmit={props.handleSubmit}> 
        <Field component="textarea" name="messageInput" className={style.input} value={"Message"}/>
        <button className={style.btn_send} >Send</button>
        </form>
}
export const DialogReduxForm = reduxForm({form:"dialog"})(DialogForm)