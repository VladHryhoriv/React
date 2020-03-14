const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_IN_MESSAGE = "GHANGE-IN-MESSAGE";
let initionalState = {
    dialogData: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Lena' },
        { id: '3', name: 'Sasha' },
        { id: '4', name: 'Vlad' }
    ],
    messages: [
        { text: 'Hi' },
        { text: 'How are you?' }
    ],
    newMassage: 'message'
}

const dialogReducer = (state = initionalState, action) => {
    switch (action.type) {
        case CHANGE_IN_MESSAGE: {
            return {
                ...state,
                newMassage: action.newText
            }
        }
        case SEND_MESSAGE: {
            return{
                ...state,
                messages : [...state.messages , {text:state.newMassage}],
                newMassage:''
            }
        }
        default: return state;
    }
}
export const sendMessageActionCreator = () => {
    return (
        { type: SEND_MESSAGE }
    )
};
export const messageChangeActionCreator = (text) => {
    return (
        { type: CHANGE_IN_MESSAGE, newText: text }
    );
}
export default dialogReducer;