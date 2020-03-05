const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_IN_MESSAGE = "GHANGE-IN-MESSAGE";
const dialogReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_IN_MESSAGE:
            state.newMassage = action.newText;
            return state;
        case SEND_MESSAGE:
            let newMassage = {
                text: state.newMassage
            }
            state.messages.push(newMassage);
            state.newMassage = '';
            return state;
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