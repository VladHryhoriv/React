import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
   
    let dialogName = props.dialogName.map((d) => <DialogItem id={d.id} name={d.name} />);
    let messages = props.messages.map(m=> <Message message={m.text}/>);
    let sendMassageText = React.createRef();
    let sendMassages = () => {
        props.sendMassage(sendMassageText.current.value);
    }
    let messageChange= ()=>{
        props.messageChange(sendMassageText.current.value);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogName}
            </div>
            <div className={style.messages}>
            {messages}
                <div className={style.text_area}>
                    <textarea className={style.text_area} ref={sendMassageText} onChange={messageChange} value={props.newMassage}></textarea>
                    <input type="button" value="Send" onClick={sendMassages}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;