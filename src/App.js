import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route } from 'react-router-dom';


const App = (props) => {
  return (
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <NavBar 
           navBar={props.state.navBar.Friends}/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile
              for_Profile={props.state.profilePage}  
              dispatch={props.dispatch}/>} 
              />
              
            <Route path='/messages' render={() => <Dialogs
              dialogPage={props.state.dialogPage}
              //messages={props.state.dialogPage.messages}
              //newMassage={props.newMassage} Змінений текст
              dispatch={props.dispatch}
              />} />
            <Route path='/news' redact={() => <News />} />
            <Route path='/music' redact={() => <Music />} />
          </div>
        </div>
      </div >
  );
}

export default App;
