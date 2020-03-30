import React from 'react'
import { reduxForm, Field } from 'redux-form'
import style from './MyPost.module.css';


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.wrapperForm}>
            <Field placeholder='The best site for PROGRAMING' name='yourPost' className={style.your_post} value={props.newPostChange} component='input'/>
            <div className={style.wrapper_button}>
                <button className={style.but_send}>Publish</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form:"addPost"})(AddPostForm)