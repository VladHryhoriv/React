import React from 'react'
import { reduxForm } from 'redux-form'
import style from './MyPost.module.css';
import { require, MaxLength } from '../../../Validators/Validate';
import { Input } from '../../Common/FormInput/FormInput';
import {createField} from '../../Common/Field/Field'

const maxLength30 = MaxLength(30)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            {createField('The best site for PROGRAMING','yourPost','text',Input,[require,maxLength30],style.your_post,null)}
            <div className={style.wrapper_button}>
                <button className={style.but_send}>Publish</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form:"addPost"})(AddPostForm)