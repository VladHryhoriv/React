import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavBarContainer from './Components/NavBar/NavBarContainer'
import UserContainerConnect from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { Login } from './Components/Login/login';

const App = (props) => {
  return (
      <div className='app_wrapper'>
        <HeaderContainer />
        <div className='main'>
          <NavBarContainer />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <Profile/>}/>
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path= '/users' render={()=> <UserContainerConnect/>}/>
            <Route path= '/login' render={()=> <Login/>}/>
            <Route path='/news' redact={() => <News />} />
            <Route path='/news' redact={() => <News />} />
            <Route path='/music' redact={() => <Music />} />
          </div>
        </div>
      </div >
  );
}

export default App;
