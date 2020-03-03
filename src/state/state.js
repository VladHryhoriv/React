let store = {
    
     _state: {
        profilePage: {
            postsData: [
                { id: '1', text: 'Hello World !!!', likeCount: '12' },
                { id: '2', text: 'Hi haw are you ?', likeCount: '45' },
                { id: '3', text: 'AAAAAAAAAAAAA ?', likeCount: '0' },
                { id: '4', text: 'DDDDDD ?', likeCount: '100' }
            ],
            newPostChange: 'it-kamasutra '
        },
        dialogPage: {
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
        },
        navBar: {
            Friends: [
                { img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Vlad' },
                { img: 'https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg', name: 'Andre' },
                { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfvqjaaSseNDZ2jlEszLJDW6UYzgB0qhS-vTsTwox6fQ7i4P1T', name: 'Kevin' }
            ]
        }
    },
    _renderPage ()  { },
    getState(){
        return this._state;
    },
    sendMassage(text){
        let newMassage = {
            text: text
        }
        console.log(this)
        this._state.dialogPage.messages.push(newMassage);
        this._state.dialogPage.newMassage = '';
        this._renderPage(this._state);
    },
    myPostAdd(){
        let newPost = {
            id: '3',
            text: this._state.profilePage.newPostChange,
            likeCount: '0'
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostChange = '';
        this._renderPage(this._state);
    },
    messageChange(newText)  {
        this._state.dialogPage.newMassage = newText;
        this._renderPage(this._state);
    },
    ChangeTextInPosts (newText)  {
        this._state.profilePage.newPostChange = newText;
        this._renderPage(this._state);
    },
    Render(observer){
             this._renderPage = observer;
    }
}
    // export let 
    // GetState()  {
    //     return this._state;
    // },

export default store;
window.store = store;
