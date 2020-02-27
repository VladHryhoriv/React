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
  console.log(props.newChangeText);
  return (
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <NavBar 
           navBar={props.stateData.navBar.Friends}/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile
              for_Profile={props.stateData.profilePage}  
              newChangeText={props.newChangeText}
              myPost={props.myPost}/>} 
              />
              
            <Route path='/messages' render={() => <Dialogs
              dialogName={props.stateData.dialogPage.dialogData}
              messages={props.stateData.dialogPage.messages}
              sendMassage={props.sendMassage}/>} />
            <Route path='/news' redact={() => <News />} />
            <Route path='/music' redact={() => <Music />} />
          </div>
        </div>
      </div >
  );
}

export default App;
