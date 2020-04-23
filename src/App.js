import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavBarContainer from './Components/NavBar/NavBarContainer'
import UserContainerConnect from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import store from './redux/redux-store'
import LoginContainerCompose from './Components/Login/loginContainer';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { setInitialized } from './redux/app-reducer';
import Preloader from './Components/Preloader/Preload';

class App extends React.Component{
  componentDidMount(){
    this.props.setInitialized();
}
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
  return (<div className='app_wrapper'>
    <HeaderContainer />
    <div className='main'>
      <NavBarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <Profile/>} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UserContainerConnect />} />
        <Route path='/login' render={() => <LoginContainerCompose />} />
        <Route path='/news' redact={() => <News />} />
        <Route path='/news' redact={() => <News />} />
        <Route path='/music' redact={() => <Music />} />
      </div>
    </div>
  </div>);
  }
}

const mapStateToProps = (state) =>({
  initialized:state.app.initialized
})

let AppContainer = compose(connect(mapStateToProps,{setInitialized}))(App)

export const MainlyAppComponent = (props)=>{
  return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}
