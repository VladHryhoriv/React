import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { messageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let dialogName = props.dialogPage.dialogData.map((d) => <DialogItem id={d.id} name={d.name} />);
    let messages = props.dialogPage.messages.map(m=> <Message message={m.text}/>);
    let sendMassages = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let messageChange= (e)=>{
        let newtxt = e.target.value;
        props.dispatch(messageChangeActionCreator(newtxt));
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogName}
            </div>
            <div className={style.messages}>
            {messages}
                <div className={style.text_area}>
                    <textarea className={style.text_area} onChange={messageChange} value={props.dialogPage.newMassage}></textarea>
                    <input type="button" value="Send" onClick={sendMassages}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;