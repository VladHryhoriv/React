import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import { Route, HashRouter } from 'react-router-dom';
import NavBarContainer from './Components/NavBar/NavBarContainer'
import HeaderContainer from './Components/Header/HeaderContainer';
import store from './redux/redux-store'
import LoginContainerCompose from './Components/Login/loginContainer';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { setInitialized } from './redux/app-reducer';
import Preloader from './Components/Preloader/Preload';
import { withSuspense } from './hoc/withSuspanse';

const UserContainerConnect = React.lazy(()=> import ("./Components/Users/UsersContainer")) ;
const DialogsContainer = React.lazy(()=> import ("./Components/Dialogs/DialogsContainer")) ;
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
        <Route path='/messages' render={withSuspense(DialogsContainer ) } />
        <Route path='/users' render={withSuspense(UserContainerConnect ,true) } />
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
  return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}
