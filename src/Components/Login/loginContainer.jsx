import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Login } from '../../redux/auth-reducer'
//import { withRedirect } from '../../hoc/Recording'
import { LoginHTML } from './LoginHTML'
import { Redirect } from 'react-router-dom'

class LoginContainer extends React.Component{
    onSubmit = (formData) => {
        this.props.Login(formData.email,formData.password,formData.rememberMe)
    }
    render(){
        if(this.props.isAuth){
            return <Redirect to='/profile'/>
        }
        return( <LoginHTML {...this.props} onSubmit={this.onSubmit}/>)
    }
    
}
const mapStateToProps = (state)=>{
    return {
        isAuth:state.auth.isAuth,
        isFetching:state.auth.isFetching
    }
}
export default compose(
    connect(mapStateToProps,{Login}))
(LoginContainer)