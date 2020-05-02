import React , {PureComponent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withRedirect } from '../../hoc/Recording';
import { compose } from 'redux';
import { getMessages, getDialogData } from '../../redux/DiaogsSelektors';

class DialogContainer extends PureComponent{
    render(){
        return <Dialogs {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        dialogName:getDialogData(state).map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />),
        messages:getMessages(state).map(m => <Message message={m.text} key = {m.id}/>)
    }
}


export default compose(
    withRedirect,
    connect(mapStateToProps,{sendMessage})
)(DialogContainer)