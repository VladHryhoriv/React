import React from 'react'
import { reduxForm, Field } from 'redux-form'
import style from './MyPost.module.css';
import { require, MaxLength } from '../../../Validators/Validate';
import { Input } from '../../Common/FormInput/FormInput';

const maxLength30 = MaxLength(30)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            <Field placeholder='The best site for PROGRAMING' name='yourPost'
             className={style.your_post} 
             validate={[require,maxLength30]}
             component={Input}/>
            <div className={style.wrapper_button}>
                <button className={style.but_send}>Publish</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form:"addPost"})(AddPostForm)