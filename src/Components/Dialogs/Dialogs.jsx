import React from 'react';
import style from './Dialogs.module.css';
import { DialogReduxForm } from './DialogReduxForm';


const Dialogs = React.memo((props) => {
    let onSubmit = (formData)=>{
        props.sendMessage(formData.messageInput)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {props.dialogName}
            </div>
            <div className={style.messages}>
            {props.messages}
                <div className={style.text_area}>
                    <DialogReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
})

export default Dialogs;