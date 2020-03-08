import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/redux-store';
import { Provider } from 'react-redux';
//import { Provider } from 'react-redux';

export let renderPage=(state)=>{
ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>
        <App store={store}/>
    </Provider>
    </BrowserRouter>, document.getElementById('root') );
}
renderPage(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    renderPage(state)
});


