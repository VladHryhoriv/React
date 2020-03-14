import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { messageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


// const DialogsContainer = (props) => {

//     return <StoreContext.Consumer>{
//             (store) => {
//                 let dialogName = store.getState().dialogPage.dialogData.map((d) => <DialogItem id={d.id} name={d.name} />);
//                 let messages = store.getState().dialogPage.messages.map(m => <Message message={m.text} />);
//                 let newMassage = store.getState().dialogPage.newMassage;
//                 let sendMassages = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//                 let messageChange = (newtxt) => {
//                     store.dispatch(messageChangeActionCreator(newtxt));
//                 }
//                 return (
//                     <Dialogs //dialogName={dialogName} 
//                     //messages={messages} 
//                     sendMessageAction={sendMassages} 
//                     //newMassage={newMassage} 
//                     messageChangeAction={messageChange} />
//                 )
//             }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return{
        dialogName:state.dialogPage.dialogData.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />),
        messages:state.dialogPage.messages.map(m => <Message message={m.text} key = {m.id}/>),
        newMassage:state.dialogPage.newMassage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessageAction:() => {
            dispatch(sendMessageActionCreator())
        },
        messageChangeAction:(newtxt) => {
            dispatch(messageChangeActionCreator(newtxt))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;