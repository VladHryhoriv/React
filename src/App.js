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
  console.log(props.state)
  return (
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <NavBar 
           navBar={props.state.navBar.Friends}/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile
              for_Profile={props.state.profilePage}  
              newChangeText={props.newChangeText}
              myPostAdd={props.myPostAdd}/>} 
              />
              
            <Route path='/messages' render={() => <Dialogs
              dialogName={props.state.dialogPage.dialogData}
              messages={props.state.dialogPage.messages}
              newMassage={props.newMassage}
              sendMassage={props.sendMassage}
              messageChange={props.messageChange}
              />} />
            <Route path='/news' redact={() => <News />} />
            <Route path='/music' redact={() => <Music />} />
          </div>
        </div>
      </div >
  );
}

export default App;
