import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import * as serviceWorker from './../serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/redux-store';
export let renderPage=(state)=>{
ReactDOM.render(
    <BrowserRouter>
        <App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root') );
serviceWorker.unregister();
}
renderPage(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderPage(state)
});


