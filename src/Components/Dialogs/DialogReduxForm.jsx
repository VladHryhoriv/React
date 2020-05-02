import React from 'react'
import { reduxForm } from 'redux-form'
import style from './Dialogs.module.css';
import { Input } from '../Common/FormInput/FormInput';
import { require, MaxLength } from '../../Validators/Validate';
import { createField } from '../Common/Field/Field';

const maxLength30 = MaxLength(30);

const DialogForm = (props)=>{
    return <form onSubmit={props.handleSubmit}> 
        {createField(null,"messageInput",'text',Input,[require,maxLength30],style.input,"Message")}
        <button className={style.btn_send} >Send</button>
        </form>
}
export const DialogReduxForm = reduxForm({form:"dialog"})(DialogForm)