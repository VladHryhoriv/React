import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './Dialogs.module.css';
import { Input } from '../Common/FormInput/FormInput';
import { require, MaxLength } from '../../Validators/Validate';

const maxLength30 = MaxLength(30);

const DialogForm = (props)=>{
    return <form onSubmit={props.handleSubmit}> 
        <Field component={Input} validate={[require,maxLength30]} name="messageInput" className={style.input} value={"Message"}/>
        <button className={style.btn_send} >Send</button>
        </form>
}
export const DialogReduxForm = reduxForm({form:"dialog"})(DialogForm)