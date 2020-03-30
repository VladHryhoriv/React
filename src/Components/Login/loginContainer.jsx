import React from 'react'
import { profileAPI } from '../../API/api'
import { isAuthUserThunk } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Login } from './login'
import { compose } from 'redux'

class LoginContainer extends React.Component{
    onSubmit = (formData) => {
        profileAPI.postAuthLogin(formData.login,formData.password,formData.rememberMe).then(response=>{
            if(response.data.resultCode === 0){
                this.props.isAuthUserThunk()
            }
        })
    }
    render(){
        return( <Login {...this.props} onSubmit={this.onSubmit}/>)
    }
    
}
const mapStateToProps = (state) => ({
})
export default compose(
    connect(mapStateToProps,{isAuthUserThunk}))
(LoginContainer)