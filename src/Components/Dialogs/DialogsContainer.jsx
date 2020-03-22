import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { messageChangeActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withRedirect } from '../../hoc/Recording';

const mapStateToProps = (state) => {
    return{
        dialogName:state.dialogPage.dialogData.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />),
        messages:state.dialogPage.messages.map(m => <Message message={m.text} key = {m.id}/>),
        newMassage:state.dialogPage.newMassage,
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

let AuthRedirectHOC = withRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectHOC)

export default DialogsContainer;