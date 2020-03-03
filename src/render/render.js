import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import * as serviceWorker from './../serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './../state/state';
export let renderPage=(state)=>{
ReactDOM.render(
    <BrowserRouter>
        <App 
        state={store.getState()} 
        sendMassage={store.sendMassage.bind(store)}
        newMassage={store.getState().dialogPage.newMassage}
        newChangeText={store.ChangeTextInPosts.bind(store)}
        myPostAdd={store.myPostAdd.bind(store)}
        messageChange={store.messageChange.bind(store)}/>
    </BrowserRouter>, document.getElementById('root') );
serviceWorker.unregister();
}
renderPage(store.getState());
store.Render(renderPage);


