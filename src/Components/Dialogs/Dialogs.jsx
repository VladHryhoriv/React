import React from 'react';
import style from './Dialogs.module.css';


const Dialogs = (props) => {
    let sendMassages = () => {
        props.sendMessageAction();
    }
    let messageChange= (e)=>{
        let newtxt = e.target.value;
        props.messageChangeAction(newtxt);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {props.dialogName}
            </div>
            <div className={style.messages}>
            {props.messages}
                <div className={style.text_area}>
                    <textarea className={style.input} onChange={messageChange} value={props.newMassage}></textarea>
                    <input className={style.btn_send} type="button" value="Send" onClick={sendMassages}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;