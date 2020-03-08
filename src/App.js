import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <NavBar 
           navBar={props.store.getState().navBar.Friends}/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/news' redact={() => <News />} />
            <Route path='/music' redact={() => <Music />} />
          </div>
        </div>
      </div >
  );
}

export default App;
