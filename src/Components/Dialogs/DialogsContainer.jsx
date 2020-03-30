import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withRedirect } from '../../hoc/Recording';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return{
        dialogName:state.dialogPage.dialogData.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />),
        messages:state.dialogPage.messages.map(m => <Message message={m.text} key = {m.id}/>),
        newMassage:state.dialogPage.newMassage,
    }
}


export default compose(
    withRedirect,
    connect(mapStateToProps,{sendMessage})
)(Dialogs)