import dialogReducer, { sendMessageActionCreator } from "./dialogs-reducer"

it('message should be increment', () => {
    //1. test data
    let state = {
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
    //2.action
    let action = sendMessageActionCreator("testing");
    let test = dialogReducer(state,action)
    //3. expectation
    expect(test.messages.length).toBe(3)
})