const SEND_MESSAGE = "SEND-MESSAGE";
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
    ]
}

const dialogReducer = (state = initionalState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return{
                ...state,
                messages : [...state.messages , {text:action.newMessage}]
            }
        }
        default: return state;
    }
}
const sendMessageActionCreator = (newMessage) => ({ type: SEND_MESSAGE ,newMessage})

export const sendMessage = (newMessage)=>{
    return (dispatch)=>{
        dispatch(sendMessageActionCreator(newMessage))
    }
}

export default dialogReducer;